import React from "react";
import persona from "./imagenes/persona.png";
import icon from "./imagenes/raya.png";

import profesor from "./imagenes/profesor.png";

export default function ContenidoCitas () {
    return (
        <table class="cuadro">
        <tr>
            <td rowspan="2">
                <div class="circulo">
                    <span class="letra">JL</span>
                </div>
            </td>

            <td align= "left" valign ="bottom">
                <span>Juan Lopez</span>
            </td>
        </tr>

        <tr>
            <td align= "left" valign ="top">
                <span>Mg. Ingenieria de Software</span>
            </td>
        </tr>

        <tr>
            <td colspan="2" bgcolor="lightgray" width= "314px" height="140px">
                <img src={profesor} class="profe"></img>

                
            </td>
        </tr>

        <tr>
            <td align="left" colspan="2">
                <div class="fecha" valign ="bottom">
                    Lunes 24 de abril del 2023 - 08:00 am
                </div>
            </td>
        </tr>
        <tr>
            <td align="left" colspan="2" valign ="top">
                <div class="curso">
                    Curso: Programación Web
                </div>      
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <div class="link">
                    <p align="left"><a href="#">Enlace de Zoom</a></p>
                    <p>No Calificado</p>
                </div>
            </td>
        </tr>

        <tr>
            <td colspan="2" align ="right" >
                <button id="boton-cancelar">Calificar</button>
            </td>
        </tr>

    </table>

    )
}