import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import { Inventory } from "../../../../Type/Asset/Inventory";
import InputTypeNumber from "../../../../Components/Input/InputTypeNumber";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import InputTypeDateTime from "../../../../Components/Input/InputTypeDateTime";

interface CreateFormFields extends Inventory { }

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
};

const defaultFormValues = {
  assetID: 0,
  assetName: "",
  mainImage: "",
  assetDescription: "",
  assetPrice: 0,
  inspectorID: 0,
  assetTypeID: 0,
  assetStatusID: 0,
};

const warehouseList = [
  { value: 1, label: "Asset Type 1" },
  { value: 2, label: "Asset Type 2" },
  { value: 3, label: "Asset Type 3" },
  { value: 4, label: "Asset Type 4" },
  { value: 5, label: "Asset Type 5" },
];

const assetList = [
  { value: 1, label: "Asset Status 1" },
  { value: 2, label: "Asset Status 2" },
  { value: 3, label: "Asset Status 3" },
  { value: 4, label: "Asset Status 4" },
  { value: 5, label: "Asset Status 5" },
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
      <InputTypeNumber
        name="quantity"
        control={control}
        rules={{ required: "Giá sản phẩm không được để trống!" }}
        title="Giá sản phẩm"
        placeholder="Nhập giá sản phẩm"
      />
      <div className="grid grid-cols-2 gap-4">
        <InputTypeDateTime
          title="Ngày nhập kho"
          name="entryTime"
          control={control}
          rules={{ required: "Vui lòng chọn ngày" }}
          placeholder="Nhập ngày tạo"
        />
        <InputTypeDateTime
          title="Ngày xuất kho"
          name="exitTime"
          control={control}
          rules={{ required: "Vui lòng chọn ngày" }}
          placeholder="Nhập ngày tạo"
        />
      </div>
      <InputTypeSelect
        name="warehouseID"
        control={control}
        rules={{ required: "Vui lòng chọn danh mục" }}
        title="Danh mục sản phẩm"
        titleOption={warehouseList}
      />
      <InputTypeSelect
        name="assetID"
        control={control}
        rules={{ required: "Vui lòng chọn danh mục" }}
        title="Danh mục sản phẩm"
        titleOption={assetList}
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