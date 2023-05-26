import React from "react";
import icon from "./Imagenes/icon.png";
import persona from "./Imagenes/persona.png";
import "../estiloprincipal/estiloprincipal.css";
import "./calificacionesfinal.css"

export default function CalificacionesFinal() {
    return (
        <div className="Principal">

                <div className="Superior">
                    <img src={icon} alt="Icono" className="imagen-izq"/>
                    <h1>Atención de citas</h1>
                    <img src={persona} alt="Perfil" className="imagen-der"/>
                </div>

                <div className="Inferior">
                    
                    <div className="Lateral">
                        <div className="Pags">
                            <ul>
                                <li><button className="btnbanner" >Principal</button></li>
                                <li><button className="btnbanner" >Perfil</button></li>
                                <li><button className="btnbanner" >Horarios</button></li>
                                <li><button className="btnbanner" >Calificaciones</button></li>
                            </ul>
                        </div>
                        <div className="Version">
                            <p>SAC v1.0.1-alpha</p>
                        </div>
                    </div>


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
