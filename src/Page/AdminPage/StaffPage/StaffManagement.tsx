import { useState } from "react";
import AddStatusAdmin from "../../../Components/Button/AddStatusAdmin";
import TableAdmin from "../../../Components/Table/TableAdmin";
import { User } from "../../../Type/Account/User";
import CreateForm from "./Components/CreateForm";
import RemoveForm from "../../../Components/Form/RemoveForm";
import { Role } from "../../../Type/Account/Role";

function staffManagement() {
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [userChoose, setUserChoose] = useState<User | null>(null);

  const [users, setUsers] = useState<User[]>(() => {
    const defaultRole: Role = {
      id: 0,
      name: "user",
      delflag: false,
      users: [],
    }
    const defaultItem: User = {
      id: 0,
      name: "John Doe",
      email: "quocdung@abccompany.com",
      password: "12345678",
      address: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, earum.", 
      phone: "0123123123",
      gender: true,
      Role: defaultRole,
    };
    return Array.from({ length: 10 }, () => ({ ...defaultItem }));
  });

  const column = [
    "name",
    "email",
    "gender",
    "phone",
    "Action",
  ];
  const status = [
    "Status",
    "Bị khóa",
    "Hoạt động"
  ]
  const removeUser = () => {
    if (userChoose) {
      const userData = users.filter(item => item.id === userChoose.id);
      setUsers(userData);
      setRemoveForm(false);
    }
  }
  return (
    <div className="w-full">
      <AddStatusAdmin contentAdd="Add User" contentStatus={status} setOpenForm={setDetailForm} />
      <TableAdmin column={column} data={users} setOpenFormDetail={setDetailForm} setOpenFormRemove={setRemoveForm} setItemChoose={setUserChoose}></TableAdmin>
      <CreateForm openForm={detailForm} setOpenForm={setDetailForm} content="Detail User" userChoose={userChoose} />
      <RemoveForm openForm={removeForm} setOpenForm={setRemoveForm} clickRemove={removeUser} />
    </div>
  );
}

export default staffManagement;