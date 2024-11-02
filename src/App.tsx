import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "./Layout/AdminLayout/LayoutAdmin";
import LayoutClient from "./Layout/ClientLayout/LayoutClient";
import { AdminRoute } from "./Routes/adminRoute";
import { UserRoute } from "./Routes/UserRoute";

function App() {
	return (
		<Routes>
			<Route path="" element={<LayoutClient />}>
				{UserRoute.map((route, index) => {
					return (
						<Route
							key={index+0}
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
							key={index+0}
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
