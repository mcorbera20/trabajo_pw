import {Component} from "react";
import Form from 'react-bootstrap/Form';

const cursos = ["curso 1", "curso 2","curso 3"];
const horarios = ["horario 1", "horario 2","horario 3"];

export class Schedule extends Component{

    MostrarReserva(val_horario) {
        const fecha = document.getElementById("dia");
        const val_fecha = fecha.value;
        const curso = document.getElementById("course");
        const val_curso = curso.value;

        alert("Reserva de cita" + "\n" +
         "Usted ha reservado la cita exitosamente para el " + val_fecha + 
         " a las "+ val_horario + " para el curso " + val_curso +". Encontrara el detalle en su pagina de citas.");
    };
    
    render(){
        return (
            <div class="container">

                <div class="row">

                    <div class="col">
                        
                            <Form.Label>Ingrese una Fecha</Form.Label>
                            <Form.Control type = "date" id="dia"></Form.Control>  
                        
                        <div class="footer" id="footer-form">
                            DD/MM/YY
                        </div>
                    </div>
                    
                    
                    <div class="col">
                    
                        <Form.Label>Curso de Interés</Form.Label>
                        <Form.Control as="select" id="course">
                        
                            <option value="" disabled selected>
                                Elija un curso disponible
                            </option>
                            {cursos.map((curso, index) => (
                                <option key={index} value={curso}>
                                {curso}
                                </option>
                            ))}
                        </Form.Control>
                   
                    </div>
                </div>
               
               <br/>
               
                <div class="row">
                <div className="list-container">

                    {horarios.map((elemento, index) => (
                    <button onClick={this.MostrarReserva.bind(this,elemento)} key={index} className="style-schedule" id="horario">
                        <b>{elemento}</b>
                    </button>
                 ))}
                 
                </div>
                </div>

            </div>
        );
    }
}

export default Schedule;