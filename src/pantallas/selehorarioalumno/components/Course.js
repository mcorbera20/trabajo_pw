import {Component} from "react";

const cursos = ["curso 1", "curso 2","curso 3"];

export class Course extends Component{
    
render(){ 
  return (
    <div className="list-container">
      {cursos.map((elemento, index) => (
        <div key={index} className="list-course">
          <b>{elemento}</b>
        </div>
      ))}
    </div>       
    );
  }
}

export default Course;