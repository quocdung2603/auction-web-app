import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import InputDescription from "../../../../Components/Input/InputDescription";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import { Tax, TaxType } from "../../../../Type/BillAndTax/Tax";
import InputTypeNumber from "../../../../Components/Input/InputTypeNumber";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";

interface CreateFormFields extends Tax { }

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
};

const defaultFormValues = {
  taxID: 0,
  taxName: "",
  taxAmount: 0,
  taxType: TaxType.Fixed,
  taxDescription: "",
};

const taxTypeOptions = [
  { value: TaxType.Fixed, label: "Fixed" },
  { value: TaxType.Percentage, label: "Percent" }
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
        name="taxName"
        control={control}
        rules={{ required: "Tên sản phẩm không được để trống!" }}
        title="Tên thuế"
        placeholder="Nhập tên sản phẩm"
      />
      <InputTypeNumber
        name="taxAmount"
        control={control}
        rules={{ required: "Tên sản phẩm không được để trống!" }}
        title="Tên thuế"
        placeholder="Nhập tên sản phẩm"
      />
      <InputTypeSelect
        name="taxType"
        control={control}
        rules={{ required: "Vui lòng chọn danh mục" }}
        title="Người kiểm định"
        titleOption={taxTypeOptions}
      />
      <InputDescription
        name="taxDescription"
        control={control}
        placeholder="Nhập mô tả sản phẩm"
        rules={{ required: 'Mô tả sản phẩm không được để trống!' }}
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