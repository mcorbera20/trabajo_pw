import React from "react";
import "./register.css";


export default function Register() {
    return(
        <div className="pantallaregister">
            <div className="titulo">
                <h1>Sistema de Citas para Atención a Estudiantes</h1>
                <h1>Página de Registro</h1>
            </div>

            <div className="contenidoregister">
                <table align="center">
                    <tbody>
                        <tr>
                            <td><input className="textbox" type="text" name="correo" id="correo" placeholder="Correo Electronico"/></td>
                            <td> <input className="textbox" type="text" name="passw" id="passw" placeholder="Password"/></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td><input className="textbox" type="text" name="passw2" id="passw2" placeholder="Ingrese Password nuevamente"/></td>
                        </tr>

                        <tr>
                            <td align="left"><b>Datos personales</b></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td><input className="textbox" type="text" name="nombre" id="nombre" placeholder="Nombres"/></td>
                            <td><input className="textbox" type="text" name="apellido" id="apellido" placeholder="Apellidos"/></td>
                        </tr>

                        <tr>
                            <td><input className="textbox" type="text" name="TipoDoc" id="TipoDoc" placeholder="Tipo de Documento"/></td>
                            <td><input className="textbox" type="text" name="NumDoc" id="NumDoc" placeholder="Nro de Documento"/></td>
                        </tr>

                        <tr>
                            <td><input className="textbox" type="text" name="Rol" id="Rol" placeholder="Rol"/></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td align="right"><input className="textoregistrar" type="submit" value="Registrar"/></td>
                        </tr>
                    </tbody>

                </table>
            </div>


        </div>
    )
}