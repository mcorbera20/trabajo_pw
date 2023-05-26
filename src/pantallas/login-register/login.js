import React from "react";
import "./login.css";


export default function Login() {
    return(
        <div className="pantallalogin">
            <div className="titulo">
                <h1>Sistema de Citas para Atención a Estudiantes</h1>
            </div>

            <div className="contenidologin">
                <table align="center">
                    <tbody>
                        <tr>
                            <td colSpan={3}>
                                <input className="caja" type="text" name="User" id="User" placeholder="Usuario o Correo"/>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={3}>
                                <input className="caja" type="text" name="passw" id="passw" placeholder="Password"/>
                            </td>
                        </tr>
                        
                        <tr>
                            <td colSpan={3}>
                                <p>Registro de nuevo usuario - Olvidé mi contraseña</p>
                            </td>
                        </tr>
        
                        <tr>
                            <td>
                                <input className="salir" type="submit" value="Salir" />
                            </td>

                            <td>
                                <input className="entrar" type="submit" value="Ingresar" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}