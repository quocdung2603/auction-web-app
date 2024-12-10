import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

import ButtonPrimary from "../../../Components/Button/ButtonPrimary";

const ContactPage = () => {
	return (
		<>
			<div className="px-custom ">
				<div className="flex flex-col h-[150px] justify-center border-b-2 mb-24">
					<h1 className="text-3xl font-semibold mb-4">Liên hệ</h1>
					<p>Trang chủ / Liên hệ</p>
				</div>

				<div className="mb-6">
					<div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6">
						<div className="shadow-custom flex justify-center items-center px-10 py-6 gap-6">
							<div className=" flex justify-center items-center rounded-full hover:bg-red-600 hover:text-white text-red-700 w-20 h-20 font-bold cursor-pointer transitionLow  ">
								<CiLocationOn className="text-5xl" />
							</div>
							<div className="w-3/5">
								<h1 className="text-2xl font-bold mb-4">
									Địa chỉ
								</h1>
								<p className="text-gray-600 font-medium">
									Số 49 Văn Cao, phường Liễu Giai, quận Ba
									Đình, TP. Hà Nội.
								</p>
							</div>
						</div>
						<div className="shadow-custom flex justify-center items-center py-6 gap-6">
							<div className="flex justify-center items-center rounded-full hover:bg-red-600 hover:text-white text-red-700 w-20 h-20 font-bold cursor-pointer transitionLow ">
								<MdOutlinePhoneInTalk className="text-5xl" />
							</div>
							<div className="w-3/5">
								<h1 className="text-2xl font-bold mb-4">
									Số điện thoại
								</h1>
								<p className="text-gray-600 font-medium">
									024.32.115.234
								</p>
								<p className="text-gray-600 font-medium">
									024.32.115.234
								</p>
							</div>
						</div>
						<div className="shadow-custom flex justify-center items-center px-10 py-6 gap-6">
							<div className="flex justify-center items-center rounded-full hover:bg-red-600 hover:text-white text-red-700 w-20 h-20 font-bold cursor-pointer transitionLow ">
								<MdOutlineMailOutline className="text-5xl" />
							</div>
							<div className="w-3/5">
								<h1 className="text-2xl font-bold mb-4">
									Địa chỉ
								</h1>
								<p className="text-gray-600 font-medium">
									024.32.115.234
								</p>
								<p className="text-gray-600 font-medium">
									024.32.115.234
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* Form and address */}
				<div className="flex gap-6">
					<div className="shadow-custom w-1/2 p-10 box-border">
						<h1 className="text-4xl font-semibold mb-4">Liên hệ</h1>
						<p className="text-gray-500 text-lg mb-6">
							Vui lòng điền thông tin vào các ô bên dưới, chúng
							tôi sẽ liên lạc và phản hồi lại quý khách
						</p>
                        <div className="flex justify-between gap-8 mb-5">
                            <input type="text" placeholder="Họ và tên:" className="w-1/2 border-[0.5px] border-inherit p-3" />
                            <input type="text" placeholder="Email" className="w-1/2 border-[0.5px] border-inherit p-3"/>
                        </div>
                        <div className="flex justify-between gap-8 mb-5">
                            <input type="text" placeholder="Số điện thoại:" className="w-1/2 border-[0.5px] border-inherit p-3"/>
                            <input type="text" placeholder="Nơi công tác" className="w-1/2 border-[0.5px] border-inherit p-3"/>
                        </div>
                        <div className="w-full mb-5">
                            <textarea name="" id="" placeholder="Tin nhắn:" className="w-full min-h-48 border-[0.5px] border-inherit p-3"></textarea>
                        </div>
                        <ButtonPrimary className="px-4 py-2">Gửi yêu cầu</ButtonPrimary>
					</div>
					<div className="shadow-custom w-1/2">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31334.873107963238!2d106.66938215!3d10.974003199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1733210688146!5m2!1sen!2s"
							style={{}}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="w-full h-full"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactPage;
