import { IoMdPerson } from "react-icons/io";

import ButtonPrimary from "../../../../Components/Button/ButtonPrimary";
import InputBraille from "../../../../Components/Input/InputBraille";

import { useState } from "react";

const PersonalInformation = () => {
    const [surname, setSurname] = useState<string>("");
	return (
		<div className="p-10  w-full">
			<div className="flex gap-6 items-center mb-8">
				<IoMdPerson className="rounded-full shadow-custom text-8xl text-gray-300" />
				<div>
					<h1 className="text-3xl font-medium">Chu Bá Trường</h1>
					<p className="text-blue-700 font-medium">Đổi mật khẩu</p>
				</div>
			</div>
			<div className="border-small border-gray-500 border-opacity-30 px-4 py-10">
				<div className="flex justify-between mb-4">
					<h1 className="text-3xl font-medium">Thông tin cá nhân</h1>
					<div>
						<ButtonPrimary className="py-3 px-4 rounded-full before:rounded-full after:rounded-full">
							Cập nhật
						</ButtonPrimary>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex gap-6">
						<InputBraille
							value={surname}
							setValue={setSurname}
							nameLabel="Họ"
							type="text"
						/>
						<InputBraille
							value={surname}
							setValue={setSurname}
							nameLabel="Tên đệm"
							type="text"
						/>
						<InputBraille
							value={surname}
							setValue={setSurname}
							nameLabel="Tên"
							type="text"
						/>
					</div>
					<div className="flex gap-6">
						<InputBraille
							value={surname}
							setValue={setSurname}
							nameLabel="Giới tính"
							type="text"
						/>
						<InputBraille
							value={surname}
							setValue={setSurname}
							nameLabel="Ngày sinh"
							type="date"
						/>
						<InputBraille
							value={surname}
							setValue={setSurname}
							nameLabel="Số điện thoại"
							type="text"
						/>
					</div>
					<div className="flex gap-6">
						<InputBraille
							value={surname}
							setValue={setSurname}
							nameLabel="Email"
							type="email"
							className="w-2/3"
						/>
						<InputBraille
							value={surname}
							setValue={setSurname}
							nameLabel="Mã bưu chính"
							type="text"
							className="w-1/3"
						/>
					</div>
					<div className="flex gap-6">
						<InputBraille
							value={surname}
							setValue={setSurname}
							nameLabel="Địa chỉ"
							type="text"
							className="w-full"
						/>
					</div>
					<div className="flex gap-6">
						<InputBraille
							value={surname}
							setValue={setSurname}
							nameLabel="Tỉnh/Thành phố"
							type="text"
						/>
						<InputBraille
							value={surname}
							setValue={setSurname}
							nameLabel="Quận/Huyện"
							type="text"
						/>
						<InputBraille
							value={surname}
							setValue={setSurname}
							nameLabel="Xã/Phường"
							type="text"
						/>
					</div>
				</div>
			</div>
			<div className="border-small border-gray-500 border-solid border-opacity-30 px-4 py-10">
				<div className="flex justify-between mb-4">
					<h1 className="text-3xl font-medium">
						Thông tin ngân hàng
					</h1>
					<div>
						<ButtonPrimary className="py-3 px-4 rounded-full before:rounded-full after:rounded-full">
							Cập nhật
						</ButtonPrimary>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex">
						<InputBraille
							value={surname}
							setValue={setSurname}
							nameLabel="Số tài khoản ngân hàng"
							type="text"
							className="w-full"
						/>
					</div>
					<div className="flex">
						<InputBraille
							value={surname}
							setValue={setSurname}
							nameLabel="Tên ngân hàng"
							type="text"
							className="w-full"
						/>
					</div>
					<div className="flex">
						<InputBraille
							value={surname}
							setValue={setSurname}
							nameLabel="Chi nhánh ngân hàng"
							type="text"
							className="w-full"
						/>
					</div>
					<div className="flex">
						<InputBraille
							value={surname}
							setValue={setSurname}
							nameLabel="Tên chủ tài khoản"
							type="text"
							className="w-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PersonalInformation;
