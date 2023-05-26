import React, { useState } from 'react';
import './Perfil.css';
import Nombre from './btnNombre';
import Fecha from './btnFecha';

const Interfaz = () => {
    const [mostrarInterfaz, setMostrarInterfaz] = useState(false);
    const [tipoInterfaz, setTipoInterfaz] = useState('');
  
    const handleBotonClick = (tipo) => {
      setMostrarInterfaz(true);
      setTipoInterfaz(tipo);
    };
  

    const renderInterfaz = () => {
      

      if (tipoInterfaz === 'nombre') {
        return <Nombre />;
      }
      else if (tipoInterfaz === 'fecha') {
        return <Fecha />;
      }

    };
    
    return (
        <div>
      <div class="cambio">
        <button id="nombre-btn" onClick={() => handleBotonClick('nombre')}>Por nombre</button>   
        <button id="fecha-btn" onClick={() => handleBotonClick('fecha')}>Por fecha</button> 
      </div>

      <div >
        {mostrarInterfaz && renderInterfaz()}
      </div>
    </div>
      
    );}
  
  export default Interfaz;