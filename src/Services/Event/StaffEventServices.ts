import { request } from "../../Common/Config/Request";
import { StaffEvent } from "../../Type/Event/StaffEvent";

export const StaffEventServices = {
  getAll: async () => {
    try {
      const response = await request.get(
        "event-management-service/staff-event"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(
        `event-management-service/staff-event/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: StaffEvent) => {
    try {
      const response = await request.post(
        "event-management-service/staff-event",
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, data: StaffEvent) => {
    try {
      const response = await request.patch(
        `event-management-service/staff-event/${id}`,
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
        `event-management-service/staff-event/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
