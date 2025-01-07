import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import InputDescription from "../../../../Components/Input/InputDescription";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import { Request } from "../../../../Type/Inspector/Request";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";

interface CreateFormFields extends Request {}

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
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

const userList = [
  { value: 1, label: "Asset Status 1" },
  { value: 2, label: "Asset Status 2" },
  { value: 3, label: "Asset Status 3" },
  { value: 4, label: "Asset Status 4" },
  { value: 5, label: "Asset Status 5" },
];

const inspector = [
  { value: 1, label: "Inspector 1" },
  { value: 2, label: "Inspector 2" },
  { value: 3, label: "Inspector 3" },
  { value: 4, label: "Inspector 4" },
  { value: 5, label: "Inspector 5" },
];

const verifyList = [
  { value: true, label: "Đã Xác thực" },
  { value: false, label: "Chưa xác thực " },
];

const statusList = [
  { value: true, label: "Đã Xác thực" },
  { value: false, label: "Chưa xác thực " },
];

const CreateForm: React.FC<CreateEditArticleFormProps> = ({ initForm }) => {
  const { control, reset, handleSubmit } = useForm<CreateFormFields>({
    defaultValues: defaultFormValues,
  });

  useEffect(() => {
    if (initForm) {
      reset(initForm);
    } else {
      reset(defaultFormValues);
    }
  }, [initForm, reset]);

  const onSubmit: SubmitHandler<CreateFormFields> = async (data) => {
    try {
      if (initForm) {
        // API Update logic
        notification.success({ message: "Cập nhật thành công" });
        alert(data);
      } else {
        // API Create logic
        notification.success({ message: "Thêm thành công" });
        alert(JSON.stringify(data));
      }
      reset(defaultFormValues);
    } catch (err) {
      notification.error({ message: "Có lỗi xảy ra, vui lòng kiểm tra lại!" });
    }
  };

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
          title="Người yêu cầucầu"
          titleOption={assetType}
        />
        <InputTypeSelect
          name="inspector"
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Người kiểm định"
          titleOption={inspector}
        />
        <InputTypeSelect
          name="assetId"
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Tài sản"
          titleOption={userList}
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
