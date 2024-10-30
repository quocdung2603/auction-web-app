import Logo from "../../../Assets/Image/Logo.svg";
import { siteMenuAdmin } from "../../../Common/Config/SiteMenuAdmin";
import { IconSetting } from "../../../Common/Icon/Icon";
import { IconLight } from "../../../Common/Icon/IconSlideBarAdmin";
import ItemNavBar from "./itemNavbar";
function SideBarAdmin() {
  
  return (
    <div
      id='menu'
      className='bg-backgroundsidebaradmin min-w-64 h-screen col-span-2 rounded-lg p-4 flex flex-col'
    >
      <div className='px-[40px] flex justify-center items-center'>
        <img src={Logo} alt='G-EASY English Logo' className='h-100% mr-4' />
        <ul>
          <li className='text-[25px] font-bold text-black'>Auction</li>
          <li className='text-[16px] font-bold text-gray-600 mr-6'>Admin</li>
        </ul>
      </div>
      <div id='menu' className='flex flex-col space-y-2 my-5'>
        {siteMenuAdmin.map((item, index) => {
          return (
            <ItemNavBar
              key={index+0}
              content={item.content}
              icon={item.icon}
              href={item.href}
            ></ItemNavBar>
          );
        })}
      </div>
      <div className='mt-auto flex flex-col'>
        <div className='flex justify-start'>
          <span className='text-textsidebar font-semibold text-[20px]'>Support</span>
        </div>
        <ItemNavBar content={'Get Started'} href='/' icon={<IconLight/>} />
        <ItemNavBar content={'Setting'} href='/' icon={<IconSetting/>} />
      </div>
    </div>
  );
}

export default SideBarAdmin;