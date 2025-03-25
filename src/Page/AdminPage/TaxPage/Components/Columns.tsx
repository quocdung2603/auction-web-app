import { Button, TableColumnsType } from "antd";
import moment from "moment";
import { Transaction } from "../../../../Type/Billing/BillingType";
import { IconSuccess } from "../../../../Common/Icon/Icon";

const Columns = (
  handleCompleteTransaction: (id: number) => void,
  handleCancelTransaction: (id: number) => void
): TableColumnsType<Transaction> => [
  {
    title: "ID Giao dịch",
    dataIndex: "id",
    width: "10%",
    align: "center",
    sorter: (a, b) => a.id - b.id,
    render: (value) => <span>{value}</span>,
  },
  {
    title: "ID Đấu giá",
    dataIndex: "auctionId",
    width: "10%",
    align: "center",
    sorter: (a, b) => a.auctionId - b.auctionId,
    render: (value) => <span>{value}</span>,
  },
  {
    title: "ID Người dùng",
    dataIndex: "userId",
    width: "10%",
    align: "center",
    sorter: (a, b) => a.userId - b.userId,
    render: (value) => <span>{value}</span>,
  },
  {
    title: "Hạn chót",
    dataIndex: "deadlineDate",
    width: "15%",
    align: "center",
    sorter: (a, b) =>
      moment(a.deadlineDate).unix() - moment(b.deadlineDate).unix(),
    render: (value) => <span>{moment(value).format("DD/MM/YYYY HH:mm")}</span>,
  },
  {
    title: "Ngày thanh toán",
    dataIndex: "submitDate",
    width: "15%",
    align: "center",
    sorter: (a, b) =>
      (a.submitDate ? moment(a.submitDate).unix() : 0) -
      (b.submitDate ? moment(b.submitDate).unix() : 0),
    render: (value) => (
      <span>
        {value ? moment(value).format("DD/MM/YYYY HH:mm") : "Chưa gửi"}
      </span>
    ),
  },
  {
    title: "Số tiền",
    dataIndex: "amount",
    width: "15%",
    align: "center",
    sorter: (a, b) => a.amount - b.amount,
    render: (value) => <span>{value.toLocaleString()} VND</span>,
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    width: "10%",
    align: "center",
    filters: [
      { text: "Pending", value: "Pending" },
      { text: "Completed", value: "Completed" },
      { text: "Cancelled", value: "Cancelled" },
    ],
    onFilter: (value, record) => record.status === value,
    render: (value) => <span>{value}</span>,
  },
  {
    title: "Chức năng",
    dataIndex: "action",
    align: "center",
    render: (_, record) => (
      <div className="flex flex-row justify-center space-x-3">
        {record.status === "Done" ? (
          <IconSuccess></IconSuccess>
        ) : (
          <>
            <Button
              type="primary"
              onClick={() => handleCompleteTransaction(record.id)}
              disabled={record.status !== "Complete"}
            >
              Hoàn thành
            </Button>
            <Button
              danger
              onClick={() => handleCancelTransaction(record.id)}
              disabled={record.status !== "Pending"}
            >
              Hủy
            </Button>
          </>
        )}
      </div>
    ),
  },
];

export default Columns;