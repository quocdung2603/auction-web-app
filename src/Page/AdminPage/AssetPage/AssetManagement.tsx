import { Asset } from "../../../Type/Asset/Asset";
import { Button, DatePicker, Modal, notification, Table, TableProps } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import confirm from "antd/es/modal/confirm";
import { useEffect, useRef, useState } from "react";
import Columns from "./Components/Columns";
import CreateForm from "./Components/CreateForm";
import moment from "moment";

const assetManagement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEdit, setModalEdit] = useState<{
    isOpen: boolean;
    data: undefined | Asset;
  }>({
    isOpen: false,
    data: undefined,
  });

  const [listData, setListData] = useState<Asset[]>(() => {
    const defaultItem: Asset = {
      assetID: 0,
      assetName: "ABCDEF",
      mainImage: "https://picsum.photos/200/300",
      assetDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit earum veniam quas saepe doloremque exercitationem minus, vel ex quod voluptates.",
      assetPrice: 0,
      inspectorID: 1,
      assetTypeID: 1,
      assetStatusID: 1,
      delflag: false,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
    };
    return Array.from({ length: 10 }, () => ({ ...defaultItem }));
  });

  const timeoutRef = useRef(setTimeout(() => { }, 0));
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

  useEffect(() => {
    // fetchArticles().then((res) => {
    //   setArticles(res.data.data);
    // });
  }, [filters]);

  const onChange: TableProps<Asset>["onChange"] = (pagination) => {
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

  const showModalEdit = (isOpen: boolean, data: Asset) => {
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
        // deleteArticle({ _id })
        //   .then(() => {
        //     notification.success({ message: "Xóa thành công" });
        //   })
        //   .catch(() => {
        //     notification.error({
        //       message: "Xóa thất bại ! Kiểm tra lại nha !",
        //     });
        //   });
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
          <CreateForm initForm={modalEdit.data} />
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

export default assetManagement;