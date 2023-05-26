import React from "react";
import persona from "./imagenes/persona.png";
import icon from "./imagenes/raya.png";
import "../estiloprincipal/estiloprincipal.css";
import "./pralumno.css"
import Contenidopralumno from "./Contenidopralumno";

export default function PAlumno() {
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
                            <span>Bienvenido, Andrés</span>
                        </div>
                        <hr/>
                        <Contenidopralumno/>
                    </div>
                        
                </div>

        </div>              

    )

}
