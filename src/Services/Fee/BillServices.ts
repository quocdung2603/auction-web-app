import { request } from "../../Common/Config/Request";
import { Bill } from "../../Type/BillAndTax/Bill";

export const BillServices = {
  getAll: async () => {
    try {
      const response = await request.get("/bill");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(`/bill/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: Bill) => {
    try {
      const response = await request.post("/bill", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, data: Bill) => {
    try {
      const response = await request.put(`/bill/${id}`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
