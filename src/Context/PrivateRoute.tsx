import { useAuth } from "./AuthContext";
import LoginForm from "../Components/Form/LoginForm";
import { useState } from "react";

interface RoleProps {
  roles: string[];
}

const PrivateRoute = ({ roles}:RoleProps ) => {
  const [openModal, setOpenModal] = useState(false);

  const { user } = useAuth();
  if(!user) { 
    return <LoginForm setOpenModal={setOpenModal} />
  }
  return (
    <></>
  )
};
