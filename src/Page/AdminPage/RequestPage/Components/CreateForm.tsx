import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import InputDescription from "../../../../Components/Input/InputDescription";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import { Request } from "../../../../Type/Inspector/Request";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import { ResponseDataUser } from "../../../../Type/Account/User";
import { UserServices } from "../../../../Services/Account/UserServices";
import {
  Inspector,
  ResponseDataInspector,
} from "../../../../Type/Inspector/Inspector";
import { InspectorServices } from "../../../../Services/Inspsector/InspectorServices";
import { RequestServices } from "../../../../Services/Inspsector/RequestServices";

interface CreateFormFields extends Request {}

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
  getAll: ()=>void;
};

const defaultFormValues = {
  name: "",
  description: "",
  verify: false,
  status: false,
  inspector: 0,
  userId: 0,
  assetId: 0,
};

const assetType = [
  { value: 1, label: "Asset Type 1" },
  { value: 2, label: "Asset Type 2" },
  { value: 3, label: "Asset Type 3" },
  { value: 4, label: "Asset Type 4" },
  { value: 5, label: "Asset Type 5" },
];

const verifyList = [
  { value: true, label: "Đã Xác thực" },
  { value: false, label: "Chưa xác thực " },
];

const statusList = [
  { value: true, label: "Đã Xác thực" },
  { value: false, label: "Chưa xác thực " },
];

const CreateForm: React.FC<CreateEditArticleFormProps> = ({ initForm,getAll }) => {
  const { control, reset, handleSubmit } = useForm<CreateFormFields>({
    defaultValues: defaultFormValues,
  });
  const [userList, setUserList] = useState<{ value: number; label: string }[]>(
    []
  );
  const [inspectorList, setInspectoList] = useState<
    { value: number; label: string }[]
  >([]);

  useEffect(() => {
    if (initForm) {
      reset(initForm);
    } else {
      reset(defaultFormValues);
    }
  }, [initForm, reset]);
  const createRequest= async (data:Request)=>{
    try {
      await RequestServices.create(data);
      getAll();
      notification.success({ message: "Thêm thành công" });
    } catch (error) {
      notification.error({ message: "Thêm thất bại" });
    }
  }
  const updateRequest= async(id: number,data:Request)=>{
    try {
      await RequestServices.update(id,data);
      getAll();
      notification.success({ message: "Cập nhật thành công" });
    } catch (error) {
      notification.error({ message: "Cập nhật thất bại" });
    }
  }
  const onSubmit: SubmitHandler<CreateFormFields> = async (data) => {
    try {
      if (initForm) {
        // API Update logic
        updateRequest(data.id,data);
      } else {
        // API Create logic
        createRequest(data);
      }
      reset(defaultFormValues);
    } catch (err) {
      notification.error({ message: "Có lỗi xảy ra, vui lòng kiểm tra lại!" });
    }
  };
  const getAllInspector = async () => {
    try {
      const res: ResponseDataInspector = await InspectorServices.getAll();
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getAllUser = async () => {
    try {
      const listInspector: Inspector[] | undefined = await getAllInspector();
      const res: ResponseDataUser = await UserServices.getAll();
      if (!listInspector) {
        throw new Error("Không thể lấy danh sách người kiểm định");
      }
      const formattedUserList = res.data.map((item) => ({
        value: item.id,
        label: `${item.id}: ${item.name}`,
      }));
      setUserList(formattedUserList);

      const inspectorIds = listInspector.map((inspector) => inspector.userId);
      const formattedInspectorList = res.data
        .filter((item) => inspectorIds.includes(item.id))
        .map((item) => ({
          value: item.id,
          label: `${item.id}: ${item.name}`,
        }));
      setInspectoList(formattedInspectorList);
    } catch (error) {
      alert("lỗi");
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <form method="POST" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <InputTypeString
        name="name"
        control={control}
        rules={{ required: "Tên sản phẩm không được để trống!" }}
        title="Tên yêu cầu"
        placeholder="Nhập tên sản phẩm"
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <InputTypeSelect
          name="userId"
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Người yêu cầu"
          titleOption={userList}
        />
        <InputTypeSelect
          name="inspectorId"
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Người kiểm định"
          titleOption={inspectorList}
        />
        <InputTypeSelect
          name="assetId"
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Tài sản"
          titleOption={assetType}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputTypeSelect
          name="verify"
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Trạng thái xác thực"
          titleOption={verifyList}
        />
        <InputTypeSelect
          name="status"
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Trạng thái yêu cầu"
          titleOption={statusList}
        />
      </div>
      <InputDescription
        name="description"
        control={control}
        placeholder="Nhập mô tả sản phẩm"
        rules={{ required: "Mô tả sản phẩm không được để trống!" }}
        defaultValue={initForm?.description}
      />
      <div className="text-right">
        <Button
          type="primary"
          htmlType="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {initForm ? "Cập nhật" : "Tạo"}
        </Button>
      </div>
    </form>
  );
};

export default CreateForm;
