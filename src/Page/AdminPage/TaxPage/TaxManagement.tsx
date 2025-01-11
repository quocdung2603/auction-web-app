import { Tax, TaxType } from "../../../Type/BillAndTax/Tax";
import {
  Button,
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
import { TaxServices } from "../../../Services/Fee/TaxServices";
import { id } from "date-fns/locale";

const taxManagement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEdit, setModalEdit] = useState<{
    isOpen: boolean;
    data: undefined | Tax;
  }>({
    isOpen: false,
    data: undefined,
  });

  // const [listData, setListData] = useState<Tax[]>(() => {
  //   const defaultItem: Tax = {
  //     id: 0,
  //     taxName: "abc",
  //     taxDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, obcaecati?",
  //     taxAmount: 0,
  //     delflag: false,
  //     taxType: TaxType.Fixed,
  //   };
  //   return Array.from({ length: 10 }, () => ({ ...defaultItem }));
  // });

  const [listData, setListData] = useState<Tax[]>([]);

  const timeoutRef = useRef(setTimeout(() => {}, 0));
  const [filters, setFilters] = useState({
    start: 0,
    end: Date.now(),
    search: "",
    pageSize: 5,
    pageNumber: 1,
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

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
    TaxServices.getAll().then((res) => {
      setListData(res.data);
    });
  };

  useEffect(() => {
    getAll();
  }, [filters]);

  const onChange: TableProps<Tax>["onChange"] = (pagination) => {
    //refetch data
    setFilters((prev) => ({
      ...prev,
      pageNumber: pagination.current ?? 1,
      pageSize: pagination.pageSize ?? 5,
    }));
  };

  const onSearch: SearchProps["onSearch"] = (value, _e) => {
    //refetch data
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setFilters((prev) => ({
        ...prev,
        search: value,
      }));
    }, 1500);
  };

  const showModalEdit = (isOpen: boolean, data: Tax) => {
    setModalEdit({
      isOpen,
      data,
    });
  };

  const showDeleteConfirm = (_id: string) => {
    confirm({
      title: "Bạn có chắc muốn xóa dữ liệu này?",
      content: "Bạn sẽ không thể khôi phục dữ liệu sau khi xóa!",
      okText: "Xóa luôn sợ gì",
      okType: "danger",
      maskClosable: true,
      closable: true,
      onOk() {
        TaxServices.delete(_id)
          .then(() => {
            notification.success({ message: "Xóa thành công" });
            getAll();
            closeModal();
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

            if (date[0]) {
              setFilters((prev) => ({
                ...prev,
                start: moment(date[0]?.toString()).valueOf(),
              }));
            }

            if (date[1]) {
              setFilters((prev) => ({
                ...prev,
                end: moment(date[1]?.toString()).valueOf(),
              }));
            }
          }}
        />
        <Search
          placeholder="Tìm kiếm"
          allowClear
          className="w-[300px]"
          onSearch={onSearch}
        />
        <Button onClick={showModal}>Thêm mới</Button>
        <Modal
          width={1000}
          title={modalEdit.isOpen ? "Sửa Thông tin" : "Thêm mới thông tin"}
          open={isModalOpen || modalEdit.isOpen}
          onCancel={closeModal}
          cancelButtonProps={{
            className: "hidden",
          }}
          okButtonProps={{
            className: "hidden",
          }}
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
        dataSource={listData.map((item, index) => ({ ...item, key: index }))}
        pagination={{
          pageSize: 5,
          total: listData.length,
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default taxManagement;
