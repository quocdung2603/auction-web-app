import { request } from "../../Common/Config/Request";
import { Warehouse } from "../../Type/Asset/Warehouse";

export const WarehouseServices = {
  getAll: async () => {
    try {
      const response = await request.get("/asset-service/warehouse");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(`/asset-service/warehouse/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: Warehouse) => {
    try {
      const response = await request.post("/asset-service/warehouse", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, data: Warehouse) => {
    try {
      const response = await request.put(
        `/asset-service/warehouse/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (id: string) => {
    try {
      const response = await request.delete(`/asset-service/warehouse/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
