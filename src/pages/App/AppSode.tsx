import Global from "../../global/Global"
import '../../App.css'
import { Registration } from "../../pages/registry"
import { Route, Routes } from "react-router-dom"
import { Login } from "../../pages/login"
import { Home } from "../home"
import { NotFound } from "../NotFound"


const  App = () => {

  return <>
    <Global />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Registration />} />
    </Routes>
  </>
}

export default App
