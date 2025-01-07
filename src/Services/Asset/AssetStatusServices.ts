import { request } from "../../Common/Config/Request";
import { AssetStatus } from "../../Type/Asset/AssetStatus";

export const AssetStatusServices = {
  getAll: async () => {
    try {
      const response = await request.get("/asset-service/asset-statuses");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(`/asset-service/asset-statuses/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: AssetStatus) => {
    try {
      const response = await request.post(
        "/asset-service/asset-statuses",
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, data: AssetStatus) => {
    try {
      const response = await request.put(
        `/asset-service/asset-statuses/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (id: string) => {
    try {
      const response = await request.delete(
        `/asset-service/asset-statuses/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
