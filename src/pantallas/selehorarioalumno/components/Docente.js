import {Component} from "react";
import Course from "./Course";
import imagen from "./img/docente.jpg";
import inicial from "./img/inicial-doc.png";


export class Docente extends Component{

    render(){
        return (
            <div class="container" id="doc-container"> 
                <hr id="encabezado"/>
                <div id="left">
                    
                    <div class="col">

                        <p id="forma">
                        <img src= {inicial} alt="inicial" class="rounded-circle" id="logo"/>
                            <div>
                            <div><b>Profesor Juan López</b></div>
                            <div id="doc-tit">Magister en Ingeniería de Software</div>
                            </div>
                        </p>
                            
                    </div>

                </div>
                
                <div class="row align-items-start">

                        <div class="col">
                        <img src={imagen} alt="docente" class="img-thumbnail" id="doc-pic"/>
                        </div>
                        <div class="col" id="descrip-doc">
                        Candidato a Dr. en Matemáticas e Informática de la Universidad de Barcelona, España. 
                        Magíster en Dirección de Tecnologías de Información, Universidad ESAN, Perú. 
                        Master en Gestión de las Tecnologías de la Información, Universitat Ramon Llull, Barcelona, España. 
                        Investigador en temas relacionados al desarrollo y aplicación de herramientas interactivas para la educación. 
                        Director del desarrollo del videojuego 1814: La Rebelión del Cusco. 
                        Miembro profesional del International Game Developers Association (IGDA). 
                        Consultor en proyectos de desarrollo de software, videojuegos y realidad aumentada. 
                        Excoordinador de la Especialidad de Ingeniería Informática. 
                        Excoordinador del Grupo de Investigación Avatar-PUCP y de la Diplomatura de Desarrollo de Videojuegos.
                        
                        </div>
                        

                        <div class="col">
                            
                            Correo electronico
                            <br/>
                            <b><u>jlopez1949@ulima.edu.pe</u></b>
                        </div>
                </div>
                <br/>

                <div  class="row align-items-start">
                    <div class="col" id="left">
                    Cursos
                    </div>  
                    <Course/>
                </div>
                <div class="row align-items-start justify-content-center" >
                      
                </div>   
                <br/>
            </div>
        );
    }
}

export default Docente;