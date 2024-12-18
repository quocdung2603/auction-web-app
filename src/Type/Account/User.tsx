import { Role } from "./Role";

type User = {
  id: number;
  name: string;
  password: string;
  address: string;
  gender: boolean;
  email: string;
  phone: string;
  Role: Role;
}

export { type User }