import { routerLinkAdmin } from "../../Util/RouterLink";
import { IconDashboard, IconUserManager } from "../Icon/IconSlideBarAdmin";

interface MenuItem {
  content: string;
  icon?: React.ReactNode;
  href?: string;
  submenu?: MenuItem[] | null;
}

export const SiteMenuAdmin: MenuItem[] = [
  {
    content: "Dashboard",
    icon: <IconDashboard />,
    href: routerLinkAdmin.Home,
    submenu: null,
  },
  {
    content: "User",
    icon: <IconUserManager />,
    submenu: [
      {
        content: "Customer",
        icon: <></>,
        href: routerLinkAdmin.User,
      },
      {
        content: "Staff",
        icon: <></>,
        href: routerLinkAdmin.Staff,
      },
      {
        content: "Supplier",
        icon: <></>,
        href: routerLinkAdmin.Supplier,
      },
    ],
  },
  {
    content: "Assets",
    icon: <IconUserManager />,
    submenu: [
      {
        content: "Asset Type",
        icon: <></>,
        href: routerLinkAdmin.AssetType,
      },
      {
        content: "Assets",
        icon: <></>,
        href: routerLinkAdmin.Asset,
      },
      {
        content: "Warehouse",
        icon: <></>,
        href: routerLinkAdmin.Warehouse,
      },
    ]
  },
  {
    content: "Activities",
    icon: <IconUserManager />,
    submenu: [
      {
        content: "News",
        icon: <></>,
        href: routerLinkAdmin.News,
      },
      {
        content: "Event",
        icon: <></>,
        href: routerLinkAdmin.Event,
      }
    ]
  },
  {
    content: "Finance",
    icon: <IconUserManager />,
    submenu: [
      {
        content: "Bill",
        icon: <></>,
        href: routerLinkAdmin.Bill,
      },
      {
        content: "Tax",
        icon: <></>,
        href: routerLinkAdmin.Tax,
      }
    ]
  },
  {
    content: "Inquire and bid",
    icon: <IconUserManager />,
    submenu: [
      {
        content: "Request",
        icon: <></>,
        href: routerLinkAdmin.Request,
      },
      {
        content: "Auction",
        icon: <></>,
        href: routerLinkAdmin.Auction,
      }
    ]
  },
];
