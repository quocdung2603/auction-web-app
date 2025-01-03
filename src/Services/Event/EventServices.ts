import { request } from "../../Common/Config/Request";
import { Event } from "../../Type/Event/Event";

export const EventServices = {
  getAll: async () => {
    try {
      const response = await request.get("/event-management-service/event");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await request.get(
        `/event-management-service/event/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (data: Event) => {
    try {
      const response = await request.post(
        "/event-management-service/event",
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, data: Event) => {
    try {
      const response = await request.patch(
        `/event-management-service/event/${id}`,
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
        `/event-management-service/event/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
