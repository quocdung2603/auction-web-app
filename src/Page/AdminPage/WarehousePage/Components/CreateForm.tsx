import { useEffect, useState } from "react";
import { IconWindowClose } from "../../../../Common/Icon/Icon";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import InputTypeNumber from "../../../../Components/Input/InputTypeNumber";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import InputTypeDateTime from "../../../../Components/Input/InputTypeDateTime";
import { Inventory } from "../../../../Type/Asset/Inventory";

interface CreateFormProps {
  openForm: boolean,
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>,
  content?: string,
  userChoose?: Inventory | null
}

const warehouseList = [
  { value: 1, label: "Kho 1" },
  { value: 2, label: "Kho 2" },
  { value: 3, label: "Kho 3" },
  { value: 4, label: "Kho 4" },
]

const assetList = [
  { value: 1, label: "Tài sản 1" },
  { value: 2, label: "Tài sản 2" },
  { value: 3, label: "Tài sản 3" },
  { value: 4, label: "Tài sản 4" },
]

const createForm: React.FC<CreateFormProps> = ({ openForm, setOpenForm, content = "ADD NEWS ACCOUNT", userChoose }) => {
  const [quantity, setQuantity] = useState<number>(userChoose?.quantity ?? 0);
  const [entryTime, setEntryTime] = useState<Date | string>(userChoose?.entryTime ?? new Date());
  const [exitTime, setExitTime] = useState<Date | string>(userChoose?.exitTime ?? new Date());
  const [warehouseID, setWarehouseID] = useState<number>(userChoose?.warehouseID ?? 0);
  const [assetID, setAssetID] = useState<number>(userChoose?.assetID ?? 0);

  const closeFormModal = () => {
    setOpenForm(false);
  };
  useEffect(() => {
    if (userChoose) {
      setQuantity(userChoose.quantity ?? 0);
      setEntryTime(userChoose.entryTime ?? new Date());
      setExitTime(userChoose.exitTime ?? new Date());
      setWarehouseID(userChoose.warehouseID ?? 0);
      setAssetID(userChoose.assetID ?? 0);
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
                <InputTypeNumber
                  title="Số lượng"
                  content={quantity}
                  setContent={setQuantity}
                  placeholder="Nhập số lượng"
                />
                <div className="grid grid-cols-2 gap-4">
                  <InputTypeDateTime
                    title="Thời gian nhập"
                    content={entryTime}
                    setContent={setEntryTime}
                    placeholder="Nhập thời gian nhập"
                  />
                  <InputTypeDateTime
                    title="Thời gian xuất"
                    content={exitTime}
                    setContent={setExitTime}
                    placeholder="Nhập thời gian xuất"
                  />
                </div>
                <InputTypeSelect
                  title="ID kho"
                  content={warehouseID}
                  setContent={setWarehouseID}
                  titleOption={warehouseList}
                />
                <InputTypeSelect
                  title="ID tài sản"
                  content={assetID}
                  setContent={setAssetID}
                  titleOption={assetList}
                />
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