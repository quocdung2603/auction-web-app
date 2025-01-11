import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import { AssetType } from "../../../../Type/Asset/AssetType";
import { AssetTypeServices } from "../../../../Services/Asset/AssetTypeServices";
interface CreateFormFields extends AssetType {}

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
  getAll: () => void;
  closeModal: () => void;
};

const defaultFormValues = {
  assetTypeName: "",
};

const CreateForm: React.FC<CreateEditArticleFormProps> = ({
  initForm,
  getAll,
  closeModal,
}) => {
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
        AssetTypeServices.update(initForm.assetTypeID.toString(), data)
          .then(() => {
            notification.success({ message: "Cập nhật thành công" });
            closeModal();
            getAll();
          })
          .catch(() => {
            notification.error({ message: "Cập nhật thất bại" });
          });
      } else {
        // API Create logic
        AssetTypeServices.create(data)
          .then(() => {
            notification.success({ message: "Thêm thành công" });
            closeModal();
            getAll();
          })
          .catch(() => {
            notification.error({ message: "Thêm thất bại" });
          });
      }
      reset(defaultFormValues);
    } catch (err) {
      notification.error({ message: "Có lỗi xảy ra, vui lòng kiểm tra lại!" });
    }
  };

  return (
    <form method="POST" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <InputTypeString
        name="assetTypeName"
        control={control}
        rules={{ required: "Loại tài sản không được để trống!" }}
        title="Loại tài sản"
        placeholder="Nhập loại tài sản"
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
