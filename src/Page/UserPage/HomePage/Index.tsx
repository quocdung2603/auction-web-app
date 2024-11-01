
import Product from "../../../Assets/Image/User/ProductDetail/Product.png";
import Next from "../../../Assets/Image/User/ProductDetail/Next.png";
import Back from "../../../Assets/Image/User/ProductDetail/Back.png";
import Time from "../../../Assets/Image/User/ProductDetail/Time.png";
import Bill from "../../../Assets/Image/User/ProductDetail/Bil.png";
import Locationn from "../../../Assets/Image/User/ProductDetail/Location.png";

const Index = () => {
	return (
		<>
			{/* Product detail */}
			<div className="max-w-[1148px] mx-auto mt-10">
				<div>
					<p className="font-bold">
						Home/Assets/SecretBallot/Request
					</p>
					<div className="w-[90%] mx-auto flex mt-4">
						{/* Product detail left */}
						<div className="w-[45%] p-4 box-border">
							<div className=" w-full ">
								<img src={Product} alt="" className="w-full" />
							</div>
							<div className="flex justify-between items-center mt-4 ">
								<img
									src={Back}
									alt=""
									className="w-8 h-8 cursor-pointer"
								/>
								<div className="flex gap-8">
									<img
										src={Product}
										alt=""
										className="w-20 h-20 cursor-pointer"
									/>
									<img
										src={Product}
										alt=""
										className="w-20 h-20 border-2 border-primary cursor-pointer"
									/>
									<img
										src={Product}
										alt=""
										className="w-20 h-20 cursor-pointer"
									/>
								</div>
								<img
									src={Next}
									alt=""
									className="w-8 h-8 cursor-pointer"
								/>
							</div>
						</div>
						{/* Product detail right */}
						<div className="w-[55%]  p-4 box-border">
							<div className="bg-gray-100 bg-opacity-40 p-4 ">
								<div className="w-full flex justify-end">
									<button className="bg-primary px-8 py-2 rounded-3xl text-white">
										Add
									</button>
								</div>

								<div className="flex flex-col gap-2">
									<h1 className=" text-[2rem] font-bold">
										The King's Assets
									</h1>
									<p className="text-[0.8rem]">
										COMMING SOON
									</p>
									<p>
										Sales/Lot Type: auction by secret ballot
									</p>
								</div>
								<div className="flex flex-col gap-4">
									<div className="flex items-center mt-6 gap-2">
										<img
											src={Time}
											alt=""
											className="w-8"
										/>
										<span>Time left : 22/12/2201</span>
									</div>
									<div className="flex items-center gap-2">
										<img
											src={Bill}
											alt=""
											className="w-8"
										/>
										<span>Starting Bil : 1000$</span>
									</div>
									<div className="flex items-center gap-2">
										<img
											src={Locationn}
											alt=""
											className="w-8"
										/>
										<span>Location : NYC, US</span>
									</div>
								</div>
								<div className="w-full flex justify-center mt-8">
									<button className="bg-primary px-8 py-2 rounded-3xl text-white">
										Register
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Product Describe */}
			<div className="max-w-[1148px] mx-auto">
				<div className="bg-primary px-12 py-4">
					<h1 className="text-[2rem] font-medium text-white">
						Desciption
					</h1>
					<div className="mt-4 bg-white p-8 flex flex-col gap-6">
						<p className="text-center">
							Welcome to the detailed overview of the assets held
							by His Majesty the King. The following sections
							provide a comprehensive look into the wealth,
							properties, and valuable possessions that constitute
							the royal estate. This information reflects the
							grandeur and historical significance of the
							monarchy's holdings.
						</p>
						<h3 className="text-[1.2rem] font-bold">
							Introduction
						</h3>
						<p>
							The king's assets are a testament to the enduring
							legacy and cultural heritage of the monarchy.
							Spanning various categories, these assets include
							real estate, artworks, historical artifacts,
							financial investments, and more. Each asset not only
							holds monetary value but also represents the rich
							history and tradition of the kingdom.
						</p>
						<h3 className="text-[1.2rem] font-bold">Detail</h3>
						<p>
							The king's assets are a testament to the enduring
							legacy and cultural heritage of the monarchy.
							Spanning various categories, these assets include
							real estate, artworks, historical artifacts,
							financial investments, and more. Each asset not only
							holds monetary value but also represents the rich
							history and tradition of the kingdom.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Index;
