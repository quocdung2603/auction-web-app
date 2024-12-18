type Inventory = {
  inventoryID: number;
  quantity: number;
  entryTime: Date;
  exitTime: Date;
  warehouseID: number;
  assetID: number;
  delflag: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export {type Inventory};