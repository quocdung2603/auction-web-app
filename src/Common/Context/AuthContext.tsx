import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { LoginRequst, ResponseLogin } from '../../Type/Account/Login';
import { routerLinkUser } from '../../Util/RouterLink';
import { AuthServices } from '../../Services/Account/AuthServices';

interface AuthContextType {
  login: (loginData: LoginRequst) => void;
  logout: () => void;
  token: string | null | undefined
}

const USER_TOKEN=import.meta.env.VITE_USER_TOKEN;
export const AuthConext = createContext<AuthContextType | null | undefined>(undefined);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const [token,setToken]=useState<string | null | undefined>(()=>{
    const storeToken = localStorage.getItem(USER_TOKEN);
    return storeToken ? storeToken : undefined;
  })

  const login = async (loginData: LoginRequst) => {
    const res:ResponseLogin = await AuthServices.login(loginData.email,loginData.password);
    localStorage.setItem(USER_TOKEN,res.data);
    navigate(routerLinkUser.Home);
  };
  const logout = () => {
    localStorage.removeItem(USER_TOKEN);
    setToken(null);
    return <Navigate to={routerLinkUser.Home}/>
  };
  return (
    <AuthConext.Provider value={{login, logout, token }}>
      {children}
    </AuthConext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthConext);
  if (!context) throw new Error('User này bị rỗng');
  return context;
};