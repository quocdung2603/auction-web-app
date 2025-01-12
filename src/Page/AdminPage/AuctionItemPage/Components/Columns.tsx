import { AuctionItem } from "../../../../Type/Auction/AuctionItem";
import { Button, TableColumnsType } from "antd";
import { Link } from "react-router-dom";

const Columns = (
  showModalEdit: (isOpen: boolean, data: AuctionItem) => void,
  showDeleteConfirm: (userId: string) => void
): TableColumnsType<AuctionItem> => [
  {
    title: "Mã tài sản đấu giá ",
    dataIndex: "auctionItemId",
    //filter
    filters: [
      {
        text: "A",
        value: "A",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    width: "18%",
    align: "center",
    onFilter: (value, record) =>
      record.auctionItemId.toString().startsWith(value as string),
    //sorter
    defaultSortOrder: "descend",
    sorter: (a, b) =>
      a.auctionItemId.toString().localeCompare(b.auctionItemId.toString()),
    //render
    render(value, record) {
      return (
        <Link
          to={`/profile/${record.auctionItemId}`}
          className="underline text-center"
        >
          {value}
        </Link>
      );
    },
  },
  {
    title: "Mã phiên đấu giá ",
    dataIndex: "auctionSessionId",
    width: "18%",
    align: "center",
    render: (value) => {
      return <span className="text-center">{value}</span>;
    },
  },
  {
    title: "Mã tài sản ",
    dataIndex: "assetId",
    width: "18%",
    align: "center",
    render: (value) => {
      return <span className="text-center">{value}</span>;
    },
  },
  {
    title: "Giá khởi điểm ",
    dataIndex: "startingBids",
    width: "18%",
    align: "center",
    render: (value) => {
      return <span className="text-center">{value}</span>;
    },
  },
  {
    title: "Bước nhảy ",
    dataIndex: "bidIncrement",
    width: "18%",
    align: "center",
    render: (value) => {
      return <span className="text-center">{value}</span>;
    },
  },
  {
    title: "Chức năng",
    dataIndex: "action",
    align: "center",
    width: "20%",
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
              showDeleteConfirm(record.auctionItemId.toString());
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
