type Event = {
  eventId: number;
  eventName: string;
  startTime: Date;
  endTime: Date;
  eventState: string;
  description: string;
  delflag: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export { type Event };