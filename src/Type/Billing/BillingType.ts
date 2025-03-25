export interface RegisterAution {
  userId: number;
  auctionId: number;
  price: number;
}

export interface ResponseRegisterAution {
  code: number;
  message: string;
  data: string;
}

export interface ResponseCheckRegisterAution {
  code: number;
  message: string;
  data: boolean;
}

export interface RequestTransaction {
  auctionId: string;
  userId: string;
  deadlineDate: string;
  amount: number;
}

export interface Transaction {
  id: number;
  auctionId: number;
  userId: number;
  deadlineDate: string; // Định dạng ISO-8601 (LocalDateTime trong Java)
  submitDate: string | null; // Có thể null
  amount: number;
  status: string; // Ví dụ: "Pending"
  createAt: string; // Định dạng ISO-8601 với millisecond
  updateAt: string; // Định dạng ISO-8601 với millisecond
}

export interface TransactionResponse {
  message: string; // Ví dụ: "Success"
  data: Transaction[]; // Mảng các giao dịch
  code: number; // Ví dụ: 200
}

export interface TransactionResponseById{
  message: string; // Ví dụ: "Success"
  data: Transaction; // Mảng các giao dịch
  code: number; // Ví dụ: 200
}
