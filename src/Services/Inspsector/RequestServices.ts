import { request } from "../../Common/Config/Request";
import { Request } from "../../Type/Inspector/Request";

export const RequestServices = {
  getAll: async () => {
    try {
      const response = await request.get("/inspector/request");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(`/inspector/request/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: Request) => {
    try {
      const response = await request.post("/inspector/request", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: number, data: Request) => {
    try {
      const response = await request.put(`/inspector/request/${id}`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (id: number) => {
    try {
      const response = await request.delete(`/inspector/request/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
