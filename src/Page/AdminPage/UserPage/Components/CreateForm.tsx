import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import { User } from "../../../../Type/Account/User";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import { UserServices } from "../../../../Services/Account/UserServices";

interface CreateFormFields extends User { }

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
  getAllUser: ()=>void;
};

const defaultFormValues = {
  name: "",
  email: "",
  address: "",
  phone: "",
  gender: false,
  role: 3,
};

const genderOpt = [
  { value: false, label: "Nữ" },
  { value: true, label: "Nam" },
];
const roleOpt = [
  { value: 2, label: "Admin" },
  { value: 3, label: "Staff" },
];

const CreateForm: React.FC<CreateEditArticleFormProps> = ({ initForm,getAllUser }) => {
  const {
    control,
    reset,
    handleSubmit,
  } = useForm<CreateFormFields>({
    defaultValues: defaultFormValues,
  });

  useEffect(() => {
    if (initForm) {
      reset(initForm);
    } else {
      reset(defaultFormValues);
    }
  }, [initForm, reset]);
  const createUser = async(data:User)=>{
    try {
      await UserServices.createUserByAdmin(data);
      notification.success({ message: "Thêm thành công" });
      getAllUser();
    } catch (error) {
      notification.error({message: "Thêm User thất bại"})
      console.log("Error");
    }
  }
  const updateUser=async(id: number,data: User)=>{
    try {
      await UserServices.update(id,data);
      notification.success({ message: "Cập nhật thành công" });
      getAllUser();
    } catch (error) {
      notification.error({message: "Thêm User thất bại"})
      console.log("Error");
    }
  }
  const onSubmit: SubmitHandler<CreateFormFields> = async (data) => {
    try {
      if (initForm) {
        // API Update logic
        updateUser(data.id,data);
      } else {
        // API Create logic
       createUser(data);
      }
      reset(defaultFormValues);
    } catch (err) {
      notification.error({ message: "Có lỗi xảy ra, vui lòng kiểm tra lại!" });
    }
  };

  return (
    <form
      method="POST"
      className="space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputTypeString
        name="name"
        control={control}
        rules={{ required: "Tên sản phẩm không được để trống!" }}
        title="Tên"
        placeholder="Nhập tên sản phẩm"
      />
      <InputTypeString
        name="email"
        control={control}
        rules={{ required: "Tên sản phẩm không được để trống!" }}
        title="Email"
        placeholder="Nhập tên sản phẩm"
      />
      <InputTypeString
        name="address"
        control={control}
        rules={{ required: "Tên sản phẩm không được để trống!" }}
        title="Địa chỉ"
        placeholder="Nhập tên sản phẩm"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputTypeString
          name="phone"
          control={control}
          rules={{ required: "Tên sản phẩm không được để trống!" }}
          title="Số điện thoại"
          placeholder="Nhập tên sản phẩm"
        />
        <InputTypeSelect
          name="gender"
          control={control}
          rules={{ required: "Vui lòng chọn giới tính" }}
          title="Giới tính"
          titleOption={genderOpt}
        />
      </div>
      <InputTypeSelect
          name="role"
          control={control}
          rules={{ required: "Vui lòng chọn quyền của tài khoản" }}
          title="Quyền"
          titleOption={roleOpt}
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