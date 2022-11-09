import React from "react";
import { Row, Col } from "antd";

import "./Mision.scss";

export default function Mision() {
  return (
    <div className="main-mision">
      <div className="main-mision__dark" />
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h2>
            Misión<br />
          </h2>
          <h3>
            Buscamos ser la empresa número uno en la instalación del servio de gas natural en la Provincia de Córdoba. {" "}
            <br />
          </h3>

          <br /> 
          <h2>
            Visión<br />
          </h2>
          <h3>
            Que todos los hogares de la provincia de Córdoba disfruten de gas natural.{" "}
            <br />            
          </h3>
        
          <h2>
            Valores<br />
          </h2>
          <h3>
            Compromiso, eficiencia y efectividad.{" "}
            <br />
          </h3>
          </Col>
        <Col lg={4} />
      </Row>
    </div>
  );
}
