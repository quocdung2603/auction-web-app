import { request } from "../../Common/Config/Request";
import { RegisterAution, RequestTransaction, Transaction } from "../../Type/Billing/BillingType";


export const BillingServices = {
  resgisterAuction: async(data:RegisterAution)=>{
    const res = await request.post("/bill-management-service/registerauction",data);
    return res.data;
  },
  checkRegisterAution: async(userId:number, autionId:number)=>{
    const res = await request.get(`/bill-management-service/registerauction/checkUserIdAndAuctionId/${autionId}/${userId}`);
    return res.data;
  },
  auctionTransaction: async(data:RequestTransaction)=>{
    const res = await request.post('/bill-management-service/auctiontransaction',data);
    return res.data;
  },
  checkTransaction: async(userId:number, auctionId:string)=>{
    const res = await request.get(`/bill-management-service/auctiontransaction/checktransaction/${auctionId}/${userId}`);
    return res.data;
  },
  getAllTransaction: async()=>{
    const res = await request.get(`/bill-management-service/auctiontransaction`);
    return res.data;
  },
  getAllTransactionByUserId: async(userId:number)=>{
    const res = await request.get(`/bill-management-service/auctiontransaction/findByUserId/${userId}`);
    return res.data;
  },
  paymentTransaction: async(auctiontransactionId: number)=>{
    const res = await request.get(`/bill-management-service/auctiontransaction/payment/${auctiontransactionId}`);
    return res.data;
  },
  findTransactionById: async(auctiontransactionId: number)=>{
    const res = await request.get(`/bill-management-service/auctiontransaction/${auctiontransactionId}`);
    return res.data;
  },
  updateTransaction: async(auctiontransactionId: number,transaction:Transaction)=>{
    const res = await request.put(`/bill-management-service/auctiontransaction/${auctiontransactionId}`,transaction);
    return res.data;
  }
};
