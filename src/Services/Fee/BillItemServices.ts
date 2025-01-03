import { request } from "../../Common/Config/Request";
import { BillItem } from "../../Type/BillAndTax/BillItem";

export const BillItemServices = {
  getById: async (id: string) => {
    try {
      const response = await request.get(`/billitem/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: BillItem) => {
    try {
      const response = await request.post("/billitem", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, data: BillItem) => {
    try {
      const response = await request.put(`/billitem/${id}`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (id: string) => {
    try {
      const response = await request.delete(`/billitem/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
