import React from "react";
import BarraSuperior from "../components/BarraSuperior";
import BarraLateralDocente from "../components/BarraLateralDocente";
import "./docentecitas.css"
import ContenidoDocenteCitas from "./ContenidoDocenteCitas";

export default function DocenteCitas() {
    return (
        <div className="Principal">
            <BarraSuperior/>
            <div className="Inferior">
                <BarraLateralDocente/>
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
                    <ContenidoDocenteCitas/>
                </div>  
            </div>
        </div>
    )
}
