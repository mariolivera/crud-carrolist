
import Navbar from "./componets/Navbar"
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom"
import Home from "./componets/pages/Home";
import Listar from "./componets/pages/Listar";
import Novo from "./componets/pages/Novo";
import Login from "./componets/pages/Login";

export default function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/listar" element={<Listar/>}/>
          <Route path="/novo" element={<Novo/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
);
}
