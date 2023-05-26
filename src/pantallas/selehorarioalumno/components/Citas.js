
import Docente from "./Docente";
import Schedule from "./Schedule";

 

function Citas(){ 
  return (
    
    <div>
      <div class="container">
        <br/>
        <h1>Citas</h1> 
        
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
