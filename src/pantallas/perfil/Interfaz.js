import React, { useState } from 'react';
import './Perfil.css';
import "../estiloprincipal/estiloprincipal.css";
import icon from './imagenes/raya.png'
import persona from './imagenes/persona.png';
import perfil from './imagenes/perfil.png'


function EstiloPrincipal(){
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
              <li><button className="btnbanner" >Horarios</button></li>
            </ul>
          </div>
          
          <div className="Version">
            <p>SAC v1.0.1-alpha</p>
          </div>
        </div>
      </div>

    </div>

  )
}


function Conte(){
  return(
    <div className="content">
      <p>Mi Perfil</p>
      <button id="guardar-btn">Guardar</button>
      <div ></div>
    </div>
  );
}

function InfoPerso() {
  return (
    <div className="InfPer">
      <p>Información Personal</p>
      <table className="tabla-info">
          <tr>
              <td><input id="nombre" type="text" placeholder="Nombres"/></td>
              <td><input id="ape" type="text" placeholder="Apellidos"/></td>
              <td><input id="docu" type="number" placeholder="Tipo de Documento"/></td>
          </tr>

          <tr>
              <td><input id="rol" type="text" placeholder="Rol"/></td>
              <td></td>
              <td><input id="numero" type="number" placeholder="Número"/></td>
          </tr>

      </table>

      <div>
        <img src={perfil} className="perfil-image" alt="imagen-perfil"></img>
        <button id="foto-btn">Adjuntar foto</button>
      </div>
    </div>
  );
}


const DatosPersonalesInterfaz = () => {
  const [VUsuario, setVUsuario] = useState('');
  const [VContrasenia, setVContrasenia] = useState('');
  const [VNContrasenia, setVNContrasenia] = useState('');
  const [VRContrasenia, setVRContrasenia] = useState('');


  const handleVUsuarioChange = (event) => {
      setVUsuario(event.target.value);
    };
  
  const handleVContrasenia = (event) => {
      setVContrasenia(event.target.value);
    };
  const handleVNContrasenia = (event) => {
      setVNContrasenia(event.target.value);
    };

  const handleVRContrasenia = (event) => {
      setVRContrasenia(event.target.value);
    };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar alguna acción con los datos ingresados
    console.log('Usuario', VUsuario);
    console.log('Contraseña', VContrasenia);
    console.log('Nueva Contraseña', VNContrasenia);
    console.log('Repetir Contraseña', VRContrasenia);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="dat">
        <table className="tabla-cuenta">
          <tr>
            <td><input type="text" name="usuario" value={VUsuario} onChange={handleVUsuarioChange} placeholder="Usuario" /></td>
          </tr>

          <tr>
            <td><input type="text" name="contrasenia" value={VContrasenia} onChange={handleVContrasenia} placeholder="Contraseña"/></td>
            <td><input type="text" name="nueva-contrasenia" value={VNContrasenia} onChange={handleVNContrasenia} placeholder="Nueva Contraseña"/></td>
            <td><input type="text" name="repite-contrasenia" value={VRContrasenia} onChange={handleVRContrasenia} placeholder="Repetir Contraseña"/></td>
          </tr>
        </table>
      </div>
    </form>
  );
};





const ULeftInterfaz = () => {

  const [Universidad, setUniversidad] = useState('');
  const [Carrera, setCarrera] = useState('');

  const handleUniversidadChange = (e) => {
    const value = e.target.value;
    setUniversidad(value);
  };

  const handleChip1Click = () => {
    setUniversidad('Universidad de Lima');
  };

  const handleCarreraChange = (e) => {
    const value = e.target.value;
    setCarrera(value);
  };

  const handleChip2Click = () => {
    setCarrera('Ingenieria de Sistemas');
  }

  return (
    <div className="uni-left">
        <table className="tabla-uni">

          <tr className="F1">
            <span className="search-icon">&#128269;</span>
            <input type="text" value={Universidad} onChange={handleUniversidadChange} placeholder="Universidad"/>
          </tr>

          <tr className="F2">
            <span className="suggestion-chip" onClick={handleChip1Click}>Universidad de Lima</span>
          </tr>
          
          <tr className="F1">
            <span className="search-icon">&#128269;</span>
            <input type="text" value={Carrera} onChange={handleCarreraChange} placeholder="Carrera"/>
          </tr>
          
          <tr className="F2">
            <span className="suggestion-chip" onClick={handleChip2Click}>Ingenieria de Sistemas</span>
          </tr>

        </table>

        <div className ="vertical"></div>

    </div>
  );
};
    
