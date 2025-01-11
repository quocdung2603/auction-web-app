import { request } from "../../Common/Config/Request";

export const RoleServices = {
  getAll: async () => {
    try {
      const response = await request.get("/user/role");
      return response.data;
    } catch (error) {
      alert("Lỗi");
      console.log(error);
    }
  },
};
