type Asset = {
  assetID: number;
  assetName: string;
  mainImage: string;
  assetDescription: string;
  assetPrice: number;
  inspectorID: number;
  assetTypeID: number;
  assetStatusID: number;
  delflag: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
};

export { type Asset };

export interface ResponseDataAsset {
  code: number;
  message: string;
  metadata: {
    data: Asset[];
  };
}
