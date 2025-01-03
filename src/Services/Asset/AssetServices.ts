import { request } from "../../Common/Config/Request";

export const AssetServices = {
  getAll: async () => {
    try {
      const response = await request.get("/assets");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(`/assets/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};