const URightInterfaz = () => {
    const [Curso, setCurso] = useState('');
    const [chips, setChips] = useState([]);
  
    const handleCursoChange = (e) => {
      const value = e.target.value;
      setCurso(value);
    };
  
    /*const handleClearSuggestion = () => {
      setCurso('');
    };*/
  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        if (Curso.trim() !== '') {
          setChips([...chips, Curso.trim()]);
          setCurso('');}}
    };
  
    const handleEliminar = (index) => {
      const AgregaCurso = [...chips];
      AgregaCurso.splice(index, 1);
      setChips(AgregaCurso);
    };
  
    return (
      <div className="uni-right">
        <div>
          <input type="text" value={Curso} onChange={handleCursoChange} onKeyDown={handleKeyDown} placeholder="Agregar Curso"/>
            {/*<button className="clear-suggestion" onClick={handleClearSuggestion}>X</button>*/}
        </div>
        
        {chips.map((chip, index) => (
        <span key={index} className="chip">{chip}
        <button className="delete-chip" onClick={() => handleEliminar(index)}>X</button>
        </span>))}

      </div>
    );
  };

function BtnCancelar(){
    return(
        <button className="btn-Cancelar">Cancelar</button>
    )
}


function UniversidadInterfaz(){
    return(
        <div>
            <ULeftInterfaz/>
            <URightInterfaz/>
            <BtnCancelar/>
        </div>
    )
};  


const PresInterfaz = () => {
  const [VTitulo, setVTitulo] = useState('');
  const [VPresentacion, setVPresentacion] = useState('');

  const handleVTituloChange = (event) => {
      setVTitulo(event.target.value);
    };
  
  const handleVPresentacionChange = (event) => {
      setVPresentacion(event.target.value);
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar alguna acción con los datos ingresados
    console.log('titulo', VTitulo);
    console.log('Presentacion', VPresentacion);
  };


  return (
    <form onSubmit={handleSubmit}>

      <div className="pre">
        <table className="tabla-presentacion">
          <tr>
            <input type="text" name="titulo" value={VTitulo} onChange={handleVTituloChange} placeholder="Titulo" />
          </tr>

          <tr>
            <input type="text" name="presentacion" value={VPresentacion} onChange={handleVPresentacionChange} placeholder="Presentacion"/>
          </tr>
        </table>
      </div>

    </form>
  );
};


function PresentacionInterfaz(){
  return(
    <div>
      <PresInterfaz/>
      <BtnCancelar/>
    </div>
  )
};


const Interfaz = () => {
    const [mostrarInterfaz, setMostrarInterfaz] = useState(false);
    const [tipoInterfaz, setTipoInterfaz] = useState('');
  
    const handleBotonClick = (tipo) => {
      setMostrarInterfaz(true);
      setTipoInterfaz(tipo);
    };
  
    const renderInterfaz = () => {
      
      if (tipoInterfaz === 'universidad') {
        return <UniversidadInterfaz />;
      } 
      else if (tipoInterfaz === 'datosPersonales') {
        return <DatosPersonalesInterfaz />;
      }
      else if (tipoInterfaz === 'presentacion') {
        return <PresentacionInterfaz />;
      }
    };
    
    return (
    <div>
      <div className="datosPerfil">
        <button className="datos-btn" id="datus-btn"  onClick={() => handleBotonClick('datosPersonales')}>Datos Personales</button>
        <button className="datos-btn" id="uni-btn" onClick={() => handleBotonClick('universidad')}>Universidad</button>
        <button className="datos-btn" id="pres-btn" onClick={() => handleBotonClick('presentacion')}>Presentacion</button>
      </div>

      <div>
        {mostrarInterfaz && renderInterfaz()}
      </div>
    </div>
      
    );
  }
  


    function Perfil(){
      return(
        <div>
          <InfoPerso/>
          <Conte/>
          <Interfaz/>
          <EstiloPrincipal/>
        </div>
      );
    };


    export default function MiPerfil(){
      return(
        <div>
          <Perfil/>
          </div>
      );
    }
    