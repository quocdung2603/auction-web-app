import { request } from "../../Common/Config/Request";
import { AssetType } from "../../Type/Asset/AssetType";

export const AssetTypeServices = {
  getAll: async () => {
    try {
      const response = await request.get("/asset-service/asset-types");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(`/asset-service/asset-types/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: AssetType) => {
    try {
      const response = await request.post("/asset-service/asset-types", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, data: AssetType) => {
    const req = {
      assetTypeName: data.assetTypeName,
    };
    try {
      const response = await request.patch(
        `/asset-service/asset-types/${id}`,
        req
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (id: string) => {
    try {
      const response = await request.delete(`/asset-service/asset-types/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
