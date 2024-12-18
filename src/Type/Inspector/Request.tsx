import { Inspector } from "./Inspector";

type Request = {
  id: number;
  name: string;
  description: string;
  verify: boolean;
  status: boolean;
  inspector: Inspector;
  userId: number;
  assetId: number;
  deflag: boolean;
}

export { type Request };