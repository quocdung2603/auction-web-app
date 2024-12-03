import { createContext, PropsWithChildren, useContext, useState } from "react";
import { User } from "../Type/User/User";
import { useNavigate } from "react-router-dom";
import { routerLinkUser } from "../Util/RouterLink";
import { KEY_LOCAL_USER } from "../Constant/Index";

interface AuthContextType {
  user: User | undefined;
  login: (user: User) => void;
  logout: () => void;
}

const authContext = createContext<AuthContextType | undefined>(undefined);

const authProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | undefined>(() => {
    const storeUser = localStorage.getItem(KEY_LOCAL_USER);
    return storeUser ? JSON.parse(storeUser) : undefined;
  });

  const login = (userData: User) => {
    localStorage.setItem(KEY_LOCAL_USER, JSON.stringify(userData));
    setUser(userData);
    navigate(routerLinkUser.Home);
  }
  
  const logout = () => {
    localStorage.removeItem(KEY_LOCAL_USER);
    setUser(undefined);
  }

  return <authContext.Provider value={{
    user,
    login,
    logout
  }}>{children}</authContext.Provider>;
};

const useAuth = () => { 
  const context = useContext(authContext);
  if(!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export {
  authProvider,
  useAuth
}
