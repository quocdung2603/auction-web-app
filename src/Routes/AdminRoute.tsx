import { routerLinkAdmin } from "../Util/RouterLink";
import HomePageAdmin from "../Page/AdminPage/HomePage/HomePageAdmin";
import UserManagement from "../Page/AdminPage/UserPage/UserManagement";
import AssetTypeManagement from "../Page/AdminPage/AssetType/AssetTypeManagement";
import AuctionItemManagement from "../Page/AdminPage/AuctionItemPage/AuctionItemManagement";
import AssetManagement from "../Page/AdminPage/AssetPage/AssetManagement";
import EventManagement from "../Page/AdminPage/EventPage/eventManagement";
import BillManagement from "../Page/AdminPage/BillPage/BillManagement";
import TaxManagement from "../Page/AdminPage/TaxPage/TaxManagement";
import InventoryManagement from "../Page/AdminPage/InventoryPage/InventoryManagement";
import WarehouseManagement from "../Page/AdminPage/WarehousePage/WarehouseManagement";
import RoleManagement from "../Page/AdminPage/RolePage/RoleManagement";
import RequestManagement from "../Page/AdminPage/RequestPage/RequestManagement";
import inspectorManagement from "../Page/AdminPage/InspectorPage/InspectorManagement";
import auctionSessionManagement from "../Page/AdminPage/AuctionSessionPage/AuctionSessionManagement";

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
    path: routerLinkAdmin.AssetType,
    element: AssetTypeManagement,
  },
  {
    path: routerLinkAdmin.AuctionItem,
    element: AuctionItemManagement,
  },
  {
    path: routerLinkAdmin.AuctionSession,
    element: auctionSessionManagement,
  },
  {
    path: routerLinkAdmin.Asset,
    element: AssetManagement,
  },
  {
    path: routerLinkAdmin.Event,
    element: EventManagement,
  },
  {
    path: routerLinkAdmin.Warehouse,
    element: WarehouseManagement,
  },
  {
    path: routerLinkAdmin.Inventory,
    element: InventoryManagement,
  },
  {
    path: routerLinkAdmin.Bill,
    element: BillManagement,
  },
  {
    path: routerLinkAdmin.Tax,
    element: TaxManagement,
  },
  {
    path: routerLinkAdmin.Role,
    element: RoleManagement,
  },
  {
    path: routerLinkAdmin.Request,
    element: RequestManagement,
  },
  {
    path: routerLinkAdmin.Inspector,
    element: inspectorManagement,
  },
];
