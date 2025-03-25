import { request } from "../../Common/Config/Request";
import { Asset } from "../../Type/Asset/Asset";

export const AssetServices = {
  getAll: async () => {
    try {
      const response = await request.get("/asset-service/assets");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: number) => {
    try {
      const response = await request.get(`/asset-service/assets/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: Asset) => {
    const req = {
      userID: data.userID,
      assetName: data.assetName,
      file: data.mainImage,
      assetDescription: data.assetDescription,
      assetPrice: data.assetPrice,
      inspectorID: data.inspectorID,
      assetTypeID: data.assetTypeID,
      address: data.address,
    };
    const response = await request.post("/asset-service/assets", req, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
  update: async (id: string, data: Asset) => {
    const req = {
      userID: data.userID,
      assetName: data.assetName,
      file: data.mainImage,
      assetDescription: data.assetDescription,
      assetPrice: data.assetPrice,
      inspectorID: data.inspectorID,
      assetTypeID: data.assetTypeID,
      address: data.address,
      status: data.status,
      reason: data.reason
    };
    const response = await request.patch(`/asset-service/assets/${id}`, req, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
  delete: async (id: string) => {
    try {
      const response = await request.delete(`/asset-service/assets/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
