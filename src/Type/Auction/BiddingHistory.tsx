type BiddingHistory = {
  bidHistoryID: number;
  auctionItemID: number;
  userID: number;
  bidAmount: number;
  bidTime: Date;
  delflag: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export {type BiddingHistory};