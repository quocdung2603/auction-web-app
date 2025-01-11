export enum TaxType {
  Percentage = "Percentage",
  Fixed = "Fixed",
}

type Tax = {
  id: number;
  taxName: string;
  taxDescription: string;
  taxAmount: number;
  delflag: boolean;
  taxType: TaxType;
}

export {type Tax};