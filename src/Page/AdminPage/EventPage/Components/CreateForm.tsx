import { useEffect, useState } from "react";
import { IconWindowClose } from "../../../../Common/Icon/Icon";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import InputTypeDateTime from "../../../../Components/Input/InputTypeDateTime";
import InputDescription from "../../../../Components/Input/InputDescription";
import { Event } from "../../../../Type/Event/Event";

interface CreateFormProps {
  openForm: boolean,
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>,
  content?: string,
  userChoose?: Event | null
}

//     eventName: string;
//     startTime: Date;
//     endTime: Date;
//     eventState: string;
//     description: string;

const createForm: React.FC<CreateFormProps> = ({ openForm, setOpenForm, content = "ADD NEWS ACCOUNT", userChoose }) => {
  const [eventName, setEventName] = useState<string>(userChoose?.eventName ?? "");
  const [startTime, setStartTime] = useState<Date>(userChoose?.startTime ?? new Date());
  const [endTime, setEndTime] = useState<Date>(userChoose?.endTime ?? new Date());
  const [eventState, setEventState] = useState<string>(userChoose?.eventState ?? "");
  const [description, setDescription] = useState<string>(userChoose?.description ?? "");

  const closeFormModal = () => {
    setOpenForm(false);
  };
  useEffect(() => {
    if (userChoose) {
      setEventName(userChoose.eventName ?? "");
      setStartTime(userChoose.startTime ?? new Date());
      setEndTime(userChoose.endTime ?? new Date());
      setEventState(userChoose.eventState ?? "");
      setDescription(userChoose.description ?? "");
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
                <InputTypeString
                  title="Tên sự kiện"
                  content={eventName}
                  setContent={setEventName}
                  placeholder="Nhập tên sự kiện"
                />
                <div className="grid grid-cols-2 gap-4">
                  <InputTypeDateTime
                    title="Thời gian bắt đầu"
                    content={startTime}
                    setContent={setStartTime}
                    placeholder="Nhập thời gian bắt đầu"
                  />
                  <InputTypeDateTime
                    title="Thời gian kết thúc"
                    content={endTime}
                    setContent={setEndTime}
                    placeholder="Nhập thời gian kết thúc"
                  />
                </div>
                <InputTypeString
                  title="Trạng thái"
                  content={eventState}
                  setContent={setEventState}
                  placeholder="Nhập trạng thái"
                />
                <InputDescription
                  title="Mô tả"
                  content={description}
                  setContent={setDescription}
                  placeholder="Nhập mô tả"
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