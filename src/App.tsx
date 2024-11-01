import { Route, Routes } from "react-router-dom"
import LayoutAdmin from "./Layout/AdminLayout/LayoutAdmin"
import { AdminRoute } from "./Routes/adminRoute"

function App() {
  return (
    <Routes>
      <Route path="admin" element={<LayoutAdmin />}>
        {
          AdminRoute.map((route, index) => {
            return (
              <Route key={index + 0} path={route.path} element={<route.element />} />
            )
          })
        }
      </Route>
    </Routes>
  )
}

export default App
