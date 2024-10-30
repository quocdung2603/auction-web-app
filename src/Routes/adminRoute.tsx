import { routerLinkAdmin } from "../Util/routerLink"
import HomePageAdmin from "../Page/AdminPage/HomePage/HomePageAdmin"
import UserManagement from "../Page/AdminPage/UserPage/UserManagement"

export const AdminRoute=[
  {
      path: routerLinkAdmin.Home,
      element: HomePageAdmin,
  },
  {
    path: routerLinkAdmin.User,
    element: UserManagement,
},
]