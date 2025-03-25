export interface AuctionSession {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  paymentDeadline: number;
  assetId: number;
  depositFee: string; 
  bidStep: string;    
  isDelete: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}


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

export interface AuctionBid {
  id: number;
  userId: number;
  auctionId: number;
  price: number;
  status: boolean;
}
export interface ResponseDataAuctionBid{
  code: number;
  message: string;
  data: AuctionBid[]
}