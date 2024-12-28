import { Role } from "../../../../Type/Account/Role";
import { Button, TableColumnsType } from "antd";
import { Link } from "react-router-dom";

const Columns = (showModalEdit: (
  isOpen: boolean, data: Role) => void,
  showDeleteConfirm: (userId: string) => void
): TableColumnsType<Role> => [
    {
      title: "Vai trò",
      dataIndex: "name",
      //filter
      filters: [
        {
          text: "A",
          value: "A",
        }
      ],
      filterMode: "tree",
      filterSearch: true,
      width: "80%",
      align: "center",
      onFilter: (value, record) => record.name.startsWith(value as string),
      //sorter
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.name.localeCompare(b.name),
      //render
      render(value, record) {
        return (
          <Link to={`/profile/${record.id}`} className="underline text-center">
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