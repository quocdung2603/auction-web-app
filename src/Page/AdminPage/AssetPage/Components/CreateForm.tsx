import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import InputDescription from "../../../../Components/Input/InputDescription";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import { Asset } from "../../../../Type/Asset/Asset";
import InputTypeNumber from "../../../../Components/Input/InputTypeNumber";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import InputTypeFile from "../../../../Components/Input/InputTypeFile";

interface CreateFormFields extends Asset { }

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

const assetType = [
  { value: 1, label: "Asset Type 1" },
  { value: 2, label: "Asset Type 2" },
  { value: 3, label: "Asset Type 3" },
  { value: 4, label: "Asset Type 4" },
  { value: 5, label: "Asset Type 5" },
];

const assetStatus = [
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="w-full h-[300px]">
          <InputTypeFile
            name="mainImage"
            control={control}
            rules={{ required: "Vui lòng chọn ảnh" }}
            label="Chọn ảnh sản phẩm"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <InputTypeString
            name="assetName"
            control={control}
            rules={{ required: "Tên sản phẩm không được để trống!" }}
            title="Tên sản phẩm"
            placeholder="Nhập tên sản phẩm"
          />
          <InputTypeNumber
            name="assetPrice"
            control={control}
            rules={{ required: "Giá sản phẩm không được để trống!" }}
            title="Giá sản phẩm"
            placeholder="Nhập giá sản phẩm"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <InputTypeSelect
          name="assetTypeID"
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Danh mục sản phẩm"
          titleOption={assetType}
        />
        <InputTypeSelect
          name="inspectorID"
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Người kiểm định"
          titleOption={inspector}
        />
        <InputTypeSelect
          name="assetStatusID"
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Danh mục sản phẩm"
          titleOption={assetStatus}
        />
      </div>
      <InputDescription
        name="assetDescription"
        control={control}
        placeholder="Nhập mô tả sản phẩm"
        rules={{ required: 'Mô tả sản phẩm không được để trống!' }}
        defaultValue={initForm?.assetDescription} 
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