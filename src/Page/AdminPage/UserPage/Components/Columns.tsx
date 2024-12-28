import { User } from "../../../../Type/Account/User";
import { Badge, Button, TableColumnsType } from "antd";
import { Link } from "react-router-dom";

const Columns = (showModalEdit: (
  isOpen: boolean, data: User) => void,
  showDeleteConfirm: (userId: string) => void
): TableColumnsType<User> => [
    {
      title: "Tên",
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
      width: "16.67%",
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
      title: "Email",
      dataIndex: "email",
      width: "16.67%",
      align: "center",
      render: (value) => {
        return <span className="text-center">{value}</span>;
      },
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      width: "16.67%",
      align: "center",

      render: (value) => {
        return (
          <>
            {value ? (
              <div className="flex flex-row justify-center items-center border border-blue-700 rounded-sm">
                <p>Nam</p>
              </div>
            ) : (
              <div className="flex flex-row justify-center items-center border border-blue-700 rounded-sm">
                <p>Nữ</p>
              </div>
            )}
          </>

        )
      },
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
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
      width: "16.67%",
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