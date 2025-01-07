import { request } from "../../Common/Config/Request";
import { ImageAsset } from "../../Type/Asset/ImageAsset";

export const ImageAssetServices = {
  getAll: async () => {
    try {
      const response = await request.get("/asset-service/image-assets");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(`/asset-service/image-assets/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: ImageAsset) => {
    try {
      const response = await request.post("/asset-service/image-assets", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, data: ImageAsset) => {
    try {
      const response = await request.patch(
        `/asset-service/image-assets/${id}`,
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
        `/asset-service/image-assets/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
