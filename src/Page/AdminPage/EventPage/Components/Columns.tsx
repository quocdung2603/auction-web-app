import { Event } from "../../../../Type/Event/Event";
import { Button, TableColumnsType } from "antd";
import { Link } from "react-router-dom";

const Columns = (showModalEdit: (
  isOpen: boolean, data: Event) => void,
  showDeleteConfirm: (userId: string) => void
): TableColumnsType<Event> => [
    {
      title: "Tên sự kiện",
      dataIndex: "eventName",
      //filter
      filters: [
        {
          text: "A",
          value: "A",
        }
      ],
      filterMode: "tree",
      filterSearch: true,
      width: "30%",
      align: "center",
      onFilter: (value, record) => record.eventName.startsWith(value as string),
      //sorter
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.eventName.localeCompare(b.eventName),
      //render
      render(value, record) {
        return (
          <Link to={`/profile/${record.eventId}`} className="underline text-center">
            {value}
          </Link>
        );
      },
    },
    {
      title: "Thời gian bắt đầu",
      dataIndex: "startTime",
      width: "15%",
      align: "center",
      render: (value) => {
        return <span className="text-center">{value.toString()}</span>;
      },
    },
    {
      title: "Thời gian kết thúc",
      dataIndex: "endTime",
      width: "15%",
      align: "center",
      render: (value) => {
        return <span className="text-center">{value.toString()}</span>;
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "eventState",
      width: "15%",
      align: "center",
      render: (value) => {
        return <span className="text-center">{value}</span>;
      },
    },
    {
      title: "Chức năng",
      dataIndex: "action",
      align: "center",
      width:"10%",
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
                showDeleteConfirm(record.eventId.toString());
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