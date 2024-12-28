import { AssetType } from "../../../../Type/Asset/AssetType";
import { Button, TableColumnsType } from "antd";
import { Link } from "react-router-dom";

const Columns = (showModalEdit: (
  isOpen: boolean, data: AssetType) => void,
  showDeleteConfirm: (userId: string) => void
): TableColumnsType<AssetType> => [
    {
      title: "Loại tài sản",
      dataIndex: "assetTypeName",
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
      onFilter: (value, record) => record.assetTypeName.startsWith(value as string),
      //sorter
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.assetTypeName.localeCompare(b.assetTypeName),
      //render
      render(value, record) {
        return (
          <Link to={`/profile/${record.assetTypeID}`} className="underline text-center">
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
                showDeleteConfirm(record.assetTypeID.toString());
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