import { Asset, ResponseDataAsset } from "../../../Type/Asset/Asset";
import {
  DatePicker,
  Modal,
  notification,
  Table,
  TableProps,
} from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import confirm from "antd/es/modal/confirm";
import { useEffect, useRef, useState } from "react";
import Columns from "./Components/Columns";
import CreateForm from "./Components/CreateForm";
import moment from "moment";
import { AssetServices } from "../../../Services/Asset/AssetServices";

const assetManagement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEdit, setModalEdit] = useState<{
    isOpen: boolean;
    data: undefined | Asset;
  }>({
    isOpen: false,
    data: undefined,
  });

  const [listData, setListData] = useState<Asset[]>([]);
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
      const res:ResponseDataAsset = await AssetServices.getAll();
      const listDataAvaliable = res.metadata.data.filter((item)=>item.status==="available" || item.status==="sold");
      setListData(listDataAvaliable);
      setTotalItems(res.metadata.data.length);
    } catch (error) {
      notification.error({ message: "Failed to fetch assets" });
    }
  };

  useEffect(() => {
    getAll();
  }, [filters]);

  const onChange: TableProps<Asset>["onChange"] = (pagination) => {
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

  const showModalEdit = (isOpen: boolean, data: Asset) => {
    setModalEdit({
      isOpen,
      data,
    });
  };

  const showDeleteConfirm = (id: string) => {
    confirm({
      title: "Bạn có chắc muốn xóa dữ liệu này?",
      content: "Bạn sẽ không thể khôi phục dữ liệu sau khi xóa!",
      okText: "Xóa luôn sợ gì",
      okType: "danger",
      maskClosable: true,
      closable: true,
      onOk() {
        AssetServices.delete(id)
          .then(() => {
            notification.success({ message: "Xóa thành công" });
            getAll();
          })
          .catch(() => {
            notification.error({
              message: "Xóa thất bại ! Kiểm tra lại nha !",
            });
          });
      },
      cancelText: "Hủy",
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
          width={1000}
          title={modalEdit.isOpen ? "Sửa Thông tin" : "Thêm mới thông tin"}
          open={isModalOpen || modalEdit.isOpen}
          onCancel={closeModal}
          cancelButtonProps={{ className: "hidden" }}
          okButtonProps={{ className: "hidden" }}
        >
          <CreateForm
            initForm={modalEdit.data}
            getAll={getAll}
            closeModal={closeModal}
          />
        </Modal>
      </div>
      <Table
        columns={Columns(showModalEdit, showDeleteConfirm)}
        dataSource={listData.map((item) => ({ ...item, key: item.assetID }))}
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

export default assetManagement;