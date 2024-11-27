import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactPage = () => {
	return (
		<>
			<div className="px-custom ">
				<div className="flex flex-col h-[150px] justify-center border-b-2 mb-24">
					<h1 className="text-3xl font-semibold mb-4">Liên hệ</h1>
					<p>Trang chủ / Liên hệ</p>
				</div>

				<div>
					<div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6">
						<div className="shadow-custom flex justify-center items-center px-10 py-6 gap-6">
                            <div className="flex justify-center items-center rounded-full hover:bg-red-600 hover:text-white text-red-700 w-20 h-20 font-bold cursor-pointer transitionLow  ">
                                <CiLocationOn className="text-5xl" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold mb-4">Địa chỉ</h1>
                                <p className="text-gray-600 font-medium">Số 49 Văn Cao, phường Liễu Giai, quận Ba Đình, TP. Hà Nội.</p>
                            </div>
                        </div>
                        <div className="shadow-custom flex justify-center items-center px-10 py-6 gap-6">
                            <div className="flex justify-center items-center rounded-full hover:bg-red-600 hover:text-white text-red-700 w-20 h-20 font-bold cursor-pointer  ">
                                <MdOutlinePhoneInTalk  className="text-5xl" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold mb-4">Số điện thoại</h1>
                                <p className="text-gray-600 font-medium">024.32.115.234</p>
                                <p className="text-gray-600 font-medium">024.32.115.234</p>
                            </div>
                        </div>
                        <div className="shadow-custom flex justify-center items-center px-10 py-6 gap-6">
                            <div className="flex justify-center items-center rounded-full hover:bg-red-600 hover:text-white text-red-700 w-20 h-20 font-bold cursor-pointer  ">
                                <MdOutlineMailOutline  className="text-5xl" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold mb-4">Địa chỉ</h1>
                                <p className="text-gray-600 font-medium">024.32.115.234</p>
                                <p className="text-gray-600 font-medium">024.32.115.234</p>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactPage;
