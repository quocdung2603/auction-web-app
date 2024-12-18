import { useState } from "react";
import AddStatusAdmin from "../../../Components/Button/AddStatusAdmin";
import TableAdmin from "../../../Components/Table/TableAdmin";
import CreateForm from "./Components/CreateForm";
import RemoveForm from "../../../Components/Form/RemoveForm";
import { Event } from "../../../Type/Event/Event";

const eventManagement = () => {
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [userChoose, setUserChoose] = useState<Event | null>(null);

  const [listData, setListData] = useState<Event[]>(() => {
    const defaultItem: Event = {
      eventId: 0,
      eventName: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, numquam!",
      startTime: new Date(),
      endTime: new Date(),
      eventState: "Los Angeles",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta qui mollitia eius tempore ab magnam reprehenderit cupiditate libero hic quisquam.", 
      delflag: false,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
    };
    return Array.from({ length: 10 }, () => ({ ...defaultItem }));
  });

  const column = [
    "eventName",
    "startTime",
    "endTime",
    "eventState",
    "description",
    "Action",
  ];
  const status = [
    "Status",
    "Bị khóa",
    "Hoạt động"
  ]
  const removeUser = () => {
    if (userChoose) {
      const userData = listData.filter(item => item.eventId === userChoose.eventId);
      setListData(userData);
      setRemoveForm(false);
    }
  }
  return (
    <div className="w-full">
      <AddStatusAdmin contentAdd="Add Staff" contentStatus={status} setOpenForm={setDetailForm} />
      <TableAdmin column={column} data={listData} setOpenFormDetail={setDetailForm} setOpenFormRemove={setRemoveForm} setItemChoose={setUserChoose}
        columnWidths={["15%", "15%", "15%", "15%", "25%", "15%"]}
      ></TableAdmin>
      <CreateForm openForm={detailForm} setOpenForm={setDetailForm} content="Detail User" userChoose={userChoose} />
      <RemoveForm openForm={removeForm} setOpenForm={setRemoveForm} clickRemove={removeUser} />
    </div>
  );
}

export default eventManagement;