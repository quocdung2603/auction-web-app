type AssetType = {
  assetTypeID: number;
  assetTypeName: string;
  delflag: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
};
export { type AssetType };

export interface ResponseData {
  code: number;
  message: string;
  metadata: {
    data: AssetType[];
  };
}
