import { ResponseDataUser, User } from "../../../Type/Account/User";
import {
  Button,
  DatePicker,
  Modal,
  notification,
  Select,
  Table,
  TableProps,
} from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import confirm from "antd/es/modal/confirm";
import { useEffect, useRef, useState } from "react";
import Columns from "./Components/Columns";
import CreateForm from "./Components/CreateForm";
import moment from "moment";
import { UserServices } from "../../../Services/Account/UserServices";

const roleOptions = [
  { label: "Admin", value: 1 },
  { label: "customer", value: 2 },
  { label: "Staff", value: 3 },
  { label: "Suplier", value: 4 },
  { label: "Inspector", value: 5 },
];

const userManagement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEdit, setModalEdit] = useState<{
    isOpen: boolean;
    data: undefined | User;
  }>({
    isOpen: false,
    data: undefined,
  });

  const [listData, setListData] = useState<User[]>([]);

  const timeoutRef = useRef(setTimeout(() => {}, 0));
  const [filters, setFilters] = useState({
    start: 0,
    end: Date.now(),
    search: "",
    pageSize: 5,
    pageNumber: 1,
    role: undefined as number | undefined, // Thêm trạng thái lọc Role
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

  useEffect(() => {
    // fetchArticles().then((res) => {
    //   setArticles(res.data.data);
    // });
  }, [filters]);

  const onChange: TableProps<User>["onChange"] = (pagination) => {
    setFilters((prev) => ({
      ...prev,
      pageNumber: pagination.current ?? 1,
      pageSize: pagination.pageSize ?? 5,
    }));
  };

  const onSearch: SearchProps["onSearch"] = (value, _e) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setFilters((prev) => ({
        ...prev,
        search: value,
      }));
    }, 1500);
  };

  const onRoleChange = (value: number | undefined) => {
    setFilters((prev) => ({
      ...prev,
      role: value,
    }));
  };

  const showModalEdit = (isOpen: boolean, data: User) => {
    setModalEdit({
      isOpen,
      data,
    });
  };
  const deleteUser = async (id: string)=>{
    try {
      await UserServices.delete(id);
      notification.success({message: "Xóa thành công"});
      getAllUser();
    } catch (error) {
      notification.error({message: "Xóa thất bại"});
    }
  }
  const showDeleteConfirm = (_id: string) => {
    confirm({
      title: "Bạn có chắc muốn xóa dữ liệu này?",
      content: "Bạn sẽ không thể khôi phục dữ liệu sau khi xóa!",
      okText: "Xóa luôn sợ gì",
      okType: "danger",
      maskClosable: true,
      closable: true,
      onOk() {
        deleteUser(_id);
      },
      cancelText: "Hủy",
    });
  };

  // Lọc dữ liệu dựa trên Role
  // const filteredData = listData.filter((item) => {
  //   if (filters.role !== undefined) {
  //     return item.Role === filters.role;
  //   }
  //   return true;
  // });
  const getAllUser = async () => {
    try {
      const res: ResponseDataUser = await UserServices.getAll();
      const dataUser: User[] = res.data;
      setListData(dataUser);
    } catch (error) {
      alert("lỗi");
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUser();
  }, []);
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
        <Select
          allowClear
          placeholder="Lọc theo Role"
          onChange={onRoleChange}
          className="w-[200px]"
          options={roleOptions}
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
          <CreateForm initForm={modalEdit.data} getAllUser={getAllUser} />
        </Modal>
      </div>
      <Table
        columns={Columns(showModalEdit, showDeleteConfirm)}
        dataSource={listData.map((item, index) => ({ ...item, key: index }))}
        pagination={{
          pageSize: filters.pageSize,
          total: listData.length,
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default userManagement;
