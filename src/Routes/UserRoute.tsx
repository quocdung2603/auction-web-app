import { routerLinkUser } from "../Util/RouterLink";
import HomePageUser from "../Page/ClientPage/HomePage/HomePageUser";
import AssetList from "../Page/ClientPage/AssetListPage/AssetListPage";
import Contact from '../Page/ClientPage/ContactPage/ContactPage';
import ProductDetail from "../Page/ClientPage/ProductDetail/ProductDetail";
import PersonalPage from "../Page/ClientPage/PersonalPage/PersonalPage";

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
		path: routerLinkUser.Contact,
		element: Contact,
	},
	{
		path: routerLinkUser.ProductDetail,
		element: ProductDetail,
	},
	{
		path: routerLinkUser.Personal,
		element: PersonalPage,
	},
];
