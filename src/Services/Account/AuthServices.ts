import { request } from "../../Common/Config/Request";

export const AuthServices = {
  login: async (email: string, password: string) => {
    try {
      const response = await request.post("/user/auth", { email, password });
      return response.data;
    } catch (error) {
      alert("Lỗi đăng nhập");
      console.log(error);
    }
  },
  checktoken: async(token:string| null | undefined)=>{
    const response=await request.post("/user/auth/checktoken",{token})
    return response.data;
  },
  findUserByToken: async(token: string | null | undefined)=>{
    const response=await request.get(`/user/findbytoken/${token}`)
    return response.data;
  }

};
