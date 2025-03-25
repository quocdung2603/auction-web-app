import { useEffect, useState } from "react";
import { useAuth } from "../../../../Common/Context/AuthContext";
import {
  Auction,
  ResponseAuctionDataById,
} from "../../../../Type/Auction/AuctionSession";
import { notification, Button, Modal } from "antd";
import {
  ResponseRegisterAution,
  TransactionResponse,
  TransactionResponseById,
} from "../../../../Type/Billing/BillingType";
import { BillingServices } from "../../../../Services/Billing/BillingService";
import { AuctionSessionServices } from "../../../../Services/Auction/AuctionSessionServices";
import { IconFailTransaction, IconSuccess } from "../../../../Common/Icon/Icon";

interface Transaction {
  id: number;
  auctionId: number;
  userId: number;
  deadlineDate: string;
  submitDate: string | null;
  amount: number;
  status: string;
  createAt: string;
  updateAt: string;
}

const Notifications = () => {
  const { user } = useAuth();
  const [listAuction, setListAuction] = useState<Auction[]>([]);
  const [listTransaction, setListTransaction] = useState<Transaction[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transation, setTransaction] = useState<Transaction | null>(null);

  const getAllTransaction = async () => {
    if (user) {
      try {
        const res: TransactionResponse =
          await BillingServices.getAllTransactionByUserId(user.id);
        setListTransaction(res.data); // Lưu danh sách giao dịch

        const listResponseAuction: Auction[] = await Promise.all(
          res.data.map(async (item) => {
            const res: ResponseAuctionDataById =
              await AuctionSessionServices.getById(item.auctionId.toString());
            return res.metadata.auctionSession;
          })
        );
        setListAuction(listResponseAuction);
      } catch (error) {
        notification.error({ message: "Lỗi lấy dữ liệu" });
      }
    }
  };
  const checkTransactionSuccess = async () => {
    try {
      if (transation) {
        const res: TransactionResponseById =
          await BillingServices.findTransactionById(transation?.id);
        if (res.data.status === "Complete") {
          await getAllTransaction();
          notification.success({
            message: "Giao dịch thành công cảm ơn bạn đã mua hàng!",
          });
          setIsModalOpen(false);
        } else notification.error({ message: "Lỗi giao dịch chưa thành công" });
      } else {
        notification.error({ message: "Lỗi chưa thấy giao dịch hiện tại" });
      }
    } catch (error) {
      notification.error({ message: "Lỗi giao dịch chưa thành công" });
    }
  };

  const handlePayment = async (transactionId: number) => {
    try {
      // Giả lập gọi API thanh toán, thay bằng API thực tế của bạn
      const res: ResponseRegisterAution =
        await BillingServices.paymentTransaction(transactionId);
      window.open(res.data, "_blank");
      const currentTransaction = listTransaction.find(
        (item) => item.id === transactionId
      );
      if (currentTransaction) {
        setTransaction(currentTransaction);
        setIsModalOpen(true);
      }
    } catch (error) {
      notification.error({ message: "Lỗi khi thực hiện thanh toán" });
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const renderStatusTransaction = (status: string, transactionId: number) => {
    switch (status) {
      case "Pending":
        return (
          <Button
            type="primary"
            className="bg-blue-600 hover:bg-blue-700 text-white h-full" // Thêm h-full để nút cao 100%
            onClick={() => handlePayment(transactionId)}
          >
            Thanh toán
          </Button>
        );
      case "Complete":
        return (
          <IconSuccess/>
        );
      case "Done":
        return (
          <IconSuccess/>
        );
      default:
        return (
          <IconFailTransaction/>
        );
    }
  };

  useEffect(() => {
    getAllTransaction();
  }, [user]);

  return (
    <div className="p-5 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-5">Thông tin thanh toán đấu giá</h2>
      {listTransaction.length === 0 ? (
        <p className="text-gray-500">
          Bạn chưa tham gia đấu giá nào cần thanh toán.
        </p>
      ) : (
        <div className="space-y-4">
          {listTransaction.map((transaction) => {
            const auction = listAuction.find(
              (a) => a.id === transaction.auctionId
            );
            return (
              <div
                key={transaction.id}
                className="border rounded-lg p-4 bg-white shadow-md flex justify-between items-stretch"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {auction
                      ? auction.name
                      : `Phiên đấu giá #${transaction.auctionId}`}
                  </h3>
                  <div className="mt-2 space-y-2">
                    <p className="text-gray-600">
                      Số tiền cần thanh toán:{" "}
                      <span className="font-semibold text-green-500">
                        {transaction.amount.toLocaleString()} VNĐ
                      </span>
                    </p>
                    <p className="text-gray-600">
                      Thời hạn thanh toán:{" "}
                      <span className="font-semibold">
                        {new Date(transaction.deadlineDate).toLocaleString(
                          "vi-VN",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          }
                        )}
                      </span>
                    </p>
                    <p className="text-gray-600">
                      Trạng thái:{" "}
                      <span
                        className={`font-semibold ${
                          transaction.status === "Pending"
                            ? "text-yellow-500"
                            : transaction.status === "Completed"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {transaction.status === "Pending"
                          ? "Chờ thanh toán"
                          : transaction.status === "Complete"
                          ? "Đã thanh toán" 
                          : transaction.status === "Done" 
                          ? "Giao dịch hoàn tất"
                          : "Quá hạn"}
                      </span>
                    </p>
                    {auction && (
                      <p className="text-gray-600">
                        Thời gian kết thúc phiên:{" "}
                        <span className="font-semibold">
                          {new Date(auction.endTime).toLocaleString("vi-VN", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
                {
                  renderStatusTransaction(transaction.status,transaction.id)
                }
              </div>
            );
          })}
        </div>
      )}
      <Modal
        width={1000}
        title={"Xác nhận giao dịch"}
        open={isModalOpen}
        onCancel={closeModal}
        cancelButtonProps={{ className: "hidden" }}
        okButtonProps={{ className: "hidden" }}
      >
        <div className="transaction-success-modal">
          <h2>Xác nhận giao dịch!</h2>
          <p>Bạn đang thực hiện giao dịch.</p>
          <div className="transaction-details">
            <p>
              <strong>Mã giao dịch:</strong> {transation?.id || "TX123456789"}
            </p>
            <p>
              <strong>Số tiền:</strong>{" "}
              {transation?.amount
                ? `${transation.amount.toLocaleString()} VND`
                : "N/A"}
            </p>
            <p>
              <strong>Thời gian:</strong> {new Date().toLocaleString()}
            </p>
          </div>
          <div className="flex justify-end">
            <button onClick={checkTransactionSuccess} className=" bg-green-500 text-white h-full p-3">
              Giao dịch thành công
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Notifications;
