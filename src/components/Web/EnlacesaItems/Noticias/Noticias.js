import React from "react";
import { Row, Col } from "antd";

import "./Noticias.scss";

export default function Noticias() {
  return (
    <div className="main-noticias">
      <div className="main-noticias__dark" />
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h2>
            Noticias relevantes al oficio<br />
          </h2>
          <h3>
            Buscamos noticias relevantes al oficio... en la instalación del servio de gas natural en la Provincia de Córdoba. {" "}
            <br />
          </h3>

          <br /> 
          <h2>
            Noticia 1<br />
          </h2>
          <h3>
          En el mes de Noviembre se realizaran los siguientes eventos.

          26 Noviembre, se celebrará la fiesta de fin de año 2022 , para lo cual quedan invitados todos los asociados.{" "}
            <br />            
          </h3>
        
          <h2>
            Noticia 2<br />
          </h2>
          <h3>
            Mes de Diciembre.
            El 10 de Diciembre se hara entrega de los paquetes navideños a los asociados, favor de retiralos. {" "}
            <br />
          </h3>
          </Col>
        <Col lg={4} />
      </Row>
    </div>
  );
}
