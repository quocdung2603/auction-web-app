import { useEffect } from "react";
import { useForm, useFieldArray, SubmitHandler, Controller } from "react-hook-form";
import { Button, Table, notification } from "antd";
import InputTypeDateTime from "../../../../Components/Input/InputTypeDateTime";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import InputTypeNumber from "../../../../Components/Input/InputTypeString";
import { AuctionSession } from "../../../../Type/Auction/AuctionSession";

interface CreateFormFields extends AuctionSession {
  auctionItems: {
    auctionItemId: number;
    auctionSessionId: number;
    assetId: number;
    startingBids: number;
    bidIncrement: number;
    delflag: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }[];
}

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
};

const defaultFormValues: CreateFormFields = {
  auctionSessionID: 0,
  startTime: new Date(),
  endTime: new Date(),
  eventID: 0,
  delflag: false,
  created_at: new Date(),
  updated_at: new Date(),
  deleted_at: new Date(),
  auctionItems: [],
};



const eventList = [
  { value: 1, label: "Asset Type 1" },
  { value: 2, label: "Asset Type 2" },
  { value: 3, label: "Asset Type 3" },
  { value: 4, label: "Asset Type 4" },
  { value: 5, label: "Asset Type 5" },
];

const assetList = [
  { value: 1, label: "Asset 1" },
  { value: 2, label: "Asset 2" },
  { value: 3, label: "Asset 3" },
  { value: 4, label: "Asset 4" },
  { value: 5, label: "Asset 5" },
];

const CreateForm: React.FC<CreateEditArticleFormProps> = ({ initForm }) => {
  const { control, handleSubmit, reset } = useForm<CreateFormFields>({
    defaultValues: defaultFormValues,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "auctionItems", // Tên field array trong react-hook-form
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
      // API Logic
      if (initForm) {
        notification.success({ message: "Cập nhật thành công" });
      } else {
        notification.success({ message: "Thêm thành công" });
        console.log(JSON.stringify(data));
      }
      reset(defaultFormValues);
    } catch (err) {
      notification.error({ message: "Có lỗi xảy ra, vui lòng kiểm tra lại!" });
    }
  };

  const handleAddRow = () => {
    append({
      auctionItemId: Date.now(),
      auctionSessionId: defaultFormValues.auctionSessionID,
      assetId: 0,
      startingBids: 0,
      bidIncrement: 0,
      delflag: false,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),

    });
  };

  const handleDeleteRow = (index: number) => {
    remove(index);
  };

  const columns = [
    {
      title: "Tài sản",
      dataIndex: "assetId",
      width: "30%",
      render: (_: any, __: any, index: number) => (
        // <Controller
        //   name={`auctionItems.${index}.assetId`}
        //   control={control}
        //   render={({ field }) => <InputNumber {...field} />}
        // />
        <InputTypeSelect
          name={`auctionItems.${index}.assetId`}
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title=""
          titleOption={assetList}
        />
      ),
    },
    {
      title: "Giá khởi điểm",
      dataIndex: "startingBids",
      width: "30%",
      render: (_: any, __: any, index: number) => (
        <InputTypeNumber
          name={`auctionItems.${index}.startingBids`}
          control={control}
          rules={{ required: "Vui lòng nhập giá khởi điểm" }}
          title=""
          placeholder="Giá khởi điểm"
        />
      ),
    },
    {
      title: "Bước nhảy giá",
      dataIndex: "bidIncrement",
      width: "30%",
      render: (_: any, __: any, index: number) => (
        <InputTypeNumber
          name={`auctionItems.${index}.bidIncrement`}
          control={control}
          rules={{ required: "Vui lòng nhập giá khởi điểm" }}
          title=""
          placeholder="Giá khởi điểm"
        />
      ),
    },
    {
      title: "Chức năng",
      dataIndex: "actions",
      width: "10%",
      render: (_: any, __: any, index: number) => (
        <Button danger onClick={() => handleDeleteRow(index)}>
          Xóa
        </Button>
      ),
    },
  ];

  return (
    <form
      method="POST"
      className="space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 w-1/3">
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
      <div className="w-1/3">
        <InputTypeSelect
          name="eventID"
          control={control}
          rules={{ required: "Vui lòng chọn danh mục" }}
          title="Danh mục sản phẩm"
          titleOption={eventList}
        />
      </div>
      <div className="w-full">
        <p className="text-center font-bold">Sản phẩm đấu giá</p>
        <Button type="primary" className="mb-4" onClick={handleAddRow}>
          Thêm dòng
        </Button>
        <Table
          dataSource={fields.map((field, index) => ({
            ...field,
            key: field.id, // Sử dụng id để làm key
          }))}
          columns={columns}
          pagination={false}
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
