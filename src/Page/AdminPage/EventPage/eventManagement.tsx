import { useState } from "react";
import AddStatusAdmin from "../../../Components/Button/AddStatusAdmin";
import TableAdmin from "../../../Components/Table/TableAdmin";
import CreateForm from "./Components/CreateForm";
import RemoveForm from "../../../Components/Form/RemoveForm";

const eventManagement = () => {
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [userChoose, setUserChoose] = useState<any | null>(null);

  const [listData, setListData] = useState<any[]>(() => {
    const defaultItem: any = {
      id: "#1234",
      name: "John",
      email: "John@gmail.com",
      date: '2021-10-10',
      status: "Active",
    };
    return Array.from({ length: 10 }, () => ({ ...defaultItem }));
  });

  const column = [
    "id",
    "name",
    "email",
    "date",
    "status",
  ];
  const status = [
    "Status",
    "Bị khóa",
    "Hoạt động"
  ]
  const removeUser = () => {
    if (userChoose) {
      const userData = listData.filter(item => item.id === userChoose.id);
      setListData(userData);
      setRemoveForm(false);
    }
  }
  return (
    <div className="w-full">
      <AddStatusAdmin contentAdd="Add Staff" contentStatus={status} setOpenForm={setDetailForm} />
      <TableAdmin column={column} data={listData} setOpenFormDetail={setDetailForm} setOpenFormRemove={setRemoveForm} setItemChoose={setUserChoose}></TableAdmin>
      <CreateForm openForm={detailForm} setOpenForm={setDetailForm} content="Detail User" userChoose={userChoose} />
      <RemoveForm openForm={removeForm} setOpenForm={setRemoveForm} clickRemove={removeUser} />
    </div>
  );
}

export default eventManagement;