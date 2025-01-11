import { request } from "../../Common/Config/Request";
import { Tax } from "../../Type/BillAndTax/Tax";

export const TaxServices = {
  getAll: async () => {
    try {
      const response = await request.get("/bill-management-service/tax");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(`/bill-management-service/tax/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: Tax) => {
    console.log(data);
    try {
      const response = await request.post("/bill-management-service/tax", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, data: Tax) => {
    try {
      const response = await request.put(
        `/bill-management-service/tax/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (id: string) => {
    try {
      const response = await request.delete(
        `/bill-management-service/tax/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
