import "./styles/horariodocente.css";
import "./styles/hcard.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Hcard } from "./components/Hcard";
import React, { useState } from "react";

export function HorarioDocente() { 
    const [DataFormulario, setDataFormulario] = useState({ 
      day: "",
      horainicio: "",
      horafin: "",
      enlace: "",
    });
  
    const handleInput = (Event) => {
      const { name, value } = Event.target;
      setDataFormulario((prevDataFormulario) => ({
        ...prevDataFormulario,
        [name]: value,
      }));
    };
  
    const handleAgregarClick = () => { 
      console.log(DataFormulario);
      setDataFormulario({
        day: "",
        horainicio: "",
        horafin: "",
        enlace: "",
      });
    };
  
    return (
      <Container className="container">
        <Row>
          <Col>
            <Form.Group className="formulario">
              <Form.Label className="label">dia de semana</Form.Label>
              <Form.Control
                className="control"
                type="text"
                placeholder="lunes"
                name="day"
                value={DataFormulario.day}
                onChange={handleInput}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="formulario">
              <Form.Label className="label">Hora Inicio</Form.Label>
              <Form.Control
                className="control"
                type="text"
                placeholder="7:00 am"
                name="horainicio"
                value={DataFormulario.horainicio}
                onChange={handleInput}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="formulario">
              <Form.Label className="label">Hora Fin</Form.Label>
              <Form.Control
                className="control"
                type="text"
                placeholder="9:00 am"
                name="horafin"
                value={DataFormulario.horafin}
                onChange={handleInput}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="formulario">
              <Form.Label className="label">Enlace de sesion</Form.Label>
              <Form.Control
                className="control"
                type="text"
                placeholder="URL"
                name="enlace"
                value={DataFormulario.enlace}
                onChange={handleInput}
              />
            </Form.Group>
          </Col>
          <Col id="btnAgregar">
            <Button className="btnAgregar" onClick={handleAgregarClick}>
              Agregar
            </Button>
          </Col>
        </Row>
        <br></br>
  
        <Hcard
          cont="1"
          day="Lunes"
          horainicio="07:00 pm"
          horafin="08:00 pm"
        />
        <Hcard
          cont="2"
          day="Martes"
          horainicio="10:00 am"
          horafin="11:00 am"
        />
        <Hcard
          cont="3"
          day="Miercoles"
          horainicio="06:00 pm"
          horafin="08:00 pm"
        />
      </Container>
    );
  }
