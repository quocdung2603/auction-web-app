import { Button, TableColumnsType } from "antd";
import { Inspector } from "../../../../Type/Inspector/Inspector";
import { Link } from "react-router-dom";

const Columns = (
  showModalEdit: (isOpen: boolean, data: Inspector) => void,
  showDeleteConfirm: (userId: string) => void
): TableColumnsType<Inspector> => [
  {
    title: "Id",
    dataIndex: "id",
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
    //sorter
    defaultSortOrder: "descend",
    //render
    render(value, record) {
      return (
        <Link to={`/profile/${record.id}`} className="underline text-center ">
          {value}
        </Link>
      );
    },
  },
  {
    title: "Chứng chỉ",
    dataIndex: "license",
    width: "16.67%",
    align: "center",
    render: (value) => {
      return <span className="text-center">{value}</span>;
    },
  },
  {
    title: "Id Người kiểm định",
    dataIndex: "userId",
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
              showDeleteConfirm(record.id.toString());
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
