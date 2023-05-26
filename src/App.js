import logo from './logo.svg';
import './App.css';
import React from "react";
//import PGDocente from "./components/PaginaPrincipalDocente/TopAddBar";
//import PGPRUEBA from './components/PaginaPrincipalDocente/prueba';
//import PaginaDOC from './components/PaginaPrincipalDocente/paginadocente';
//import CitasPasadas from './components/PaginaPrincipalDocente/alumnocitaspasadas';
//import CitasPasadasFinal from './components/PaginaPrincipalDocente/citaspasadasfinal';
import Login from "./pantallas/login-register/login";
import Register from "./pantallas/login-register/register";
import CitasPasadasFinal from "./pantallas/citas/citaspasadasfinal";
import AlumnoCitas from "./pantallas/citas/alumnocitas";
import MiPerfil from "./pantallas/perfil/Interfaz"
import AlumnoCitas2 from './pantallas/citas/alumnocitas2';
import DocenteCitas from './pantallas/citas/docentecitas';
import CalificacionesFinal from './pantallas/calificaciones/calificacionesfinal';
import PDocente from './pantallas/paginaprincipal/prdocente';
import PAlumno from './pantallas/paginaprincipal/pralumno';
import HorarioFecha from './pantallas/selehorariofecha/AppHorarioFecha';
import HorarioAlumno from './pantallas/selehorarioalumno/HorarioAlumno';

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}


export default App;
