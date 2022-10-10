import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";

export default function Navbar(){
    const location = useLocation();

    const ativar = (url)=>{
        if(url === location.pathname){
        return"btn btn-primary";
        }
        return "btn btn-outline-primary"
    }
 return(
    <nav>
        <Link to="/" className={ativar('/')}>Inicio</Link>
        <Link to="/listar" className={ativar('/Listar')}>Lista</Link>
        <Link to="/novo" className={ativar('/Novo')}>Novo</Link>
        <Link to="/login" className={ativar('/Login')}>Sair</Link>
    </nav>
 )   
}