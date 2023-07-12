import React from "react";
import BarraSuperior from "../components/BarraSuperior";
import BarraLateral from "../components/BarraLateral";
import "./alumnocitas2.css"
import ContenidoCitas2 from "./ContenidoCitas2";

export default function AlumnoCitas2() {
    return (
        <div className="Principal">
            <BarraSuperior/>
            <div className="Inferior">
                <BarraLateral/>
                <div className="Contenido">
                    <div className="Titulo">
                        <span>Mis Citas</span>
                        <button id="prog-cita">Programar una Cita</button>
                    </div>
                    <hr/>

                    <div className="asesorias">
                        <span>Citas de Asesoria Reservadas:</span>
                        <button id="cita-asesoria">Ver citas pasadas</button>
                    </div>
                    <ContenidoCitas2/>
                </div>  
            </div>
        </div>
    )
}
