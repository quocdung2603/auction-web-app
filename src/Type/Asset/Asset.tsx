interface infoImage{
  id: string,
  url: string
}
type Asset = {
  assetID: number;
  assetName: string;
  mainImage: any;
  assetDescription: string;
  assetPrice: number;
  inspectorID: number;
  assetTypeID: number;
  assetStatusID: number;
  delflag: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  userID: number,
  address: string,
  images: infoImage[],
  status?: string,
  reason?: string
};

export { type Asset };

export interface ResponseDataAsset {
  code: number;
  message: string;
  metadata: {
    data: Asset[];
  };
}
export interface ResponseDataAssetById {
  code: number;
  message: string;
  metadata: Asset;
}

