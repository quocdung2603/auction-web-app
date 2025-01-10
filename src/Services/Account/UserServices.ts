import { request } from "../../Common/Config/Request";
import { User } from "../../Type/Account/User";

export const UserServices = {
  getAll: async () => {
    try {
      const response = await request.get("/user");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(`/user/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: User) => {
    try {
      const response = await request.post("/user", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  createUserByAdmin: async(data: User)=>{
    const response = await request.post("/user/createUser", data);
    return response.data;
  },
  update: async (id: number, data: User) => {
    try {
      const response = await request.put(`/user/${id}`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (id: string) => {
    try {
      const response = await request.delete(`/user/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
