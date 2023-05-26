import React, { useState } from 'react';
import './Perfil.css';

const BusqInterfaz = () => {
    const [VBusqueda, setVBusqueda] = useState('');

    const handleVBusqueda = (event) => {
        setVBusqueda(event.target.value);
      };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('busqueda', VBusqueda);
    };
  

    return (
      <form onSubmit={handleSubmit}>

        

        <table class="busq-nombre">
          <tr><input type="text" name="busqueda" value={VBusqueda} onChange={handleVBusqueda} placeholder="Busqueda" /></tr>
          </table>
          <div class="Busqueda">
      
      <p>Ingrese nombre de docente, universidad o curso</p>
      
  </div>
      </form>
    );
  };

  export default function Nombre(){
    return(
      <div>
        <BusqInterfaz/>

      </div>
    )
  };