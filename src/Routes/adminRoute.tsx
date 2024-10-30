import { RouterLinkAdmin } from "../Util/routerLink"
import HomePageAdmin from "../Page/AdminPage/HomePage"
import UserManagement from "../Page/AdminPage/UserPage"

export const adminRoute=[
  {
      path: RouterLinkAdmin.Home,
      element: HomePageAdmin,
  },
  {
    path: RouterLinkAdmin.User,
    element: UserManagement,
},
]