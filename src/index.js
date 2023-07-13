import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//Imports de las páginas
import PDocente from './pantallas/paginaprincipal/prdocente';
import MiPerfil from './pantallas/perfil/Interfaz';
import Calificaciones from './pantallas/calificaciones/calificaciones';
import DocenteCitas from './pantallas/citas/docentecitas';
import HorarioDocente from './pantallas/selehorariodocente/HorarioDocente';

import PAlumno from './pantallas/paginaprincipal/pralumno';
import AlumnoCitas from './pantallas/citas/alumnocitas'; //Sin citas reservadas

//Router del Docente
const routerDocente = createBrowserRouter([
  { 
    path: '/',
    element: <PDocente/>,
    errorElement: <h1>Error</h1>
  },{
    path: '/perfil',
    element: <MiPerfil/>
  },{
    path: '/citas',
    element: <DocenteCitas/>
  },{
    path: '/horarios',
    element: <HorarioDocente/>
  },{
    path: '/calificaciones',
    element: <Calificaciones/>
  }
]);

//Router del Alumno
const routerAlumno = createBrowserRouter([
  { 
    path: '/',
    element: <PAlumno/>,
    errorElement: <h1>Error</h1>
  },{
    path: '/perfil',
    element: <MiPerfil/>
  },{
    path: '/citas',
    element: <AlumnoCitas/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerAlumno}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
