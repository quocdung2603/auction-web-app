import { AuctionSession } from "../../../Type/Auction/AuctionSession"; // Only import AuctionSession
import {
  DatePicker,
  Modal,
  notification,
  Table,
  TableProps,
} from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import { useEffect, useRef, useState } from "react";
import Columns from "./Components/Columns";
import moment from "moment";
import { AuctionSessionServices } from "../../../Services/Auction/AuctionSessionServices";
import ListUserRegister from "./Components/ListUserRegister";

const billManagement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEdit, setModalEdit] = useState<{
    isOpen: boolean;
    data: undefined | AuctionSession;
  }>({
    isOpen: false,
    data: undefined,
  });

  const [listData, setListData] = useState<AuctionSession[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const timeoutRef = useRef(setTimeout(() => {}, 0));
  const [filters, setFilters] = useState({
    start: 0,
    end: Date.now(),
    search: "",
    pageSize: 5,
    pageNumber: 1,
  });



  const closeModal = () => {
    if (modalEdit.data) {
      setModalEdit({
        isOpen: false,
        data: undefined,
      });
      return;
    }
    setIsModalOpen(false);
  };

  const getAll = async () => {
    try {
      const res = await AuctionSessionServices.getAll();
      setListData(res.metadata.auctionSessions);
      setTotalItems(res.metadata.total);
    } catch (error) {
      notification.error({ message: "Failed to fetch auction sessions" });
    }
  };

  useEffect(() => {
    getAll();
  }, [filters]);

  const onChange: TableProps<AuctionSession>["onChange"] = (pagination) => {
    setFilters((prev) => ({
      ...prev,
      pageNumber: pagination.current ?? 1,
      pageSize: pagination.pageSize ?? 5,
    }));
  };

  const onSearch: SearchProps["onSearch"] = (value) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setFilters((prev) => ({
        ...prev,
        search: value,
        pageNumber: 1,
      }));
    }, 1500);
  };

  const showModalEdit = (isOpen: boolean, data: AuctionSession) => {
    setModalEdit({
      isOpen,
      data,
    });
  };

  return (
    <div>
      <div className="flex items-center justify-end my-4 space-x-2">
        <DatePicker.RangePicker
          placeholder={["", "Hôm nay"]}
          allowEmpty={[false, true]}
          onChange={(date) => {
            if (!date) return;

            setFilters((prev) => ({
              ...prev,
              start: date[0] ? moment(date[0].toString()).valueOf() : prev.start,
              end: date[1] ? moment(date[1].toString()).valueOf() : prev.end,
            }));
          }}
        />
        <Search
          placeholder="Tìm kiếm"
          allowClear
          className="w-[300px]"
          onSearch={onSearch}
        />
        <Modal
          title={modalEdit.isOpen ? "Sửa Thông tin" : "Thêm mới thông tin"}
          open={isModalOpen || modalEdit.isOpen}
          onCancel={closeModal}
          cancelButtonProps={{ className: "hidden" }}
          okButtonProps={{ className: "hidden" }}
        >
          <ListUserRegister auctionId={modalEdit.data?.id}></ListUserRegister>
        </Modal>
      </div>
      <Table
        columns={Columns(showModalEdit)}
        dataSource={listData.map((item) => ({ ...item, key: item.id }))}
        pagination={{
          current: filters.pageNumber,
          pageSize: filters.pageSize,
          total: totalItems,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20", "50"],
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default billManagement;