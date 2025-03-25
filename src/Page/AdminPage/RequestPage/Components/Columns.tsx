import { Asset } from "../../../../Type/Asset/Asset";
import { Button, TableColumnsType } from "antd";
import { Link } from "react-router-dom";

const Columns = (
  showModalEdit: (isOpen: boolean, data: Asset) => void,
  showDeleteConfirm: (id: string) => void
): TableColumnsType<Asset> => [
  {
    title: "ID Tài sản",
    dataIndex: "assetID",
    render(value) {
      return (
        <div className="underline text-center ">
          {value}
        </div>
      );
    },
  },
  {
    title: "Tên tài sản",
    dataIndex: "assetName",
    filters: [
      {
        text: "A",
        value: "A",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    width: "16.67%",
    align: "center",
    onFilter: (value, record) => record.assetName.startsWith(value as string),
    defaultSortOrder: "descend",
    sorter: (a, b) => a.assetName.localeCompare(b.assetName),
    render(value, record) {
      return (
        <Link to={`/profile/${record.assetID}`} className="underline text-center">
          {value}
        </Link>
      );
    },
  },
  {
    title: "Ảnh đại diện",
    dataIndex: "mainImage",
    width: "16.67%",
    align: "center",
    render: (value) => {
      return (
        <div className="w-full">
          <img
            src={value}
            alt="asset"
            className="max-h-[150px] w-full object-cover"
          />
        </div>
      );
    },
  },
  {
    title: "Giá tài sản",
    dataIndex: "assetPrice",
    width: "16.67%",
    align: "center",
    render: (value) => {
      return <span className="text-center">{value.toLocaleString()} VND</span>;
    },
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
    width: "16.67%",
    align: "center",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    width: "16.67%",
    align: "center",
  },
  {
    title: "Chức năng",
    dataIndex: "action",
    align: "center",
    width: "20%",
    render: (_, record) => (
      <div className="flex flex-row justify-center space-x-3">
        <Button onClick={() => showModalEdit(true, record)}>Edit</Button>
        <Button onClick={() => showDeleteConfirm(record.assetID.toString())}>
          Delete
        </Button>
      </div>
    ),
  },
];

export default Columns;