import { Request } from "../../../../Type/Inspector/Request";
import { Button, TableColumnsType } from "antd";
import { Link } from "react-router-dom";

const Columns = (showModalEdit: (
  isOpen: boolean, data: Request) => void,
  showDeleteConfirm: (userId: string) => void
): TableColumnsType<Request> => [
    {
      title: "Yêu cầu",
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
      title: "Tài sản",
      dataIndex: "assetID",
      width: "16.67%",
      align: "center",
      render: (value) => {
        return <span className="text-center">{value}</span>;
      },
    },
    {
      title: "Người kiểm định",
      dataIndex: "inspectorId",
      width: "16.67%",
      align: "center",
      render: (value) => {
        return <span className="text-center">{value}</span>;
      },
    },
    {
      title: "Người yêu cầu",
      dataIndex: "userId",
      width: "16.67%",
      align: "center",
      render: (value) => {
        return <span className="text-center">{value}</span>;
      },
    },
    {
      title: "Trạng thái yêu cầu",
      dataIndex: "status",
      width: "16.67%",
      align: "center",

      render: (value) => {
        return (
          <>
            {value ? (
              <div className="flex flex-row justify-center items-center border border-green-500 rounded-sm">
                <p>Đã xác thực</p>
              </div>
            ) : (
              <div className="flex flex-row justify-center items-center border border-red rounded-sm">
                <p>Chưa xác thực</p>
              </div>
            )}
          </>

        )
      },
    },
    {
      title: "Trạng thái xác thực",
      dataIndex: "verify",
      width: "16.67%",
      align: "center",

      render: (value) => {
        return (
          <>
            {value ? (
              <div className="flex flex-row justify-center items-center border border-green-500 rounded-sm">
                <p>Đã giải quyết</p>
              </div>
            ) : (
              <div className="flex flex-row justify-center items-center border border-red rounded-sm">
                <p>Chưa giải quyết</p>
              </div>
            )}
          </>

        )
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