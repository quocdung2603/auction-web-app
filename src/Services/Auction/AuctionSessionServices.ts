import { request } from "../../Common/Config/Request";
import { AuctionSession } from "../../Type/Auction/AuctionSession";

export const AuctionSessionServices = {
  getAll: async () => {
    try {
      const response = await request.get(
        `/auction-management-service/auction-session`
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
    const req = {
      startTime: data.startTime,
      endTime: data.endTime,
      eventID: data.eventID,
    };
    console.log(req);
    try {
      const response = await request.patch(
        `/auction-management-service/auction-session/${id}`,
        req
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
