import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductImage from "./Components/ProductImage";
import ProductInfo from "./Components/ProductInfo";
import ProductDescription from "./Components/ProductDescription";
import { Auction, ResponseAuctionDataById } from "../../../Type/Auction/AuctionSession";
import { AuctionSessionServices } from "../../../Services/Auction/AuctionSessionServices";
import { Asset, ResponseDataAssetById } from "../../../Type/Asset/Asset";
import { AssetServices } from "../../../Services/Asset/AssetServices";
import HistoryPrice from "./Components/HistoryPrice";
import { ResponseDataUserByToken, User } from "../../../Type/Account/User";
import { UserServices } from "../../../Services/Account/UserServices";

interface AuctionData {
  id: number;
  priceStart: number;
  timeStartRegister: string;
  timeEndRegister: string;
  feeRegister: number;
  priceStep: number;
  auctionMethod: string;
  propertyOwner: string;
  viewLocation: string;
  timeViewProperty: string;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [auction, setAuction] = useState<Auction | null>(null);
  const [asset, setAsset] = useState<Asset | undefined>(undefined);
  const [imageList, setImageList] = useState<{ src: string; alt: string }[]>([]);
  const [isGoingOn, setIsGoingOn] = useState<string | null>(null);
  const [dataProperty, setDataProperty] = useState<AuctionData | null>(null);
  const [inforOwner,setInforOwner]=useState<User | null>();

  // Fetch asset details
  const getDetailAsset = async (assetId: number) => {
    const res: ResponseDataAssetById = await AssetServices.getById(assetId);
    const imageAsset= res.metadata.images.map((item)=>{
      return {
        src:  "http://localhost:3001/uploads/"+item.url,
        alt: item.id
      }
    })
    const allImage=[{ src: res.metadata.mainImage, alt: res.metadata.assetName },...imageAsset];
    setImageList(allImage);
    setAsset(res.metadata);
    const ownerId= res.metadata.userID.toString();
    
    const resUser:ResponseDataUserByToken = await UserServices.getById(ownerId);
    
    setInforOwner(resUser.data);
  };

  // Fetch auction details
  const getDetailAuction = async () => {
    if (!id) return;
    const res: ResponseAuctionDataById = await AuctionSessionServices.getById(
      id
    );
    await getDetailAsset(res.metadata.auctionSession.assetId);
    setAuction(res.metadata.auctionSession);
  };
  // Check auction status
  const checkStatus = () => {
    if (!auction) return;
    const startDate = new Date(auction.startTime);
    const endDate = new Date(auction.endTime);
    const current = Date.now();
    
    if (current < startDate.getTime()) {
      setIsGoingOn("Chưa diễn ra");
    } else if (current >= startDate.getTime() && current <= endDate.getTime()) {
      setIsGoingOn("Đang diễn ra");
    } else if (current > endDate.getTime()) {
      setIsGoingOn("Đã kết thúc");
    }
  };

  // Update auction data when auction and asset are fetched
  useEffect(() => {
    getDetailAuction();
  }, [id]);

  useEffect(() => {
    if (auction && asset && inforOwner) {
      const allInforAuction: AuctionData = {
        id: auction.id,
        priceStart: asset.assetPrice,
        timeStartRegister: auction.startTime,
        timeEndRegister: auction.endTime,
        feeRegister: Number(auction.depositFee),
        priceStep: Number(auction.bidStep),
        auctionMethod: "Online",
        propertyOwner: inforOwner?.name + " : " + inforOwner?.phone,
        viewLocation: asset.address,
        timeViewProperty: "Trong giờ hành chính kể từ ngày 11/12/2024 đến 17giờ00 ngày 13/12/2024",
      };
      setDataProperty(allInforAuction);
      checkStatus();
    }
  }, [auction, asset]);

  // Dynamic Product Description List based on fetched data
  const [productDescriptionList,setProductDescriptionList]=useState<any>()


  useEffect(() => {
    if (dataProperty) {
      setProductDescriptionList([
        {
          title: "Mô tả tài sản",
          content: asset?.assetDescription || "Chưa có mô tả",
        },
        {
          title: "Thông tin đấu giá",
          content: `Phương thức: ${dataProperty.auctionMethod}, Bắt đầu: ${dataProperty.timeStartRegister}`,
        },
        {
          title: "Tài liệu liên quan",
          content: "Tài liệu sẽ được cập nhật sau",
        },
        {
          title: "Nộp phí/ Tiền đặt trước",
          content: `Phí đăng ký: ${dataProperty.feeRegister} VND`,
        },
      ]);
    }
  }, [dataProperty]);

  return (
    <div className="mx-[7%]">
      <div className="py-[2%] border-b-2">
        <h1 className="text-3xl font-semibold mb-4">{auction?.name || "Đang tải..."}</h1>
        <p>Trang chủ / Danh mục tài sản</p>
      </div>
      <div className="flex flex-row mt-[4%] gap-5">
        <div className="w-7/12 flex flex-col space-y-5 overflow-hidden max-w-2/3">
          {imageList.length > 0 && <ProductImage list={imageList} />}
        </div>
        <div className="w-5/12 space-y-5">
         {dataProperty && isGoingOn && <ProductInfo isGoingOn={isGoingOn} DataProperty={dataProperty} />}
        </div>
      </div>
      {productDescriptionList && <ProductDescription list={productDescriptionList} />}
      {id && isGoingOn && auction && <HistoryPrice auctionId={id} isGoingOn={isGoingOn} auctionData={auction} />}
    </div>
  );
};

export default ProductDetail;