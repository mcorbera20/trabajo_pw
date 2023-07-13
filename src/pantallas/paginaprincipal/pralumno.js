import React from "react";
import BarraSuperior from "../components/BarraSuperior";
import BarraLateralAlumno from "../components/BarraLateralAlumno";
import "./pralumno.css"
import Contenidopralumno from "./Contenidopralumno";

export default function PAlumno() {
    return (
        <div className="Principal">
                <BarraSuperior/>
                <div className="Inferior">
                    <BarraLateralAlumno/>
                    <div className="Contenido">
                        <div className="Titulo">
                            <span>Bienvenido, Andrés</span>
                        </div>
                        <hr/>
                        <Contenidopralumno/>
                    </div>       
                </div>
        </div>              
    )
}
