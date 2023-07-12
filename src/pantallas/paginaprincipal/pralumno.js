import React from "react";
import BarraSuperior from "../components/BarraSuperior";
import BarraLateral from "../components/BarraLateral";
import "./pralumno.css"
import Contenidopralumno from "./Contenidopralumno";

export default function PAlumno() {
    return (
        <div className="Principal">
                <BarraSuperior/>
                <div className="Inferior">
                    <BarraLateral/>
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
