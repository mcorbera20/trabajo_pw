import "bootstrap/dist/css/bootstrap.min.css";
import icon from "./components/img/icon.png";
import persona from "./components/img/persona.png";
import "./styles/Principal.css"; 
import Citas from "./components/Citas";
import "./styles/docente.css";
import "./styles/schedule.css";
import "./styles/course.css";
import React from "react";

import "../estiloprincipal/estiloprincipal.css";

export default function HorarioAlumno() {
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
                                <li><button className="btnbanner" >Citas</button></li>
                            </ul>
                        </div>
                        <div className="Version">
                            <p>SAC v1.0.1-alpha</p>
                        </div>
                    </div>

                    <div className="Contenido">
                        <div className="Titulo">
                            <Citas/>
                        </div>
                        <hr/>
                        
                    </div>
                        
                </div>

        </div>              

    )

}