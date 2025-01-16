import { request } from "../../Common/Config/Request";
import { AuctionItem } from "../../Type/Auction/AuctionItem";

export const AuctionItemServices = {
  getAll: async () => {
    try {
      const response = await request.get(
        `/auction-management-service/auction-item`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(
        `/auction-management-service/auction-item/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: AuctionItem) => {
    try {
      const response = await request.post(
        "/auction-management-service/auction-item",
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, data: AuctionItem) => {
    try {
      const response = await request.patch(
        `/auction-management-service/auction-item/${id}`,
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
        `/auction-management-service/auction-item/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
