import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import { User } from "../../../../Type/Account/User";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";

interface CreateFormFields extends User { }

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
};

const defaultFormValues = {
  name: "",
  email: "",
  address: "",
  phone: "",
  gender: false,
};

const genderOpt = [
  { value: false, label: "Nữ" },
  { value: true, label: "Nam" },
];

const CreateForm: React.FC<CreateEditArticleFormProps> = ({ initForm }) => {
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

  const onSubmit: SubmitHandler<CreateFormFields> = async (data) => {
    try {
      if (initForm) {
        // API Update logic
        notification.success({ message: "Cập nhật thành công" });
        alert(data)
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
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Danh mục sản phẩm"
          titleOption={genderOpt}
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