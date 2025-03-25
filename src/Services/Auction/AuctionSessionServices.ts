import { request } from "../../Common/Config/Request";
import { AuctionSession } from "../../Type/Auction/AuctionSession";
import { HistoryRequest } from "../../Type/Auction/History";

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
      endTime: data.endTime
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
  historyRequest: async(data:HistoryRequest)=>{
    const res= await request.post("/auction-management-service/auction-session-history",data)
    return res.data;
  },
  getAllHistoryRequest: async(auctionId:string)=>{
    const res= await request.get(`/auction-management-service/auction-session-history/auction-session/${auctionId}?page=1&limit=10&select=%5B%22id%22%2C%20%22userId%22%2C%20%22bidAmount%22%2C%20%22bidTime%22%5D&order=%7B%22bidTime%22%3A%20%22DESC%22%7D`);
    return res.data;
  },
  getAutionByUserId: async(userId:number)=>{
    const res = await request.get(`/bill-management-service/registerauction/findByUserId/${userId}`);
    return res.data;
  },
  getAllHistoryBid: async()=>{
    const res = await request.get('/auction-management-service/auction-session-history?page=1&limit=10&select=%5B%22id%22%2C%22bidAmount%22%2C%20%22userId%22%5D&order=%7B%22bidAmount%22%3A%20%22DESC%22%7D');
    return res.data;
  },
  getAutionByAuctionId: async(auctionId:number)=>{
    const res = await request.get(`/bill-management-service/registerauction/findByAuctionId/${auctionId}`);
    return res.data;
  },
};
