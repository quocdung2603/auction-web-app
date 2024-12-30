import { Button, InputNumber } from "antd";
import { AuctionItem } from "../../../../Type/Auction/AuctionItem";

type AuctionItemColumnsProps = {
  handleEditRow: (record: AuctionItem, key: keyof AuctionItem, value: any) => void;
  handleDeleteRow: (auctionItemId: number) => void;
};

const AuctionItemColumns = ({ handleEditRow, handleDeleteRow }: AuctionItemColumnsProps) => [
  {
    title: "Asset ID",
    dataIndex: "assetId",
    render: (text: any, record: AuctionItem) => (
      <InputNumber
        value={record.assetId}
        onChange={(value) => handleEditRow(record, "assetId", value)}
      />
    ),
  },
  {
    title: "Starting Bids",
    dataIndex: "startingBids",
    render: (text: any, record: AuctionItem) => (
      <InputNumber
        value={record.startingBids}
        onChange={(value) => handleEditRow(record, "startingBids", value)}
      />
    ),
  },
  {
    title: "Bid Increment",
    dataIndex: "bidIncrement",
    render: (text: any, record: AuctionItem) => (
      <InputNumber
        value={record.bidIncrement}
        onChange={(value) => handleEditRow(record, "bidIncrement", value)}
      />
    ),
  },
  {
    title: "Actions",
    dataIndex: "actions",
    render: (_: any, record: AuctionItem) => (
      <Button danger onClick={() => handleDeleteRow(record.auctionItemId)}>
        Xóa
      </Button>
    ),
  },
];

export default AuctionItemColumns;
