import { Bill } from "./Bill";

type BillItem = {
  id: number;
  assetId: number;
  price: number;
  taxAmount: number;
  totalAmount: number;
  bill: Bill;
}

export {type BillItem};