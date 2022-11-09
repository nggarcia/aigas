import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import quienessomos from "../../../assets/img/jpg/quienessomos1.jpg";
import eventos from "../../../assets/img/jpg/eventos1.jpg";
import normativas from "../../../assets/img/jpg/normativas1.jpg";
import capacitaciones from "../../../assets/img/jpg/capacitaciones1.jpg";
import noticias from "../../../assets/img/jpg/noticias1.jpg";
import matriculados from "../../../assets/img/jpg/matriculados1.jpg";
import ecogas from "../../../assets/img/jpg/ecogas1.jpg";
import redes from "../../../assets/img/jpg/redes1.jpg";


import "./HomeItems.scss";

export default function HomeItems() {
  return (
    <Row className="home-items">
      <Col lg={24} className="home-items__title">
        <h2>Información de interes para los profesionales gasistas matriculados y público en general</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-items">
          <Col md={6}>        
            <CardItem
              image={quienessomos}
              title="Quienes Somos"
              subtitle="Misión- Visión- Objetivo"              
              link= "../../../Mision"                                   
            />                 
          </Col>
          <Col md={6}>
            <CardItem
              image={eventos}
              title="Eventos"
              subtitle="Reuniones Sociales y Fiestas"
              link="../../../Eventos"
            />
          </Col>
          <Col md={6}>
            <CardItem
              image={normativas}
              title="Normativas"
              subtitle="Novedades y Actualizaciónes"
              link="https://www.enargas.gob.ar/secciones/normativa/normas-tecnicas-items.php?grupo=2"
            />
          </Col>

          <Col md={6}>
            <CardItem
              image={capacitaciones}
              title="Capacitaciones"
              subtitle="Capacitaciones y Charlas"
              link="../../../Capacitaciones"
            />
          </Col>
        </Row>

        <Row className="row-items">
          <Col md={6}>
            <CardItem
              image={noticias}
              title="Noticias"
              subtitle="Información Relevante al oficio"
              link="../../../Noticias"
              
            />           
          </Col>

          <Col md={6}>
            <CardItem
            image={matriculados}
            title="Matriculados"
            subtitle="Lista de Gasistas Matriculados asociados"
            link="../../../Matriculados"            
          />
          </Col>
          <Col md={6} >
            <CardItem
            image={ecogas}
            title="EcoGas"
            subtitle="Distribuidor de Gas Natural"
            link="https://www.ecogas.com.ar/"
          />
          </Col>
          <Col md={6}>
            <CardItem
              image={redes}
              title="Nuestras Redes"
              subtitle="Seguinos en Facebook, WhatsApp, Instagram"
              link="https://www.facebook.com/Aigascordobacapital"
            />
          
           </Col>
    </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-items__more">
        <Link to="/courses">
          <Button>Ver más</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardItem(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-items__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>INGRESAR</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}