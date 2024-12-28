import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import InputDescription from "../../../../Components/Input/InputDescription";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import { Event } from "../../../../Type/Event/Event";
import InputTypeDateTime from "../../../../Components/Input/InputTypeDateTime";
import { StaffEvent } from "../../../../Type/Event/StaffEvent";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";

interface CreateFormFields extends Event, StaffEvent { }

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
};

const defaultFormValues = {
  eventName: "",
  startTime: new Date(),
  endTime: new Date(),
  eventState: "",
  description: "",
  staffEventId: 0,
};

const eventStateList = [
  { value: 1, label: "Sắp diễn ra" },
  { value: 2, label: "Đang diễn ra" },
  { value: 3, label: "Đã kết thúc" },
];

const staffList = [
  { value: 1, label: "Nhân viên 1" },
  { value: 2, label: "Nhân viên 2" },
  { value: 3, label: "Nhân viên 3" },
]

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
        name="eventName"
        control={control}
        rules={{ required: "Tên sự kiện không được để trống!" }}
        title="Tên sự kiện"
        placeholder="Nhập tên sự kiện"
      />
      <div className="grid grid-cols-2 gap-4">
        <InputTypeDateTime
          title="Ngày bắt đầu"
          name="startTime"
          control={control}
          rules={{ required: "Vui lòng chọn ngày" }}
          placeholder="Nhập ngày tạo"
        />
        <InputTypeDateTime
          title="Ngày kết thúc"
          name="endTime"
          control={control}
          rules={{ required: "Vui lòng chọn ngày" }}
          placeholder="Nhập ngày tạo"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputTypeSelect
          name="eventState"
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Trạng thái sự kiện"
          titleOption={eventStateList}
        />
        <InputTypeSelect
          name="staffEventId"
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Nhân viên quản lý"
          titleOption={staffList}
        />
      </div>
      <InputDescription
        name="description"
        control={control}
        placeholder="Nhập mô tả sản phẩm"
        rules={{ required: 'Mô tả sản phẩm không được để trống!' }}
        defaultValue={initForm?.description}
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