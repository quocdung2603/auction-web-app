// Components/Columns.tsx
import { AuctionSession } from "../../../../Type/Auction/AuctionSession";
import { Button, TableColumnsType } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
const checkStatus = (startTime: string,endTime:string) => {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const current = Date.now();

  if (current < startDate.getTime()) {
    return "Chưa bắt đầu"; // Upcoming
  } else if (current >= startDate.getTime() && current <= endDate.getTime()) {
    return "Đang diễn ra"; // Ongoing
  } else if (current > endDate.getTime()) {
    return "Đã kết thúc"; // Ended
  }
};
const Columns = (
  showModalEdit: (isOpen: boolean, data: AuctionSession) => void,
  showDeleteConfirm: (id: string) => void
): TableColumnsType<AuctionSession> => [
  {
    title: "Mã phiên đấu giá",
    dataIndex: "id",
    render(value, record) {
      return (
        <Link
          to={`/profile/${record.id}`}
          className="underline text-center"
        >
          {value}
        </Link>
      );
    },
  },
  {
    title: "Tên phiên",
    dataIndex: "name",
    width: "26.67%",
  },
  {
    title: "Thời gian bắt đầu",
    dataIndex: "startTime",
    width: "20%",
    align: "center",
    render: (value) => moment(value).format("DD/MM/YYYY HH:mm"),
  },
  {
    title: "Thời gian kết thúc",
    dataIndex: "endTime",
    width: "20%",
    align: "center",
    render: (value) => moment(value).format("DD/MM/YYYY HH:mm"),
  },
  {
    title: "Trạng thái",
    width: "15%",
    align: "center",
    render: (_,record)=>(
      checkStatus(record.startTime,record.endTime)
    ),
  },
  {
    title: "Chức năng",
    dataIndex: "action",
    align: "center",
    width: "20%",
    render: (_, record) => (
      <div className="flex flex-row justify-center space-x-3">
        <Button onClick={() => showModalEdit(true, record)}>
          Edit
        </Button>
        <Button onClick={() => showDeleteConfirm(record.id.toString())}>
          Delete
        </Button>
      </div>
    ),
  },
];

export default Columns;