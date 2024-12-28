import { Asset } from "../../../../Type/Asset/Asset";
import { Button, TableColumnsType } from "antd";
import { Link } from "react-router-dom";

const Columns = (showModalEdit: (
  isOpen: boolean, data: Asset) => void,
  showDeleteConfirm: (userId: string) => void
): TableColumnsType<Asset> => [
    {
      title: "Tên tài sản",
      dataIndex: "assetName",
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
      onFilter: (value, record) => record.assetName.startsWith(value as string),
      //sorter
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.assetName.localeCompare(b.assetName),
      //render
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
              alt="articles"
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
                showDeleteConfirm(record.assetID.toString());
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