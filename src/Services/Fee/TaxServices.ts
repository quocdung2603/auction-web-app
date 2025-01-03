import { request } from "../../Common/Config/Request";
import { Tax } from "../../Type/BillAndTax/Tax";

export const TaxServices = {
  getAll: async () => {
    try {
      const response = await request.get("/tax");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(`/tax/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: Tax) => {
    try {
      const response = await request.post("/tax", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, data: Tax) => {
    try {
      const response = await request.put(`/tax/${id}`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (id: string) => {
    try {
      const response = await request.delete(`/tax/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
