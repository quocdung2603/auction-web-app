import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import InputDescription from "../../../../Components/Input/InputDescription";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import { Tax, TaxType } from "../../../../Type/BillAndTax/Tax";
import InputTypeNumber from "../../../../Components/Input/InputTypeNumber";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import { TaxServices } from "../../../../Services/Fee/TaxServices";

interface CreateFormFields extends Tax {}

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
  getAll: () => void;
  closeModal: () => void;
};

const defaultFormValues = {
  id: 0,
  taxName: "",
  taxAmount: 0,
  taxType: TaxType.Fixed,
  taxDescription: "",
  deflag: false,
};

const taxTypeOptions = [
  { value: TaxType.Fixed, label: "Fixed" },
  { value: TaxType.Percentage, label: "Percentage" },
];

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
        TaxServices.update(initForm.id.toString(), data)
          .then(() => {
            notification.success({ message: "Cập nhật thành công" });
            getAll();
            closeModal();
          })
          .catch(() => {
            notification.error({ message: "Cập nhật thất bại" });
          });
      } else {
        // API Create logic
        TaxServices.create(data)
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
        name="taxName"
        control={control}
        rules={{ required: "Tên sản phẩm không được để trống!" }}
        title="Tên thuế"
        placeholder="Tên thuế "
      />
      <InputTypeNumber
        name="taxAmount"
        control={control}
        rules={{ required: "Tên sản phẩm không được để trống!" }}
        title="Giá trị "
        placeholder="Giá trị loại thuế "
      />
      <InputTypeSelect
        name="taxType"
        control={control}
        rules={{ required: "Vui lòng chọn danh mục" }}
        title="Đơn vị tính "
        titleOption={taxTypeOptions}
      />
      <InputDescription
        name="taxDescription"
        control={control}
        placeholder="Nhập mô tả"
        rules={{ required: "Mô tả sản phẩm không được để trống!" }}
        defaultValue={initForm?.taxDescription}
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
