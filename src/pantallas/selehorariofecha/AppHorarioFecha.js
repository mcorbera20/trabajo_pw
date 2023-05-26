import React from 'react';
import Elegir from "./PerfilComponent";
import persona from "./imagenes/persona.png";
import opc from "./imagenes/raya.png";
import Interfaz from "./Interfaz"


function Banner() {
  return (
    <div className="Principal">
      <div className="Superior">
                  <img src={opc} className="imagen-izq" alt="opc"></img>
                  <h1>Atención de citas</h1>
                  <img src={persona} className="imagen-der" alt="persona"></img>
          </div>
    

    
        <div className="Inferior">
            <div className="Lateral">
                <ul>
                    <li>Principal</li>
                    <li>Perfil</li>
                    <li>Horarios</li>
                </ul>
                <p className="Version">SAC v1.0.1-alpha</p>
                
            </div>
            <div className="Contenido">
                            <div className="Titulo">
                                <p>Reserva de Cita</p>
                            </div>
                            <hr/>
                            <Interfaz/>
                            <Elegir/>
            </div>

            
        </div>

    </div>
      
  );
}

export default function HorarioFecha(){
  return(
    <div>
      <Banner/>
      </div>
  );
}