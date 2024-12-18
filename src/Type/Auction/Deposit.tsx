type Deposit = {
  depositId: number;
  auctionSessionId: number;
  userId: number;
  depositAmount: number;
  delflag: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export {type Deposit};