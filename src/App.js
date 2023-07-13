import './App.css'; //Importa el estilo principal para todas las páginas
import React from "react";
//Página de registro e inicio de sesión
/*import Login from "./pantallas/login-register/login";
import Register from "./pantallas/login-register/register";

//Páginas para Alumno
import PAlumno from './pantallas/paginaprincipal/pralumno';
import AlumnoCitas from "./pantallas/citas/alumnocitas"; //Sin citas reservadas
import AlumnoCitas2 from './pantallas/citas/alumnocitas2';
import CitasPasadas from "./pantallas/citas/citaspasadas";
import HorarioFecha from './pantallas/selehorariofecha/AppHorarioFecha';
import HorarioAlumno from './pantallas/selehorarioalumno/HorarioAlumno';

//Páginas para Docente
import PDocente from './pantallas/paginaprincipal/prdocente';
import DocenteCitas from './pantallas/citas/docentecitas';
import Calificaciones from './pantallas/calificaciones/calificaciones';
import HorarioDocente from './pantallas/selehorariodocente/HorarioDocente';

//Páginas para Alumno y Docente
import MiPerfil from "./pantallas/perfil/Interfaz";*/

function App() {
  return (
    <div className="App">
      <HorarioDocente/>
    </div>
  );
}

export default App;
