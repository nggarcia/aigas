import React from "react";
import { Row, Col } from "antd";

import "./Matriculados.scss";

export default function Matriculados() {
  return (
    <div className="main-matriculados">
      <div className="main-matriculados__dark" />
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h2>
            Buscador de Matriculados por zona<br />
          </h2>
          <h3>
            Buscador... en desarrollo. {" "}
            <br />
          </h3>

          
          </Col>
        <Col lg={4} />
      </Row>
    </div>
  );
}
