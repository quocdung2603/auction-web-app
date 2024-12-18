import { User } from "./User";

type Role = {
  id: number;
  name: string;
  delflag: boolean;
  users: User[];
}

export { type Role };