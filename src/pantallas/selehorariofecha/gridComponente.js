import React from 'react';
import {GoTriangleRight } from 'react-icons/go';

export default function gridComponente(props){
    return(

        <div class="grid-item">
        <div class="inner-grid-container-izq">
          <div class="inner-grid-item1">
            <p>{props.nombre}</p>
            </div>
          <div class="inner-grid-item2">
            <p>{props.universidad} - {props.carrera}</p>
            </div>
        </div>
        <div class="inner-grid-container-der">
          <div class="inner-grid-item3"><GoTriangleRight /></div>
        </div>
        </div>
        
    )

}

