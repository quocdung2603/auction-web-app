type Role = {
  id: number;
  name: string;
  delflag: boolean;
}

export { type Role };

export interface ResponseDataRole{
  code: number,
  message: string,
  data: Role[]
}