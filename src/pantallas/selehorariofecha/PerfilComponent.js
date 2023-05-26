import React from 'react';
import './Perfil.css';

import GridComponente from './gridComponente';


  function Opciones(){
    return(
      <div class="grid-container">
        <GridComponente nombre="Felipe Lopez Jimenez" universidad="Universidad de Lima" carrera="Ingenieria de Sistemas" />
        <GridComponente nombre="Felipe Lopez Sánchez" universidad="Universidad de Lima" carrera="Ingenieria Industrial" />
        <GridComponente nombre="Felipe Andrés Lopez" universidad="Universidad de Tacna" carrera="Medicina" />
        <GridComponente nombre="Felipe Lopez" universidad="Universidad de Ingeniería" carrera="Ciencias de la computación" />
      </div>
    );
  }

export default function Elegir(){
  return(
    <div>
      <Opciones/>
    </div>
  );
};

