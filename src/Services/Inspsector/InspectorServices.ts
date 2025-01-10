import { request } from "../../Common/Config/Request";
import { Inspector } from "../../Type/Inspector/Inspector";

export const InspectorServices = {
  getAll: async () => {
    try {
      const response = await request.get("/inspector");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(`/inspector/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: Inspector) => {
    try {
      const response = await request.post("/inspector", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: number, data: Inspector) => {
    try {
      const response = await request.put(`/inspector/${id}`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (id: string) => {
    try {
      const response = await request.delete(`/inspector/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
