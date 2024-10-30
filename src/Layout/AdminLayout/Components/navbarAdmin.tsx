import { IconCart, IconChat, IconRing } from "../../../Common/Icon/Icon";
// import ControllerForm from "../../DefaultLayout/Componets/ControllerForm";

function NavBarAdmin() {
    return ( 
        <header className=' text-black border-none p-4 fixed top-0 left-[320px] right-0 z-10 shadow-md bg-[#FFF4E5]'>
      <div className='flex flex-1 space-x-4 items-center justify-end'>
        <div>
          <IconCart />
        </div>
        <div>
          <IconChat />
        </div>
        <div>
          <IconRing />
        </div>
        <div className='ml-3 flex-shrink-0'>
          {/* <ControllerForm></ControllerForm> */}
        </div>
      </div>
    </header>
     );
}

export default NavBarAdmin;