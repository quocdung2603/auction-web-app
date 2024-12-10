import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

import Notification from "./Notification";

const Notifications = () => {
	return (
		<>
			<div className="w-full bg-black rounded-t-md px-6 pt-4 pb-3">
				<p className="text-white text-xl font-semibold">Thông báo</p>
			</div>
			<div className="w-full p-6 ">
				<div className="w-full border-small">
					<div className="grid grid-cols-12">
						<div className="col-span-1 flexCenter border-r-small">
							<input type="checkbox" />
						</div>
						<div className="border-r-small col-span-6 text-center px-4 py-2 flex gap-2">
							<div className="flex items-center gap-2 border-small px-3 py-1">
								<MdOutlineRemoveRedEye className="text-gray-400 text-xl" />
								<p>Đánh dấu là đã đọc</p>
							</div>
							<div className="flex items-center gap-2 border-small px-3 py-1">
								<RiDeleteBin5Line className="text-gray-400 text-xl" />
								<p>Xóa thông báo</p>
							</div>
						</div>
						<div className="border-r-small col-span-3 text-center"></div>
						<div className="border-r-small col-span-2 text-center"></div>
					</div>
					<Notification/>
				</div>
			</div>
			<div className="flex justify-end gap-4 px-6">
				<div className="border-small rounded-md rounded-br-none px-3 py-1">
					<p className="text-sm">Trước</p>
				</div>
        <div className="border-small border-red rounded-md rounded-br-none px-2 py-1">
					<p className="text-red font-medium">1</p>
				</div>
        <div className="border-small rounded-md rounded-br-none px-3 py-1">
					<p className="text-sm">Sau</p>
				</div>
			</div>
		</>
	);
};

export default Notifications;
