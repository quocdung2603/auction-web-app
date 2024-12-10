

const Notification = () => {
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-1 flexCenter border-r-small">
				<input type="checkbox" />
			</div>
			<div className="border-r-small col-span-6 text-center px-2 py-2 flex gap-2">
				<p className="text-xl font-medium text-gray-500">
					Chào mừng bạn đến với đấu giá online
				</p>
			</div>
			<div className="border-r-small col-span-3 flexCenter">
				<p className="text-sm font-medium">04/12/2024 17:39:53</p>
			</div>
			<div className="border-r-small col-span-2 flexCenter">
				<p className="text-sm text-green-500 font-medium">Đã đọc</p>
			</div>
		</div>
	);
};

export default Notification;
