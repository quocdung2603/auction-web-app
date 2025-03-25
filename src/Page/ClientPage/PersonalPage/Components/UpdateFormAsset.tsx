import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import InputDescription from "../../../../Components/Input/InputDescription";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import { Asset } from "../../../../Type/Asset/Asset";
import InputTypeNumber from "../../../../Components/Input/InputTypeNumber";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import InputTypeFile from "../../../../Components/Input/InputTypeFile";
import { ResponseDataAssetType } from "../../../../Type/Asset/AssetType";
import { AssetTypeServices } from "../../../../Services/Asset/AssetTypeServices";
import { ResponseDataInspector } from "../../../../Type/Inspector/Inspector";
import { AssetServices } from "../../../../Services/Asset/AssetServices";
import { InspectorServices } from "../../../../Services/Inspsector/InspectorServices";
import { useAuth } from "../../../../Common/Context/AuthContext";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const editorConfiguration = {
  toolbar: {
    items: [],
    shouldNotGroupWhenFull: true,
  },
  contentsCss: ["./test.css"],
};

interface CreateFormFields extends Asset {}

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
  getAll: () => void;
  closeModal: () => void;
};

const defaultFormValues: CreateFormFields = {
  assetID: 0,
  userID: 0,
  assetName: "",
  mainImage: "",
  assetDescription: "",
  assetPrice: 0,
  address: "",
  inspectorID: 1,
  assetTypeID: 0,
  assetStatusID: 1,
  status: "pending",
  reason: "",
  delflag: false,
  created_at: new Date(),
  updated_at: new Date(),
  deleted_at: new Date(),
  images: [],
};

const UpdateForm: React.FC<CreateEditArticleFormProps> = ({
  initForm,
  getAll,
  closeModal,
}) => {
  const { control, reset, handleSubmit, watch } = useForm<CreateFormFields>({
    defaultValues: defaultFormValues,
  });
  const { user } = useAuth();
  const [assetType, setAssetType] = useState<
    { value: number; label: string }[]
  >([]);
  const [assetStatus] = useState<{ value: string; label: string }[]>([
    { value: "available", label: "Đã thẩm định" },
    { value: "unavailable", label: "Từ chối" },
    { value: "pending", label: "Chờ thẩm định" },
  ]);
  const [inspector, setInspector] = useState<
    { value: number; label: string }[]
  >([]);

  const getAllAssetType = async () => {
    try {
      const res: ResponseDataAssetType = await AssetTypeServices.getAll();
      const formattedData = res.metadata.data.map((item) => ({
        value: item.assetTypeID,
        label: `${item.assetTypeID}: ${item.assetTypeName}`,
      }));
      setAssetType(formattedData);
    } catch (error) {
      notification.error({ message: "Failed to fetch asset types" });
    }
  };

  const getAllInspector = async () => {
    try {
      const res: ResponseDataInspector = await InspectorServices.getAll();
      const formattedData = res.data.map((item) => ({
        value: item.id,
        label: `${item.id}: UserId: ${item.userId} : License: ${item.license}`,
      }));
      setInspector(formattedData);
    } catch (error) {
      notification.error({ message: "Failed to fetch inspectors" });
    }
  };

  useEffect(() => {
    getAllAssetType();
    getAllInspector();
  }, []);

  const onSubmit: SubmitHandler<CreateFormFields> = async (data) => {
    try {
      if (initForm) {
        await AssetServices.update(initForm.assetID.toString(), data);
        notification.success({ message: "Cập nhật thành công" });
      } else {
        if (user) {
          const dataReq = { ...data, userID: user?.id };
          await AssetServices.create(dataReq);
          notification.success({ message: "Thêm thành công" });
        }
      }
      closeModal();
      getAll();
      reset(defaultFormValues);
    } catch (err) {
      notification.error({ message: "Có lỗi xảy ra, vui lòng kiểm tra lại!" });
    }
  };

  useEffect(() => {
    if (initForm) {
      reset(initForm);
    } else {
      reset(defaultFormValues);
    }
  }, [initForm, reset]);

  const status = watch("status");

  return (
    <form
      method="POST"
      className="space-y-6"
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
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
          <InputTypeString
            name="address"
            control={control}
            rules={{ required: "Địa chỉ không được để trống!" }}
            title="Địa chỉ"
            placeholder="Nhập địa chỉ"
          />
        </div>
      </div>
      <div
        className={`grid grid-cols-1 ${initForm && "sm:grid-cols-3 gap-4"}`}
      >
        <InputTypeSelect
          name="assetTypeID"
          control={control}
          rules={{ required: "Vui lòng chọn loại tài sản" }}
          title="Loại tài sản"
          titleOption={assetType}
        />
        {initForm && (
          <>
            <InputTypeSelect
              name="inspectorID"
              control={control}
              rules={{ required: "Vui lòng chọn người kiểm định" }}
              title="Người kiểm định"
              titleOption={inspector}
              disabled={true} // Khóa trường "Người kiểm định"
            />
            <InputTypeSelect
              name="status"
              control={control}
              rules={{ required: "Vui lòng chọn trạng thái" }}
              title="Trạng thái"
              titleOption={assetStatus}
              disabled={true} // Khóa trường "Trạng thái"
            />
          </>
        )}
      </div>
      {status === "unavailable" && (
        <div>
          <label className="block mb-1 text-lg text-black font-medium">
            Lý do từ người quản trị đưa ra:
          </label>
          <CKEditor
            editor={ClassicEditor}
            config={editorConfiguration}
            data={initForm?.reason}
            onReady={(editor) => {
              const editableElement = editor.ui.view.editable.element;
              if (editableElement) {
                editableElement.style.border = "none";
                editableElement.style.boxShadow = "none";
              }
            }}
            disabled
          />
        </div>
      )}
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

export default UpdateForm;