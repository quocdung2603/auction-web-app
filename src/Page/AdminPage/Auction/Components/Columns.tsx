import { AuctionSession } from "../../../../Type/Auction/AuctionSession";
import { Button, TableColumnsType } from "antd";
import { Link } from "react-router-dom";

const Columns = (showModalEdit: (
  isOpen: boolean, data: AuctionSession) => void,
  showDeleteConfirm: (userId: string) => void
): TableColumnsType<AuctionSession> => [
    {
      title: "Mã cuộc đấu giá",
      dataIndex: "auctionSessionID",
      //filter
      filters: [
        {
          text: "A",
          value: "A",
        }
      ],
      filterMode: "tree",
      filterSearch: true,
      width: "22.5%",
      align: "center",
      onFilter: (value, record) => record.auctionSessionID.toString().startsWith(value as string),
      //sorter
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.auctionSessionID.toString().localeCompare(b.auctionSessionID.toString()),
      //render
      render(value, record) {
        return (
          <Link to={`/profile/${record.auctionSessionID}`} className="underline text-center">
            {value}
          </Link>
        );
      },
    },
    {
      title: "Thời gian bắt đầu",
      dataIndex: "startTime",
      width: "22.5%",
      align: "center",
      render: (value) => {
        return <span className="text-center">{value.toString()}</span>;
      },
    },
    {
      title: "Thời gian kết thúc",
      dataIndex: "endTime",
      width: "22.5%",
      align: "center",
      render: (value) => {
        return <span className="text-center">{value.toString()}</span>;
      },
    },
    {
      title: "Sự kiện",
      dataIndex: "eventID",
      width: "22.5%",
      align: "center",
      render: (value) => {
        return <span className="text-center">{value}</span>;
      },
    },
    {
      title: "Chức năng",
      dataIndex: "action",
      align: "center",
      width: "10%",
      render(_, record) {
        return (
          <div className="flex flex-row justify-center space-x-3">
            <Button
              onClick={() => {
                showModalEdit(true, record);
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                showDeleteConfirm(record.auctionSessionID.toString());
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

export default Columns;