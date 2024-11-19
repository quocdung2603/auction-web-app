import { routerLinkUser } from "../Util/RouterLink";
import HomePageUser from "../Page/ClientPage/HomePage/HomePageUser";
import AssetList from "../Page/ClientPage/AssetListPage/AssetListPage"

export const UserRoute = [
	{
		path: routerLinkUser.Home,
		element: HomePageUser,
	},
	{
		path: routerLinkUser.AssetList,
		element: AssetList,
	},
];
