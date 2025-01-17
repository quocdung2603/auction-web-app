import { Warehouse } from "../../../../Type/Asset/Warehouse";
import { Button, TableColumnsType } from "antd";
import { Link } from "react-router-dom";

const Columns = (
  showModalEdit: (isOpen: boolean, data: Warehouse) => void,
  showDeleteConfirm: (userId: string) => void
): TableColumnsType<Warehouse> => [
  {
    title: "Vị trí kho",
    dataIndex: "location",
    //filter
    filters: [
      {
        text: "A",
        value: "A",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    width: "80%",
    align: "center",
    onFilter: (value, record) => record.location.startsWith(value as string),
    //sorter
    defaultSortOrder: "descend",
    sorter: (a, b) => a.location.localeCompare(b.location),
    //render
    render(value, record) {
      return (
        <Link
          to={`/profile/${record.warehouseID}`}
          className="underline text-center"
        >
          {value}
        </Link>
      );
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
              showDeleteConfirm(record.warehouseID.toString());
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
