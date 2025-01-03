import { request } from "../../Common/Config/Request";
import { Deposit } from "../../Type/Auction/Deposit";

export const DepositServices = {
  //auction-management-service/deposits?page=1&limit=1
  getAll: async (page: number, limit: number) => {
    try {
      const response = await request.get(
        `/auction-management-service/deposits?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(
        `/auction-management-service/deposits/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: Deposit) => {
    try {
      const response = await request.post(
        "/auction-management-service/deposits",
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, data: Deposit) => {
    try {
      const response = await request.patch(
        `/auction-management-service/deposits/${id}`,
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
        `/auction-management-service/deposits/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
