import { Tax, TaxType } from "../../../../Type/BillAndTax/Tax";
import { Button, TableColumnsType } from "antd";
import { Link } from "react-router-dom";

const Columns = (showModalEdit: (
    isOpen: boolean, data: Tax) => void,
    showDeleteConfirm: (userId: string) => void
  ): TableColumnsType<Tax> => [
    {
      title: "Tên thuế",
      dataIndex: "taxName",
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
      onFilter: (value, record) => record.taxName.startsWith(value as string),
      //sorter
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.taxName.localeCompare(b.taxName),
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
      title: "Giá trị",
      dataIndex: "taxAmount",
      width: "16.67%",
      align: "center",
      render: (value) => {
        return <span className="text-center">{value}</span>;
      },
    },
    {
      title: "Loại thuế",
      dataIndex: "taxType",
      width: "16.67%",
      align: "center",
      render: (value) => {
        return <span className="text-center">{value}</span>;
      },
    },
    {
      title: "Mô tả ngắn",
      dataIndex: "taxDescription",
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