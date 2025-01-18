import { request } from "../../Common/Config/Request";
import { Inventory } from "../../Type/Asset/Inventory";

export const InventoryServices = {
  getAll: async () => {
    try {
      const response = await request.get("/asset-service/inventories");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(`/asset-service/inventories/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: Inventory) => {
    try {
      const response = await request.post("/asset-service/inventories", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, data: Inventory) => {
    console.log(data);
    try {
      const response = await request.patch(
        `/asset-service/inventories/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (id: string) => {
    try {
      const response = await request.delete(`/asset-service/inventories/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
