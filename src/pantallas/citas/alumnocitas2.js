import React from "react";
import persona from "./imagenes/persona.png";
import icon from "./imagenes/raya.png";
import "../estiloprincipal/estiloprincipal.css";
import "./alumnocitas2.css"
import ContenidoCitas2 from "./ContenidoCitas2";

export default function AlumnoCitas2() {
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
                            </ul>
                        </div>
                        <div className="Version">
                            <p>SAC v1.0.1-alpha</p>
                        </div>
                    </div>

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
