import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "./Layout/AdminLayout/LayoutAdmin";
import LayoutUser from "./Layout/UserLayout/Index";
import { AdminRoute } from "./Routes/adminRoute";
import { userRoute } from "./Routes/UserRoute";

function App() {
	return (
		<Routes>
			<Route path="" element={<LayoutUser />}>
				{userRoute.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							element={<route.element />}
						/>
					);
				})}
			</Route>
			<Route path="admin" element={<LayoutAdmin />}>
				{AdminRoute.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							element={<route.element />}
						/>
					);
				})}
			</Route>
		</Routes>
	);
}

export default App;
