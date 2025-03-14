type AuctionSession = {
  auctionSessionID: number;
  startTime: Date;
  endTime: Date;
  eventID: number;
  delflag: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
};

export { type AuctionSession };

export interface ResponseDataAuctionSession {
  code: number;
  message: string;
  metadata: {
    auctionSessions: AuctionSession[];
  };
}

export interface Auction {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  paymentDeadline: number;
  assetId: number;
  depositFee: number;
  bidStep: number;
  isDelete: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  history?: [],
  users?: []
}

export interface ResponseAuctionData {
  code: number;
  message: string;
  metadata: {
    auctionSessions: Auction[];
  };
}

export interface ResponseAuctionDataById{
  code: number;
  message: string;
  metadata: {
    auctionSession: Auction;
  };
}