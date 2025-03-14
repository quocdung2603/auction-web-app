import { request } from "../../Common/Config/Request";
import { RegisterAution } from "../../Type/Billing/BillingType";


export const BillingServices = {
  resgisterAuction: async(data:RegisterAution)=>{
    const res = await request.post("/bill-management-service/registerauction",data);
    return res.data;
  },
  checkRegisterAution: async(userId:number, autionId:number)=>{
    const res = await request.get(`/bill-management-service/registerauction/checkUserIdAndAuctionId/${autionId}/${userId}`);
    return res.data;
  }
};
