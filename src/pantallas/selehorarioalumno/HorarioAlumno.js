import React from "react";
import BarraSuperior from "../components/BarraSuperior";
import BarraLateralAlumno from "../components/BarraLateralAlumno";
import "bootstrap/dist/css/bootstrap.min.css";
import Citas from "./components/Citas";
import "./styles/docente.css";
import "./styles/schedule.css";
import "./styles/course.css";

export default function HorarioAlumno() {
    return (
        <div className="Principal">
            <BarraSuperior/>
            <div className="Inferior">
                <BarraLateralAlumno/>
                <div className="Contenido">
                    <div className="Titulo">
                        <h1>Citas</h1> 
                    </div>
                    <hr/>
                    <Citas/>
                </div>            
            </div>
        </div>
    )
}