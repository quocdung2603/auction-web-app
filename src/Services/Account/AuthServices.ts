import { request } from "../../Common/Config/Request";

export const AuthServices = {
  login: async (email: string, password: string) => {
    try {
      const response = await request.post("/user/auth", { email, password });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
