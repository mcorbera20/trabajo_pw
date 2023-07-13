import React from 'react';
import BarraSuperior from '../components/BarraSuperior';
import BarraLateralAlumno from '../components/BarraLateralAlumno';
import Elegir from "./PerfilComponent";
import Interfaz from "./Interfaz";

function Banner() {
  return (
    <div className="Principal">
      <BarraSuperior/>
      <div className="Inferior">
        <BarraLateralAlumno/>
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