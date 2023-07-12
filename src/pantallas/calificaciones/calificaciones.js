import React from "react";
import BarraLateral from "../components/BarraLateral.js";
import BarraSuperior from "../components/BarraSuperior.js";
import "./calificaciones.css";

export default function Calificaciones() {
    return (
        <div className="Principal">
            <BarraSuperior/>

            <div className="Inferior">
                <BarraLateral/>

                <div className="Contenido">
                    <div className="Titulo">
                        <span>Calificaciones</span>
                    </div>
                    <hr/>

                    <div className="Reviews">
                        <div className="Review" id="1">
                            <table>
                                <tr>
                                    <td className="izq"><p className="numero">1</p></td>
                                    <td><p className="datos">Mario Lopez - 24 de abril de 2024 - 5 estrellas</p></td>
                                </tr>
                                <tr>
                                    <td className="izq"></td>
                                    <td><p className="comentario">"El profesor fue muy claro y supo darme buenos consejos. Muchas gracias!"</p></td>
                                </tr>
                            </table>
                        </div>

                        <div className="Review" id="2">
                            <table>
                                <tr>
                                    <td className="izq"><p className="numero">2</p></td>
                                    <td><p className="datos">Sandra Sanchez - 23 de abril de 2024 - 4.5 estrellas</p></td>
                                </tr>
                                <tr>
                                    <td className="izq"></td>
                                    <td><p className="comentario">"Por lo general estuvo bien, pero algunas cosas no entendí".</p></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                    
            </div>

    </div>              
    )
}
