import { Route, Routes, useLocation } from "react-router-dom";
import LayoutAdmin from "./Layout/AdminLayout/LayoutAdmin";
import LayoutClient from "./Layout/ClientLayout/LayoutClient";
import { AdminRoute } from "./Routes/AdminRoute";
import { UserRoute } from "./Routes/UserRoute";
import { useEffect } from "react";
import PrivateRoute from "./Common/Context/PrivateRoute";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="" element={<LayoutClient />}>
        {UserRoute.map((route, index) => {
          return (
            <Route
              key={index + 0}
              path={route.path}
              element={<route.element />}
            />
          );
        })}
      </Route>
      <Route
        path="admin"
        element={
          <PrivateRoute>
            <LayoutAdmin />
          </PrivateRoute>
        }
      >
        {AdminRoute.map((route, index) => {
          return (
            <Route
              key={index + 0}
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
