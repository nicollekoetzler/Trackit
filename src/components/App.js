import "../assets/css/reset.css";
import "../assets/css/style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import UserContext from "../contexts/UserContext";

import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaHabitos from "./TelaHabitos";
import TelaHoje from "./TelaHoje";
import TelaHistorico from "./TelaHistorico";
// import Header from "./Layouts/Header";
// import Bottom from "./Layouts/Bottom";


export default function App(){
    const [infosUsuario, setInfosUsuario] = useState({});
    
    return(
        <UserContext.Provider value={{infosUsuario, setInfosUsuario}} >
            <BrowserRouter>
                {/* <Header /> */} 
                {/* <Bottom /> */}
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/habitos" element={<TelaHabitos />} />
                    <Route path="/hoje" element={<TelaHoje />} />
                    <Route path="/historico" element={<TelaHistorico />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}