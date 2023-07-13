import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export function Hcard(props){
    return(
        <Card className="card">
            <Card.Body className="card-row">
                <Row className="align-items-center">
                    <Col className="col-cont" md={1}>
                        {props.cont}
                    </Col>
                    <Col md={11}>
                        {props.day} de {props.horainicio} a {props.horafin}
                    </Col>
                    <Col>
                    <Button className="btn-exit border-0" style={{ color: "black", backgroundColor: "#FEF7FF" }}>
                        <b>X</b>
                    </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}