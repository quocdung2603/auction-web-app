import { routerLinkUser } from "../Util/RouterLink";
import HomePageUser from "../Page/ClientPage/HomePage/HomePageUser";
import AssetList from "../Page/ClientPage/AssetListPage/AssetListPage"
import ProductDetail from "../Page/ClientPage/ProductDetail/ProductDetail";

export const UserRoute = [
	{
		path: routerLinkUser.Home,
		element: HomePageUser,
	},
	{
		path: routerLinkUser.AssetList,
		element: AssetList,
	},
  {
		path: routerLinkUser.ProductDetail,
		element: ProductDetail,
	},
];
