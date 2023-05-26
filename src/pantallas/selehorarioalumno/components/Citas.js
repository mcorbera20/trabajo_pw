
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
          * Las sesiones son de 30 minutos
          
      </div>
      
    </div> 
    
  );
}

export default Citas;
