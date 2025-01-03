import { request } from "../../Common/Config/Request";
import { History } from "../../Type/Auction/History";

export const HistoryServices = {
  getById: async (id: string) => {
    try {
      const response = await request.get(
        `/auction-management-service/histories/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: History) => {
    try {
      const response = await request.post(
        "/auction-management-service/histories",
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, data: History) => {
    try {
      const response = await request.patch(
        `/auction-management-service/histories/${id}`,
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
        `/auction-management-service/histories/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
