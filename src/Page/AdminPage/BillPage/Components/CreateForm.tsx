import { useEffect, useState } from "react";
import { IconWindowClose } from "../../../../Common/Icon/Icon";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import InputTypeNumber from "../../../../Components/Input/InputTypeNumber";
import InputTypeDateTime from "../../../../Components/Input/InputTypeDateTime";
import { Bill } from "../../../../Type/BillAndTax/Bill";
import { Input } from "ckeditor5";
import { set } from "date-fns";

interface CreateFormProps {
  openForm: boolean,
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>,
  content?: string,
  userChoose?: Bill | null
}

// id: number;
// userId: number;
// staffId: number;
// billDate: Date;
// totalAmount: number;
// paymentTerm: Date;
// paymentStatus: boolean;
// billItems: BillItem[];

const userList = [
  { value: 1, label: "Nguyễn Văn A" },
  { value: 2, label: "Nguyễn Văn B" },
  { value: 3, label: "Nguyễn Văn C" },
]
const staffList = [
  { value: 1, label: "Nguyễn Văn A" },
  { value: 2, label: "Nguyễn Văn B" },
  { value: 3, label: "Nguyễn Văn C" },
]

const paymentStatusList = [
  { value: true, label: "Đã thanh toán" },
  { value: false, label: "Chưa thanh toán" },
]

const createForm: React.FC<CreateFormProps> = ({ openForm, setOpenForm, content = "ADD NEWS ACCOUNT", userChoose }) => {
  const [userId, setUserId] = useState<number>(userChoose?.userId ?? 0);
  const [staffId, setStaffId] = useState<number>(userChoose?.staffId ?? 0);
  const [billDate, setBillDate] = useState<Date>(userChoose?.billDate ?? new Date());
  const [totalAmount, setTotalAmount] = useState<number>(userChoose?.totalAmount ?? 0);
  const [paymentTerm, setPaymentTerm] = useState<Date>(userChoose?.paymentTerm ?? new Date());
  const [paymentStatus, setPaymentStatus] = useState<boolean>(userChoose?.paymentStatus ?? false);


  const closeFormModal = () => {
    setOpenForm(false);
  };
  useEffect(() => {
    if (userChoose) {
      setUserId(userChoose.userId ?? "");
      setStaffId(userChoose.staffId ?? "");
      setBillDate(userChoose.billDate ?? new Date());
      setTotalAmount(userChoose.totalAmount ?? "");
      setPaymentTerm(userChoose.paymentTerm ?? new Date());
      setPaymentStatus(userChoose.paymentStatus ?? "");
    }
  }, [userChoose]);
  return (
    <>
      {openForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-h-full rounded-3xl shadow-md lg:shadow-lg p-6 sm:p-8 w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[700px] mx-auto relative">
            <button
              className="absolute top-3 right-4 text-slate-600 text-xl hover:text-gray-500 focus:outline-none"
              onClick={closeFormModal}
            >
              <IconWindowClose />
            </button>
            <div className="flex flex-col gap-6">
              <h1 className="text-center text-black text-xl sm:text-2xl font-bold mb-4">
                {content}
              </h1>
              <form method="POST" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputTypeSelect
                    title="Khách hàng"
                    content={userId}
                    setContent={setUserId}
                    titleOption={userList}
                  />
                  <InputTypeSelect
                    title="Nhân viên"
                    content={staffId}
                    setContent={setStaffId}
                    titleOption={staffList}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputTypeDateTime
                    title="Ngày tạo"
                    content={billDate}
                    setContent={setBillDate}
                    placeholder="dd/mm/yyyy"
                  />
                  <InputTypeNumber
                    title="Nhân viên"
                    content={totalAmount}
                    setContent={setTotalAmount}
                    placeholder="Nhập tổng giá trị"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputTypeDateTime
                    title="Ngày thanh toán"
                    content={paymentTerm}
                    setContent={setPaymentTerm}
                    placeholder="Nhập ngày thanh toán"
                  />
                  <InputTypeSelect
                    title="Trạng thái thanh toán"
                    content={paymentStatus}
                    setContent={setPaymentStatus}
                    titleOption={paymentStatusList}
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    className="min-w-[90px] py-2 bg-[#ECEBE9] rounded-3xl font-bold text-[#4F4B45] text-sm focus:outline-none hover:bg-[#bdbcba]"
                    onClick={closeFormModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="min-w-[90px] py-2 bg-[#FB9400] rounded-3xl font-bold text-white text-sm focus:outline-none hover:bg-[#E07B00]"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default createForm;