
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

const Index = () => {
	return (
		<div className="w-full m-auto">
			<Header/>
			{/* Product detail */}
			<Outlet/>
			{/* Footer */}
			<Footer/>
		</div>
	);
};

export default Index;
