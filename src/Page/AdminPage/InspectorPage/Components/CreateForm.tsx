import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import InputTypeString from "../../../../Components/Input/InputTypeString";

import { Inspector } from "../../../../Type/Inspector/Inspector";
import { InspectorServices } from "../../../../Services/Inspsector/InspectorServices";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import { ResponseDataUser } from "../../../../Type/Account/User";
import { UserServices } from "../../../../Services/Account/UserServices";

interface CreateFormFields extends Inspector {}

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
  getAll: () => void;
};



const CreateForm: React.FC<CreateEditArticleFormProps> = ({
  initForm,
  getAll,
}) => {
  const defaultFormValues = {
    license: "",
    userId: initForm? initForm.id : 1,
  };
  const { control, reset, handleSubmit } = useForm<CreateFormFields>({
    defaultValues: defaultFormValues,
  });
  const [userList, setUserList] = useState<{ value: number; label: string }[]>(
    []
  );
  useEffect(() => {
    if (initForm) {
      reset(initForm);
    } else {
      reset(defaultFormValues);
    }
  }, [initForm, reset]);
  const createInspector = async (data: Inspector) => {
    try {
      await InspectorServices.create(data);
      getAll();
      notification.success({ message: "Thêm thành công" });
    } catch (error) {
      notification.error({ message: "Thêm thất bại" });
      console.log(error);
    }
  };
  const updateInspector = async(id: number, data: Inspector)=>{
    try {
      await InspectorServices.update(id,data);
      getAll();
      notification.success({ message: "Cập nhật thành công" });
    } catch (error) {
      notification.error({ message: "Cập nhật thất bại" });
      console.log(error);
    }
  }
  const onSubmit: SubmitHandler<CreateFormFields> = async (data) => {
    try {
      if (initForm) {
        // API Update logic
        updateInspector(initForm.id,data);
      } else {
        // API Create logic
        createInspector(data);
      }
      reset(defaultFormValues);
    } catch (err) {
      notification.error({ message: "Có lỗi xảy ra, vui lòng kiểm tra lại!" });
    }
  };

  const getAllUser = async () => {
    try {
      const res: ResponseDataUser = await UserServices.getAll();
      const formattedData = res.data.map((item) => ({
        value: item.id,
        label:  item.id+": "+item.name , 
      }));
      setUserList(formattedData);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputTypeString
          name="license"
          control={control}
          rules={{ required: "Tên chứng chỉ không được để trống" }}
          title="Chứng chỉ"
          placeholder="Nhập tên chứng chỉ"
        />
        <InputTypeSelect
          name="userId"
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Danh mục sản phẩm"
          titleOption={userList}
        />
      </div>
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
