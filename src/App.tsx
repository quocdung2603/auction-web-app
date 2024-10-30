import { Route, Routes } from "react-router-dom"
import LayoutAdmin from "./Layout/AdminLayout"
import { adminRoute } from "./Routes/adminRoute"

function App() {

  return (
  <Routes>
    <Route path="admin" element={<LayoutAdmin/>}>
          {
            adminRoute.map((route,index)=>{
              return (
                <Route key={index} path={route.path} element={<route.element/>}/>
              )
            })
          }
        </Route>
  </Routes>
  )
}

export default App
