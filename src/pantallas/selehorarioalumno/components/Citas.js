import Docente from "./Docente";
import Schedule from "./Schedule"; 

function Citas(){ 
  return (
    <div>
      <div class="container">     
        <Docente/>
      </div>

      <div class="container">
        <b>Fechas y horarios disponibles</b>
        <hr/>
        <Schedule/>
        <br/>
        <span>* Las sesiones son de 30 minutos</span>
      </div>
      
    </div> 
    
  );
}

export default Citas;
