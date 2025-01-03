import { request } from "../../Common/Config/Request";
import { AuctionSession } from "../../Type/Auction/AuctionSession";

export const AuctionServices = {
  getAll: async (
    page: number,
    limit: number,
    select: string,
    order: string,
    filter: string
  ) => {
    try {
      const response = await request.get(
        `/auction-management-service/auction-session?page=${page}&limit=${limit}&select=${select}&order=${order}&filter=${filter}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getById: async (id: string) => {
    try {
      const response = await request.get(
        `/auction-management-service/auction-session/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  create: async (data: AuctionSession) => {
    try {
      const response = await request.post(
        "/auction-management-service/auction-session",
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  update: async (id: string, data: AuctionSession) => {
    try {
      const response = await request.patch(
        `/auction-management-service/auction-session/${id}`,
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
        `/auction-management-service/auction-session/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
