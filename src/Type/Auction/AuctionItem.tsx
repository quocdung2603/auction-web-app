type AuctionItem = {
  auctionItemId: number;
  auctionSessionId: number;
  assetId: number;
  startingBids: number;
  bidIncrement: number;
  delflag: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export {type AuctionItem};  