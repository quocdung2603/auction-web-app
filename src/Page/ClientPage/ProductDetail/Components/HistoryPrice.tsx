import React, { useEffect, useState } from "react";
import { HistoryResponse, HistoryResponseApi } from "../../../../Type/Auction/History";
import { notification } from "antd";
import { AuctionSessionServices } from "../../../../Services/Auction/AuctionSessionServices";
import { UserServices } from "../../../../Services/Account/UserServices";
import { ResponseDataUserByToken } from "../../../../Type/Account/User";
import { BillingServices } from "../../../../Services/Billing/BillingService";
import { RequestTransaction, ResponseCheckRegisterAution } from "../../../../Type/Billing/BillingType";
import { Auction } from "../../../../Type/Auction/AuctionSession";

interface HistoryPriceProps {
  auctionId: string;
  isGoingOn: string;
  auctionData: Auction;
}

const HistoryPrice: React.FC<HistoryPriceProps> = ({ auctionId, isGoingOn, auctionData }) => {
  const [listHistoryPrice, setHistoryPrice] = useState<HistoryResponse[]>([]);
  const [victoryUser, setVictoryUser] = useState<HistoryResponse | null>(null);

  const getAllHistoryPrice = async () => {
    try {
      const res: HistoryResponseApi = await AuctionSessionServices.getAllHistoryRequest(auctionId);
      const listHistoryGetUserInfor = await Promise.all(
        res.metadata.historyEntries.map(async (item) => {
          const idUser = item.userId.toString();
          const resUser: ResponseDataUserByToken = await UserServices.getById(idUser);
          const resData: HistoryResponse = {
            ...item,
            userInfor: resUser.data,
          };
          return resData;
        })
      );
      setHistoryPrice(listHistoryGetUserInfor);

      // Gọi requestVictoryUser ngay sau khi cập nhật listHistoryPrice nếu phiên đã kết thúc
      if (isGoingOn === "Đã kết thúc") {
        await requestVictoryUser(listHistoryGetUserInfor);
      }
    } catch (error) {
      notification.error({ message: "Lỗi lấy dữ liệu" });
    }
  };

  const requestVictoryUser = async (historyList: HistoryResponse[]) => {
    if (historyList.length === 0) {
      setVictoryUser(null);
      return;
    }

    const highestBid = historyList.reduce((max, current) => {
      return current.bidAmount > max.bidAmount ? current : max;
    }, historyList[0]);

    const deadline = new Date(new Date().setDate(new Date().getDate() + auctionData.paymentDeadline));
    const formattedDeadline = `${deadline.getFullYear()}-${(deadline.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${deadline
      .getDate()
      .toString()
      .padStart(2, "0")}T${deadline
      .getHours()
      .toString()
      .padStart(2, "0")}:${deadline
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${deadline
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;

    const dataRequest: RequestTransaction = {
      userId: highestBid.userId.toString(),
      auctionId: auctionId,
      deadlineDate: formattedDeadline,
      amount: highestBid.bidAmount,
    };

    try {
      const res: ResponseCheckRegisterAution = await BillingServices.checkTransaction(
        highestBid.userId,
        auctionId
      );
      if (res.data === false) {
        await BillingServices.auctionTransaction(dataRequest);
        notification.success({ message: "Đã quyết định người chiến thắng" });
      }
      setVictoryUser(highestBid);
    } catch (error) {
      notification.error({ message: "Lỗi tạo người chiến thắng" });
    }
  };

  useEffect(() => {
    getAllHistoryPrice();
  }, [auctionId, isGoingOn]); // Thêm isGoingOn vào dependencies để cập nhật khi trạng thái thay đổi

  return (
    <div className="bg-white shadow-md rounded-md p-4 mx-auto mt-16">
      <h2 className="text-xl font-semibold mb-4">Lịch sử đấu giá</h2>
      <ul>
        {listHistoryPrice.map((item, index) => (
          <li
            className="flex items-center justify-between py-2 border-b border-gray-300"
            key={index}
          >
            <div className="flex items-center">
              <span className="text-lg font-semibold mr-4">#{item.userId}</span>
              <span className="text-gray-800 font-semibold">{item.userInfor.name}</span>
            </div>
            <span className="text-green-500 font-semibold">{item.bidAmount} VNĐ</span>
          </li>
        ))}
      </ul>
      {isGoingOn === "Đã kết thúc" && victoryUser && (
        <div className="mt-4 p-4 bg-green-100 rounded-md">
          <h3 className="text-lg font-semibold text-green-700">Người chiến thắng:</h3>
          <p className="text-gray-800">
            <span className="font-semibold">
              #{victoryUser.userId} - {victoryUser.userInfor.name}
            </span>{" "}
            với giá{" "}
            <span className="text-green-500 font-semibold">{victoryUser.bidAmount} VNĐ</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default HistoryPrice;