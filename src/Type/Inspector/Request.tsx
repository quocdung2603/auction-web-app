type Request = {
  id: number;
  name: string;
  description: string;
  verify: boolean;
  status: boolean;
  inspectorId: number;
  userId: number;
  assetId: number;
  deflag: boolean;
}

export { type Request };

export interface ResponseDataRequest{
  code: number,
  message: string,
  data: Request[]
}