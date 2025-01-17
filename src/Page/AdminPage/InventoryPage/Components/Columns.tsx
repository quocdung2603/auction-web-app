import { Inventory } from "../../../../Type/Asset/Inventory";
import { Button, TableColumnsType } from "antd";
import { Link } from "react-router-dom";
import { parseDateToISO } from "../../../../Util/ConverStringToTime";

const Columns = (
  showModalEdit: (isOpen: boolean, data: Inventory) => void,
  showDeleteConfirm: (userId: string) => void
): TableColumnsType<Inventory> => [
  {
    title: "Mã hàng",
    dataIndex: "inventoryID",
    //filter
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
    onFilter: (value, record) =>
      record.inventoryID.toString().startsWith(value as string),
    //sorter
    defaultSortOrder: "descend",
    sorter: (a, b) =>
      a.inventoryID.toString().localeCompare(b.inventoryID.toString()),
    //render
    render(value, record) {
      return (
        <Link
          to={`/profile/${record.inventoryID}`}
          className="underline text-center"
        >
          {value}
        </Link>
      );
    },
  },
  {
    title: "Mã tài sản",
    dataIndex: "assetID",
    //filter
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
    onFilter: (value, record) =>
      record.assetID.toString().startsWith(value as string),
    //sorter
    defaultSortOrder: "descend",
    sorter: (a, b) => a.assetID.toString().localeCompare(b.assetID.toString()),
    //render
    render(value, record) {
      return (
        <Link
          to={`/profile/${record.assetID}`}
          className="underline text-center"
        >
          {value}
        </Link>
      );
    },
  },
  {
    title: "Ngày nhập kho",
    dataIndex: "entryTime",
    width: "16.67%",
    align: "center",
    render: (value) => {
      return (
        <span className="text-center">{parseDateToISO(value.toString())}</span>
      );
    },
  },
  {
    title: "Ngày xuất kho",
    dataIndex: "exitTime",
    width: "16.67%",
    align: "center",
    render: (value) => {
      return (
        <span className="text-center">{parseDateToISO(value.toString())}</span>
      );
    },
  },
  {
    title: "Mã kho",
    dataIndex: "warehouseID",
    width: "16.67%",
    align: "center",
    render: (value) => {
      return <span className="text-center">{value}</span>;
    },
  },
  {
    title: "Chức năng",
    dataIndex: "action",
    align: "center",
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
              showDeleteConfirm(record.inventoryID.toString());
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
