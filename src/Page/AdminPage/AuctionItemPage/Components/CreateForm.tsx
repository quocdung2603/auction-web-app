import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import { AuctionItem } from "../../../../Type/Auction/AuctionItem";
import { AuctionItemServices } from "../../../../Services/Auction/AuctionItem";
import InputTypeNumber from "../../../../Components/Input/InputTypeNumber";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import { ResponseDataAuctionSession } from "../../../../Type/Auction/AuctionSession";
import { AuctionSessionServices } from "../../../../Services/Auction/AuctionSessionServices";
import { ResponseDataAsset } from "../../../../Type/Asset/Asset";
import { AssetServices } from "../../../../Services/Asset/AssetServices";
import { parseDateToISO } from "../../../../Util/ConverStringToTime";
interface CreateFormFields extends AuctionItem {}

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
  getAll: () => void;
  closeModal: () => void;
};

const defaultFormValues = {
  auctionSessionId: 0,
  assetId: 0,
  startingBids: 0,
  bidIncrement: 0,
};

const CreateForm: React.FC<CreateEditArticleFormProps> = ({
  initForm,
  getAll,
  closeModal,
}) => {
  const { control, reset, handleSubmit } = useForm<CreateFormFields>({
    defaultValues: defaultFormValues,
  });

  const [auctionSessionIdList, setAuctionSessionIdList] = useState<
    { value: number; label: string }[]
  >([]);

  const [assetIdList, setAssetIdList] = useState<
    { value: number; label: string }[]
  >([]);

  const getAllAuctionSession = async () => {
    try {
      const res: ResponseDataAuctionSession =
        await AuctionSessionServices.getAll();
      const formattedData = res.metadata.auctionSessions.map((item) => ({
        value: item.auctionSessionID,
        label:
          item.auctionSessionID.toString() +
          ": " +
          parseDateToISO(item.startTime.toString()) +
          " - " +
          parseDateToISO(item.endTime.toString()),
      }));
      setAuctionSessionIdList(formattedData);
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
        label: item.assetID + ": " + item.assetName,
      }));
      setAssetIdList(formattedData);
    } catch (error) {
      alert("lỗi");
      console.log(error);
    }
  };

  useEffect(() => {
    if (initForm) {
      reset(initForm);
    } else {
      reset(defaultFormValues);
    }
  }, [initForm, reset]);

  useEffect(() => {
    getAllAuctionSession();
    getAllAsset();
  }, []);

  const onSubmit: SubmitHandler<CreateFormFields> = async (data) => {
    try {
      if (initForm) {
        // API Update logic
        AuctionItemServices.update(initForm.auctionItemId.toString(), data)
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
        AuctionItemServices.create(data)
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputTypeNumber
          name="startingBids"
          control={control}
          rules={{ required: "Giá khởi điểm không được để trống!" }}
          title="Giá khởi điểm "
          placeholder="Nhập giá khởi điểm"
        />
        <InputTypeNumber
          name="bidIncrement"
          control={control}
          rules={{ required: "Bước nhảy không được để trống!" }}
          title="Bước nhảy"
          placeholder="Nhập bước nhảy "
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputTypeSelect
          name="auctionSessionId"
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Mã phiên đấu giá"
          titleOption={auctionSessionIdList}
        />
        <InputTypeSelect
          name="assetId"
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Mã tài sản đấu giá"
          titleOption={assetIdList}
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
