import { AuctionItem } from "./AuctionItem";

type AuctionSession = {
  auctionSessionID: number;
  startTime: Date;
  endTime: Date;
  eventID: number;
  delflag: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  auctionItems: AuctionItem[],
}

export {type AuctionSession};