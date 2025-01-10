import { Link } from "react-router-dom";

import Logo from "../../../Assets/Image/User/Logo.png";
import ButtonPrimary from "../../../Components/Button/ButtonPrimary";

// icon
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useAuth } from "../../../Common/Context/AuthContext";
import { LoginRequst } from "../../../Type/Account/Login";

interface LoginProps {
	showLogin: boolean;
	setShowLogin: (showLogin: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ showLogin, setShowLogin }) => {
	const {login}=useAuth();
    const [email,setEmail]=useState<string>("");
    const [password,setPassword]=useState<string>("");

    const handleLogin =()=>{
        const dataLogin:LoginRequst={
			email,
			password
		}
		login(dataLogin);
		setShowLogin(false);
    }
	return (
		<div
			className={` ${
				showLogin ? "scale-100" : "scale-0"
			} fixed flexCenter top-0 left-0 w-screen h-screen bg-black bg-opacity-40 z-max`}
		>
			<div className="relative flex-col w-2/6 p-10 bg-white rounded">
				<div
					className="absolute top-4 right-8 cursor-pointer "
					onClick={() => setShowLogin(!showLogin)}
				>
					<IoClose className="text-3xl text-red" />
				</div>
				<div className="relative flex items-center flex-col">
					<img src={Logo} alt="" className="w-1/4 h-1/4" />
				</div>
				<h2 className="text-xl mb-8 text-center">
					Bạn chưa có tài khoản?{" "}
					<span className="font-bold">Đăng Ký Ngay</span>
				</h2>
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-3">
						<p className="text-lg font-normal">
							Tên đăng nhập / Email
						</p>
						<input
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
							type="email"
							placeholder="Nhập tên đăng nhập/Email"
							className="py-3 px-5 border-small border-gray-600 border-solid outline-none focus:border-red focus:rounded-md transitionHight "
						/>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-lg font-normal">Mật Khẩu</p>
						<input
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
							type="password"
							placeholder="Mật Khẩu"
							className="py-3 px-5 border-small border-gray-600 border-solid outline-none focus:border-red focus:rounded-md transitionHight "
						/>
					</div>
					<div className="w-full">
						<p className="mb-2">Quên mật khẩu ?</p>
						<div onClick={handleLogin}>
							<ButtonPrimary
								className="w-full py-3 text-xl"
							>
								Đăng nhập
							</ButtonPrimary>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
