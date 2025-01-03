import { request } from "../../Common/Config/Request";

export const RoleServices = {
  getAll: async () => {
    try {
      const response = await request.get("/role");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
