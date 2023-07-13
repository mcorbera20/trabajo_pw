import React from "react";
import BarraSuperior from "../components/BarraSuperior";
import BarraLateralAlumno from "../components/BarraLateralAlumno";
import "./alumnocitas.css"

export default function AlumnoCitas() {
    return (
        <div className="Principal">
            <BarraSuperior/>
            <div className="Inferior">
                <BarraLateralAlumno/>
                <div className="Contenido">
                    <div className="Titulo">
                        <span>Mis Citas</span>
                    </div>
                    <hr/>
                    <p align = "center" className="tituloalumnocitas">Actualmente no tiene citas de Asesoria Reservadas</p>
                    <button id="cita-programar">Programar una cita</button>
                </div>  
            </div>
    </div>
    )
}
