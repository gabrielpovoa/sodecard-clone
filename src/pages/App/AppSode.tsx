import Global from "../../global/Global"
import '../../App.css'
import { Route, Routes } from "react-router-dom"
import { Home } from "../home"
import { Login } from "../../pages/login"
import { Registration } from "../../pages/registry"
import { User } from "../Client"
import { NotFound } from "../NotFound"


const  App = () => {

  return <>
    <Global />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="/cadastro" element={<Registration />} />
    </Routes>
  </>
}

export default App
