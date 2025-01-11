type Inspector = {
  id: number;
  license: string;
  userId: number;
}

export { type Inspector };

export interface ResponseDataInspector{
  code: number,
  message: string,
  data: Inspector[]
}