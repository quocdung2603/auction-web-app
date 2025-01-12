import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import { Inventory } from "../../../../Type/Asset/Inventory";
import InputTypeNumber from "../../../../Components/Input/InputTypeNumber";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import InputTypeDateTime from "../../../../Components/Input/InputTypeDateTime";
import { InventoryServices } from "../../../../Services/Asset/InventoryServices";
import { ResponseDataWarehouse } from "../../../../Type/Asset/Warehouse";
import { WarehouseServices } from "../../../../Services/Asset/WarehouseServices";
import { ResponseDataAsset } from "../../../../Type/Asset/Asset";
import { AssetServices } from "../../../../Services/Asset/AssetServices";

interface CreateFormFields extends Inventory {}

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

  const [warehouseList, setWarehouseList] = useState<
    { value: number; label: string }[]
  >([]);

  const [assetList, setAssetList] = useState<
    { value: number; label: string }[]
  >([]);

  const getAllWarehouse = async () => {
    try {
      const res: ResponseDataWarehouse = await WarehouseServices.getAll();
      const formattedData = res.metadata.data.map((item) => ({
        value: item.warehouseID,
        label: item.location,
      }));
      setWarehouseList(formattedData);
    } catch (error) {
      alert("lỗi");
      console.log(error);
    }
  };

  const getAllAsset = async () => {
    try {
      const res: ResponseDataAsset = await AssetServices.getAll();
      const formattedData = res.metadata.data.map((item) => ({
        value: item.assetID,
        label: item.assetName,
      }));
      setAssetList(formattedData);
    } catch (error) {
      alert("lỗi");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllWarehouse();
    getAllAsset();
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
        InventoryServices.update(initForm.inventoryID.toString(), data)
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
        InventoryServices.create(data)
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
        title="Tài sản"
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
