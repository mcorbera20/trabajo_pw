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
          
        <table class="busq-fecha">
          <tr><input type="date"  value={VBusqueda} onChange={handleVBusqueda}  /></tr>
          </table>
      
          <div class="Busqueda">
      
        <p>DD/MM/YYY</p>
      
        </div>
      </form>
    );
  };

  export default function Fecha(){
    return(
      <div>
        <BusqInterfaz/>

      </div>
    )
  };