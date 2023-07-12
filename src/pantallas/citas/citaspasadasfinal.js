import React from "react";
import BarraSuperior from "../components/BarraSuperior";
import BarraLateral from "../components/BarraLateral";
import "./citaspasadasfinal.css"
import ContenidoCitas from "./ContenidoCitas";

export default function CitasPasadasFinal() {
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
                    <ContenidoCitas/>
                </div>  
            </div>
        </div>
    )
}
