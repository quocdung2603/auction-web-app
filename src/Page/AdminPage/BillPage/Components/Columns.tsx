import { Bill } from "../../../../Type/BillAndTax/Bill";
import { Button, TableColumnsType } from "antd";
import { Link } from "react-router-dom";

const Columns = (showModalEdit: (
  isOpen: boolean, data: Bill) => void,
  showDeleteConfirm: (userId: string) => void
): TableColumnsType<Bill> => [
    {
      title: "Khách hàng",
      dataIndex: "userId",
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
      onFilter: (value, record) => record.userId.toString().startsWith(value as string),
      //sorter
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.userId.toString().localeCompare(b.userId.toString()),
      //render
      render(value, record) {
        return (
          <Link to={`/profile/${record.userId}`} className="underline text-center">
            {value}
          </Link>
        );
      },
    },
    {
      title: "Nhân viên",
      dataIndex: "staffId",
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
      onFilter: (value, record) => record.staffId.toString().startsWith(value as string),
      //sorter
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.staffId.toString().localeCompare(b.staffId.toString()),
      //render
      render(value, record) {
        return (
          <Link to={`/profile/${record.staffId}`} className="underline text-center">
            {value}
          </Link>
        );
      },
    },
    {
      title: "Ngày tạo",
      dataIndex: "billDate",
      width: "16.67%",
      align: "center",
      render: (value) => {
        return <span className="text-center">{value.toString()}</span>;
      },
    },
    {
      title: "Tổng hóa đơn",
      dataIndex: "totalAmount",
      width: "16.67%",
      align: "center",
      render: (value) => {
        return <span className="text-center">{value}</span>;
      },
    },
    {
      title: "Phương thức thanh toán",
      dataIndex: "paymentTerm",
      width: "16.67%",
      align: "center",
      render: (value) => {
        return <span className="text-center">{value.toString()}</span>;
      },
    },
    {
      title: "Trạng thái thanh toán",
      dataIndex: "paymentStatus",
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