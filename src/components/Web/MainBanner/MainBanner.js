import React from "react";
import { Row, Col } from "antd";

import "./MainBanner.scss";

export default function MainBanner() {
  return (
    <div className="main-banner">
      <div className="main-banner__dark" />
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h2>
            Asociación de gasistas y sanitaristas de Córdoba<br />
          </h2>
          <h3>
         Estimado amigo gasista, ahora estamos mas cerca tuyo. A través de la asociación, estarás acompañado y 
         actualizado con las herramientas necesarias para tu tarea profesional.{" "}
            <br />
            
          </h3>
        </Col>
        <Col lg={4} />
      </Row>
    </div>
  );
}
