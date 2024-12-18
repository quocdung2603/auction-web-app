import { Request } from "./Request";

type Inspector = {
  id: number;
  license: string;
  userId: number;
  requestList: Request[];
}

export { type Inspector };