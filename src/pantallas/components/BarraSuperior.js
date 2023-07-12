import icono from "../../imagenes/icono.png";
import persona from "../../imagenes/persona.png";

export default function BarraSuperior(){
   return(
      <div className="Superior">
         <img src={icono} alt="Icono" className="imagen-izq"/>
         <h1>Atención de citas</h1>
         <img src={persona} alt="Perfil" className="imagen-der"/>
      </div>
   )
}