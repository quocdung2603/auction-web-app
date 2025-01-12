import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import InputDescription from "../../../../Components/Input/InputDescription";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import { Asset } from "../../../../Type/Asset/Asset";
import InputTypeNumber from "../../../../Components/Input/InputTypeNumber";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import InputTypeFile from "../../../../Components/Input/InputTypeFile";
import { AssetType, ResponseData } from "../../../../Type/Asset/AssetType";
import { AssetTypeServices } from "../../../../Services/Asset/AssetTypeServices";
import { ResponseDataInspector } from "../../../../Type/Inspector/Inspector";
import { InspectorServices } from "../../../../Services/Inspsector/InspectorServices";
import { ResponseDataAssetStatus } from "../../../../Type/Asset/AssetStatus";
import { AssetStatusServices } from "../../../../Services/Asset/AssetStatusServices";
import { AssetServices } from "../../../../Services/Asset/AssetServices";

interface CreateFormFields extends Asset {}

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
  getAll: () => void;
  closeModal: () => void;
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

const CreateForm: React.FC<CreateEditArticleFormProps> = ({
  initForm,
  getAll,
  closeModal,
}) => {
  const { control, reset, handleSubmit } = useForm<CreateFormFields>({
    defaultValues: defaultFormValues,
  });

  const [assetType, setAssetType] = useState<
    { value: number; label: string }[]
  >([]);
  const [assetStatus, setAssetStatus] = useState<
    { value: number; label: string }[]
  >([]);
  const [inspector, setInspector] = useState<
    { value: number; label: string }[]
  >([]);

  const getAllAssetType = async () => {
    try {
      const res: ResponseData = await AssetTypeServices.getAll();
      const formattedData = res.metadata.data.map((item) => ({
        value: item.assetTypeID,
        label: item.assetTypeID + ": " + item.assetTypeName,
      }));
      setAssetType(formattedData);
    } catch (error) {
      alert("lỗi");
      console.log(error);
    }
  };

  const getAllInspector = async () => {
    try {
      const res: ResponseDataInspector = await InspectorServices.getAll();
      const formattedData = res.data.map((item) => ({
        value: item.id,
        label: item.id + ": " + item.userId,
      }));
      setInspector(formattedData);
    } catch (error) {
      alert("lỗi");
      console.log(error);
    }
  };

  const getAllAssetStatus = async () => {
    try {
      const res: ResponseDataAssetStatus = await AssetStatusServices.getAll();
      const formattedData = res.metadata.result.map((item) => ({
        value: item.assetStatusID,
        label: item.assetStatusID + ": " + item.assetStatusName,
      }));
      setAssetStatus(formattedData);
    } catch (error) {
      alert("lỗi");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAssetType();
    getAllInspector();
    getAllAssetStatus();
  }, []);

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
        AssetServices.update(initForm.assetID.toString(), data)
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
        AssetServices.create(data)
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
    <form method="POST" className="space-y-6" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
          title="Loại tài sản"
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
          title="Trạng thái"
          titleOption={assetStatus}
        />
      </div>
      <InputDescription
        name="assetDescription"
        control={control}
        placeholder="Nhập mô tả sản phẩm"
        rules={{ required: "Mô tả sản phẩm không được để trống!" }}
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
