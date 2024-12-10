import { routerLinkAdmin } from "../Util/RouterLink"
import HomePageAdmin from "../Page/AdminPage/HomePage/HomePageAdmin"
import UserManagement from "../Page/AdminPage/UserPage/UserManagement"
import StaffManagement from "../Page/AdminPage/StaffPage/StaffManagement"
import AssetTypeManagement from "../Page/AdminPage/AssetType/AssetTypeManagement"
import AuctionManagement from "../Page/AdminPage/Auction/AuctionManagement"
import AssetManagement from "../Page/AdminPage/AssetPage/AssetManagement"
import NewsManagement from "../Page/AdminPage/NewsPage/NewsManagement"
import EventManagement from "../Page/AdminPage/EventPage/eventManagement"
import SupplierManagement from "../Page/AdminPage/SupplierPage/SupplierManagement"
import WarehouseManagement from "../Page/AdminPage/WarehousePage/AssetManagement"
import BillManagement from "../Page/AdminPage/BillPage/BillManagement"
import TaxManagement from "../Page/AdminPage/TaxPage/TaxManagement"
import RequestManagement from "../Page/AdminPage/RequestPage/RequestManagement"

export const AdminRoute = [
  {
    path: routerLinkAdmin.Home,
    element: HomePageAdmin,
  },
  {
    path: routerLinkAdmin.User,
    element: UserManagement,
  },
  {
    path: routerLinkAdmin.Staff,
    element: StaffManagement,   
  },
  {
    path: routerLinkAdmin.AssetType,
    element: AssetTypeManagement
  },
  {
    path: routerLinkAdmin.Auction,
    element: AuctionManagement
  },
  {
    path: routerLinkAdmin.Asset,
    element: AssetManagement
  },
  {
    path: routerLinkAdmin.News,
    element: NewsManagement
  },
  {
    path: routerLinkAdmin.Event,
    element: EventManagement
  },
  {
    path: routerLinkAdmin.Supplier,
    element: SupplierManagement
  },
  {
    path: routerLinkAdmin.Warehouse,
    element: WarehouseManagement
  },
  {
    path: routerLinkAdmin.Bill,
    element: BillManagement
  },
  {
    path: routerLinkAdmin.Tax,
    element: TaxManagement
  },
  {
    path: routerLinkAdmin.Request,
    element: RequestManagement
  },
]