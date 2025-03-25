import { User } from "../Account/User";

type History ={
  historyId: number;
  userId: number;
  bidHistoryId: number;
  billId: number;
  delflag: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export {type History};

export interface HistoryRequest{
  auctionSessionId: number,
  userId: number,
  bidAmount: number
}

export interface HistoryResponse{
  id: number,
  auctionSessionId: number,
  userId: number,
  bidAmount: number,
  userInfor: User
}


export interface HistoryResponseApi{
  code: number,
  message: string,
  metadata: {
    historyEntries: HistoryResponse[]
  }
}