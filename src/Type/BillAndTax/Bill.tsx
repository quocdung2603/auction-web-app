import { BillItem } from "./BillItem";

type Bill = {
  id: number;
  userId: number;
  staffId: number;
  billDate: Date;
  totalAmount: number;
  paymentTerm: Date;
  paymentStatus: boolean;
  billItems: BillItem[];
}

export {type Bill};