import { useEffect, useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Button, notification, Input } from "antd";
import { AuctionSession } from "../../../../Type/Auction/AuctionSession";
import InputTypeDateTime from "../../../../Components/Input/InputTypeDateTime";
import { AuctionSessionServices } from "../../../../Services/Auction/AuctionSessionServices";
import { ResponseDataAsset } from "../../../../Type/Asset/Asset";
import { AssetServices } from "../../../../Services/Asset/AssetServices";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import HistoryPrice from "../../../ClientPage/ProductDetail/Components/HistoryPrice";

interface CreateFormFields extends AuctionSession {}

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
  getAll: () => void;
  closeModal: () => void;
};

const defaultFormValues: CreateFormFields = {
  id: 0,
  name: "",
  startTime: new Date().toISOString().split("T")[0], // YYYY-MM-DD
  endTime: new Date().toISOString().split("T")[0],   // YYYY-MM-DD
  paymentDeadline: 30,
  assetId: 0,
  depositFee: "0",
  bidStep: "0",
  isDelete: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  deletedAt: null,
};

const CreateForm: React.FC<CreateEditArticleFormProps> = ({
  initForm,
  getAll,
  closeModal,
}) => {
  const { control, reset, handleSubmit } = useForm<CreateFormFields>({
    defaultValues: defaultFormValues,
  });

  const [assetList, setAssetList] = useState<{ value: number; label: string }[]>([]);

  const onSubmit: SubmitHandler<CreateFormFields> = async (data) => {
    try {
      const submitData = {
        ...data,
        startTime: new Date(data.startTime).toISOString(), // Chuyển thành ISO đầy đủ
        endTime: new Date(data.endTime).toISOString(),     // Chuyển thành ISO đầy đủ
        depositFee: data.depositFee.toString(),
        bidStep: data.bidStep.toString(),
      };

      if (initForm) {
        await AuctionSessionServices.update(initForm.id.toString(), submitData);
        notification.success({ message: "Cập nhật thành công" });
      } else {
        await AuctionSessionServices.create(submitData);
        notification.success({ message: "Thêm thành công" });
      }

      closeModal();
      getAll();
      reset(defaultFormValues);
    } catch (err) {
      notification.error({ message: "Có lỗi xảy ra, vui lòng kiểm tra lại!" });
    }
  };

  const getAllAsset = async () => {
    try {
      const res: ResponseDataAsset = await AssetServices.getAll();
      const listDataAvailable = res.metadata.data
        .filter((item) => item.status === "available")
        .map((item) => ({
          value: item.assetID,
          label: item.assetName,
        }));
      setAssetList(listDataAvailable);
    } catch (error) {
      notification.error({ message: "Failed to fetch assets" });
    }
  };

  useEffect(() => {
    getAllAsset();
  }, []);

  useEffect(() => {
    if (initForm) {
      reset({
        ...initForm,
        startTime: new Date(initForm.startTime).toISOString().split("T")[0],
        endTime: new Date(initForm.endTime).toISOString().split("T")[0],
        depositFee: initForm.depositFee.toString(),
        bidStep: initForm.bidStep.toString(),
      });
    } else {
      reset(defaultFormValues);
    }
  }, [initForm, reset]);

  return (
    <form method="POST" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block mb-1">Tên phiên đấu giá</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Vui lòng nhập tên phiên đấu giá!" }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input {...field} placeholder="Nhập tên phiên đấu giá" />
                {error && (
                  <span className="text-red-500 text-sm">{error.message}</span>
                )}
              </>
            )}
          />
        </div>
        <InputTypeSelect
          name="assetId"
          control={control}
          rules={{ required: "Vui lòng chọn tài sản muốn đấu giá" }}
          title="Tài sản"
          titleOption={assetList}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <InputTypeDateTime
            name="startTime"
            control={control}
            rules={{ required: "Vui lòng chọn thời gian bắt đầu!" }}
            title="Thời gian bắt đầu"
            placeholder="Chọn thời gian bắt đầu"
          />
          <InputTypeDateTime
            name="endTime"
            control={control}
            rules={{ required: "Vui lòng chọn thời gian kết thúc!" }}
            title="Thời gian kết thúc"
            placeholder="Chọn thời gian kết thúc"
          />
          <div>
            <label className="block mb-1">Phí đặt cọc</label>
            <Controller
              name="depositFee"
              control={control}
              rules={{
                required: "Vui lòng nhập phí đặt cọc!",
                pattern: {
                  value: /^\d+\.?\d{0,2}$/,
                  message: "Vui lòng nhập số tiền hợp lệ (2 chữ số thập phân)!",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input
                    {...field}
                    placeholder="Nhập phí đặt cọc"
                    addonAfter="VND"
                  />
                  {error && (
                    <span className="text-red-500 text-sm">
                      {error.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <div>
            <label className="block mb-1">Bước giá</label>
            <Controller
              name="bidStep"
              control={control}
              rules={{
                required: "Vui lòng nhập bước giá!",
                pattern: {
                  value: /^\d+\.?\d{0,2}$/,
                  message: "Vui lòng nhập số tiền hợp lệ (2 chữ số thập phân)!",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input
                    {...field}
                    placeholder="Nhập bước giá"
                    addonAfter="VND"
                  />
                  {error && (
                    <span className="text-red-500 text-sm">
                      {error.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div>
          <label className="block mb-1">Thời hạn thanh toán</label>
          <Controller
            name="paymentDeadline"
            control={control}
            rules={{
              required: "Vui lòng nhập thời hạn thanh toán!",
              pattern: {
                value: /^[0-9]+$/,
                message: "Vui lòng nhập số ngày!",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input
                  {...field}
                  placeholder="Nhập số ngày"
                  addonAfter="ngày"
                />
                {error && (
                  <span className="text-red-500 text-sm">{error.message}</span>
                )}
              </>
            )}
          />
        </div>
      </div>
        {initForm && <HistoryPrice auctionId={initForm.id.toString()}/>}
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