import React from "react";
import BarraSuperior from "../components/BarraSuperior";
import BarraLateralDocente from "../components/BarraLateralDocente";
import "./calificaciones.css";

//Por ahora son 2 reviews individuales, pero al final debe ser sólo un componente que saque diferente información.
import Review from "./Review";
import Review2 from "./Review2";


export default function Calificaciones() {
    return (
        <div className="Principal">
            <BarraSuperior/>
            <div className="Inferior">
                <BarraLateralDocente/>
                <div className="Contenido">
                    <div className="Titulo">
                        <span>Calificaciones</span>
                    </div>
                    <hr/>
                    <div className="Reviews">
                        <Review/>
                        <Review2/>
                    </div>
                </div>
                    
            </div>

    </div>              
    )
}
