import { useState } from "react";
import AddStatusAdmin from "../../../Components/Button/AddStatusAdmin";
import TableAdmin from "../../../Components/Table/TableAdmin";
import { User } from "../../../Type/User/user";
import CreateForm from "./Components/CreateForm";
import RemoveForm from "../../../Components/Form/RemoveForm";

function UserManagement() {
    const [detailForm,setDetailForm]=useState<boolean>(false);
    const [removeForm,setRemoveForm]=useState<boolean>(false);
    const [userChoose,setUserChoose]=useState<User|null>(null);

      const [users, setUsers] = useState<User[]>(() => {
        const defaultItem: User = {
          id: "#1234",
          fullname: "John wick",
          username: "John",
          email: "John@gmail.com",
          password: "12345678",
          role: "Active",
        };
        return Array.from({ length: 10 }, () => ({ ...defaultItem }));
      });
      
      const column = [
        "id",
        "username",
        "email",
        "password",
        "role",
        "Action",
      ];
      const status=[
        "Status",
        "Bị khóa",
        "Hoạt động"
      ]
      const removeUser = ()=>{
          if(userChoose)
          {
            const userData= users.filter(item=>item.id===userChoose.id);
            setUsers(userData);
            setRemoveForm(false);
          }
      }
    return (  
        <div className="w-full">
            <AddStatusAdmin contentAdd="Add User" contentStatus={status} setOpenForm={setDetailForm} />
            <TableAdmin column={column} data={users} setOpenFormDetail={setDetailForm} setOpenFormRemove={setRemoveForm} setItemChoose={setUserChoose}></TableAdmin>
            <CreateForm openForm={detailForm} setOpenForm={setDetailForm} content="Detail User" userChoose={userChoose}/>
            <RemoveForm openForm={removeForm} setOpenForm={setRemoveForm} clickRemove={removeUser} />
        </div>
    );
}

export default UserManagement;