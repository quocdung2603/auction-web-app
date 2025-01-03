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
  update: async (id: string, data: User) => {
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
