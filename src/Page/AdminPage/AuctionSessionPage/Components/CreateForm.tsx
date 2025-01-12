import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import { AuctionSession } from "../../../../Type/Auction/AuctionSession";
import InputTypeDateTime from "../../../../Components/Input/InputTypeDateTime";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import { AuctionSessionServices } from "../../../../Services/Auction/AuctionSessionServices";

interface CreateFormFields extends AuctionSession {}

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
  getAll: () => void;
  closeModal: () => void;
};

const defaultFormValues = {
  auctionSessionID: 0,
  startTime: new Date(),
  endTime: new Date(),
  eventID: 0,
};

const eventList = [
  { value: 1, label: "Asset Type 1" },
  { value: 2, label: "Asset Type 2" },
  { value: 3, label: "Asset Type 3" },
  { value: 4, label: "Asset Type 4" },
  { value: 5, label: "Asset Type 5" },
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
        AuctionSessionServices.update(
          initForm.auctionSessionID.toString(),
          data
        )
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
        AuctionSessionServices.create(data)
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <InputTypeDateTime
          name="startTime"
          control={control}
          rules={{ required: "Vui lòng chọn thời gian!" }}
          title="Thời gian bắt đầu"
          placeholder="Chọn ngày"
        />
        <InputTypeDateTime
          name="endTime"
          control={control}
          rules={{ required: "Vui lòng chọn thời gian!" }}
          title="Thời gian kết thúc"
          placeholder="Thời gian kết thúc"
        />
      </div>
      <InputTypeSelect
        name="eventID"
        control={control}
        rules={{ required: "Vui lòng chọn danh mục" }}
        title="Danh mục sản phẩm"
        titleOption={eventList}
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
