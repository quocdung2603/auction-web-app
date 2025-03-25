import { DatePicker, notification, Table, TableProps } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import confirm from "antd/es/modal/confirm";
import { useEffect, useRef, useState } from "react";
import Columns from "./Components/Columns";
import moment from "moment";
import { Transaction, TransactionResponse } from "../../../Type/Billing/BillingType";
import { BillingServices } from "../../../Services/Billing/BillingService";
import { AuctionSessionServices } from "../../../Services/Auction/AuctionSessionServices";
import {  ResponseAuctionDataById } from "../../../Type/Auction/AuctionSession";
import { ResponseDataAssetById } from "../../../Type/Asset/Asset";
import { AssetServices } from "../../../Services/Asset/AssetServices";


const TransactionManagement: React.FC = () => {
  const [listData, setListData] = useState<Transaction[]>([]);
  const timeoutRef = useRef(setTimeout(() => {}, 0));
  const [filters, setFilters] = useState({
    start: 0,
    end: Date.now(),
    search: "",
    pageSize: 5,
    pageNumber: 1,
  });

  const getAll = async () => {
    try {
      const res: TransactionResponse = await BillingServices.getAllTransaction(); // Giả định API trả về TransactionResponse
      if (res.code === 200) {
        setListData(res.data);
      } else {
        notification.error({ message: "Lấy dữ liệu thất bại!" });
      }
    } catch (error) {
      notification.error({ message: "Có lỗi xảy ra khi lấy dữ liệu!" });
    }
  };

  const onChange: TableProps<Transaction>["onChange"] = (pagination) => {
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
      }));
    }, 1500);
  };

  const handleCompleteTransaction = async (id: number) => {
    try {
      const currentTransaction = listData.find((item)=>item.id===id);
      if(currentTransaction)
      {
        const auction:ResponseAuctionDataById = await AuctionSessionServices.getById(currentTransaction.auctionId.toString());
        const asset:ResponseDataAssetById = await AssetServices.getById(auction.metadata.auctionSession.assetId);
        const updateAsset = {...asset.metadata,status: "sold"};
        await AssetServices.update(asset.metadata.assetID.toString(),updateAsset);
        const updateTransaction = {...currentTransaction, status: "Done"};
        await BillingServices.updateTransaction(updateTransaction.id,updateTransaction);
        notification.success({message: "Cập nhật tài sản và giao dịch thành công"})
      }
      getAll();
    } catch (error) {
      notification.error({ message: "Hoàn thành giao dịch thất bại!" });
    }
  };
  const cancelTransaction = async (id: number) => {
    try {
      const currentTransaction = listData.find((item) => item.id === id);
      if(currentTransaction)
      {
        const updateTransaction = { ...currentTransaction, status: "Fail" };
        await BillingServices.updateTransaction(
          updateTransaction.id,
          updateTransaction
        );
        notification.error({
          message: "Đã hủy giao dịch",
        });
      }
    } catch (error) {
      notification.error({message: "Lỗi cập nhật"})
    }
  };
  const handleCancelTransaction = async (id: number) => {
    confirm({
      title: "Bạn có chắc muốn hủy giao dịch này?",
      content: "Hành động này không thể hoàn tác!",
      okText: "Hủy giao dịch",
      okType: "danger",
      maskClosable: true,
      closable: true,
      onOk() {
        cancelTransaction(id);
      },
      cancelText: "Không",
    });
  };

  useEffect(() => {
    getAll();
  }, [filters]);

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
      </div>
      <Table
        columns={Columns(handleCompleteTransaction, handleCancelTransaction)}
        dataSource={listData.map((item) => ({ ...item, key: item.id }))}
        pagination={{
          pageSize: filters.pageSize,
          total: listData.length,
          current: filters.pageNumber,
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default TransactionManagement;