import React from "react";
import { Row, Col } from "antd";

import "./Eventos.scss";

export default function Eventos() {
  return (
    <div className="main-eventos">
      <div className="main-eventos__dark" />
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h2>
            Eventos<br />
          </h2>
          <h3> 5  DE MARZO DIA DEL GAS <br />
              Por motivo del día del Gas se realizó una charla de capacitación la cual terminó con una merienda 
              para compartir entre los asistentes. Se pudo disfrutar del compañerismo y confraternidad entre los compañeros
              matriculados quienes estuvieron estrechando sus lazos de amistad y pasando una velada inolvidable.{" "}
            <br />
            <br />            
          </h3>


          <h3> 1 DE MAYO 2022 <br />
              El 1 de Mayo de 2022 se realizó el festejo por el día del trabajador junto a los compañeros matriculados y la familia.
              Se considera importante integrar a cada matriculado con su familia a estos eventos organizados por la subcomisión
              técnico gremial para lograr la unidad y con ello la fortaleza de nuestros reclamos, concientizar al matriculado en nuestro rol social DELEGADO
              por la Ley Nacional para proyectar, construir y habilitar las instalaciones de gas industriales, comercial.{" "}
            <br />
            <br />            
          </h3>
          <h3>
              5  DE JUNIO 2022 <br />
              Conmemorandose el aniversario de la fundación de la Asociación se realizó un asado de camadería con la presencia
              de todos los gasistas y su familia.{" "}
            <br />            
          </h3>
        </Col>
        <Col lg={4} />
      </Row>
    </div>
  );
}