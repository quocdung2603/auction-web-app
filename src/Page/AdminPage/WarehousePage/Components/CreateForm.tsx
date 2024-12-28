import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import { Warehouse } from "../../../../Type/Asset/Warehouse";
interface CreateFormFields extends Warehouse { }

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
};

const defaultFormValues = {
  location: "",
};

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
        name="location"
        control={control}
        rules={{ required: "Tên sản phẩm không được để trống!" }}
        title="Vị trí kho"
        placeholder="Nhập vị trí kho"
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