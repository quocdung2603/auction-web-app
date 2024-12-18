export enum TaxType {
  Percentage = "P",
  Fixed = "F",
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