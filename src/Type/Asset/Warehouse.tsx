type Warehouse = {
  warehouseID: number;
  location: string;
  delflag: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
};

export { type Warehouse };

export interface ResponseDataWarehouse {
  code: number;
  message: string;
  metadata: {
    data: Warehouse[];
  };
}
