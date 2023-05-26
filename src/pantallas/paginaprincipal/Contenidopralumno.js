import React from "react";
import persona from "./imagenes/persona.png";
import icon from "./imagenes/raya.png";

import profesor from "./imagenes/profesor.png";
import imagencita from "./imagenes/imagencita.png"

export default function ContenidoPAlumno(){
    return(
        <div class="citasPDocente">

             <div class="prim">
                 <span>Próximas Citas</span>
             </div>

                 <table class="cuadroPDocente">
                     <tr>
                         <td align="center">
                             <div class="circuloPDocente">
                                 <span class="letraPDocente">A</span>
                             </div>
                         </td>
                         <td class="textosPDocente">
                             <span>Alfonso Carrión</span>
                             <span>18/06/2023 08:00 am</span>
                         </td>
                         <td>
                             <img src={imagencita} class="imagencitaPDocente"></img>
                         </td>
                     </tr>
                 </table>


                 <table class="cuadro2PAlumno">
                                <tr>
                                    <td align="center">
                                        <div class="circuloPDocente">
                                            <span class="letraPDocente">A</span>
                                        </div>
                                    </td>
                                    <td class="textosPDocente">
                                        <span>Alfonso Carrión</span>
                                        <span>18/06/2023 08:00 am</span>
                                    </td>
                                    <td>
                                        <img src={imagencita} class="imagencitaPDocente"></img>
                                    </td>
                                </tr>
                            </table>

        </div>


    )
}