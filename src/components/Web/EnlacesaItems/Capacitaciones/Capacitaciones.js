import React from "react";
import { Row, Col } from "antd";

import "./Capacitaciones.scss";

export default function Capacitaciones() {
  return (
    <div className="main-capacitaciones">
      <div className="main-capacitaciones__dark" />
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h2>
            Capacitaciones<br />
          </h2>
          <h3>
              La asociación brinda capacitaciones, disertaciones y charlas a toda la comunidad interesada, pero especialmente a los compañeros
              matriculados asociados a la organización. Se busca que el profesional se  mantenga  al día con toda la últimas actualizaciones y 
              herramientas necesarias para su tarea profesional.{" "}
            <br />
            
          </h3>
        </Col>
        <Col lg={4} />
      </Row>
    </div>
  );
}