type User = {
  id: number;
  name: string;
  password: string;
  address: string;
  gender: boolean;
  email: string;
  phone: string;
  role: number;
}

export { type User }

export interface ResponseDataUser{
  code: number,
  message: string,
  data: User[]
}
export interface ResponseDataUserByToken{
  code: number,
  message: string,
  data: User
}