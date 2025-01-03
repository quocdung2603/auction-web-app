import { request } from "../../Common/Config/Request";
import { BiddingHistory } from "../../Type/Auction/BiddingHistory";

export const BiddingHistoryServices = {
  getAll: async () => {
    try {
      const response = await request.get(
        "/auction-management-service/bidding-history"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(
        `/auction-management-service/bidding-history/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: BiddingHistory) => {
    try {
      const response = await request.post(
        "/auction-management-service/bidding-history",
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, data: BiddingHistory) => {
    try {
      const response = await request.patch(
        `/auction-management-service/bidding-history/${id}`,
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
        `/auction-management-service/bidding-history/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
