import React from "react";
import BarraSuperior from "../components/BarraSuperior";
import BarraLateralDocente from "../components/BarraLateralDocente";
import "./prdocente.css"
import Contenidoprdocente from "./Contenidoprdocente";

export default function PDocente() {
    return (
        <div className="Principal">
            <BarraSuperior/>
            <div className="Inferior">
                <BarraLateralDocente/>
                <div className="Contenido">
                    <div className="Titulo">
                        <span>Bienvenido, Profesor Juan!</span>
                    </div>
                    <hr/>
                    <Contenidoprdocente/>
                </div>
            </div>
        </div>              
    )
}
