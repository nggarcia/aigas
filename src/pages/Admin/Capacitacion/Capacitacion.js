import React from "react";
import "./Capacitacion.scss";

import 'moment/locale/es';
import locale from "antd/lib/date-picker/locale/es_ES";

import {
  Button,
  Col,
  Form,
  Input,
  Row,
  DatePicker,
  Divider,
  Select,
  //Upload,
 } from 'antd';
import { DisconnectOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { findAllByDisplayValue } from "@testing-library/react";
const { Option } = Select;


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Por favor seleccionar la fecha!',
    },
  ],
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const App = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return ( 
    <Form {...formItemLayout}
    form={form}
    name="register"
    onFinish={onFinish}
    scrollToFirstError
  >
    
<br></br>
<h3>Carga de Capacitación:</h3>
<br></br>
    <Row>
     <Col span={6}>
        <Form.Item name="tema"label="Tema" style={{width: "160%"}}
         rules={[
        {
          required: false,
          message: 'Por favor ingresar tema buscado!',
          whitespace: true,
        },
        ]}
       >         
        <Input/>
        </Form.Item>        
      </Col>
   
      <Col span={2}>
      <Button type="primary" style={{width: "180%"}} icon={<SearchOutlined/>}htmlType="Buscar">
            Buscar
          </Button>
      </Col>

     <Col span={6}></Col>
      <Col span={6}>

      {/*<Form.Item label="Subir" valuePropName="fileList">

          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 12 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
      */}


      </Col>
      <Col span={2}></Col>
   </Row>
    
    <Row>
     <Col span={6}>
     <Form.Item name="date-picker" label ="Fecha Carga:" {...config} style={{width: "160%"}}>
        <DatePicker style={{width: "100%"}} locale={locale}/>
      </Form.Item></Col>
      <Col span={6}></Col>
      <Col span={6}></Col>
      <Col span={6}></Col>
  </Row>

  <Divider></Divider>
        <br></br>
        <h3>Datos de Capacitación:</h3>
        <br></br>
  <Row>
      <Col span={6}>
      <Form.Item name="date-picker" label="Fecha evento:" {...config } style={{width: "160%"}}>
        <DatePicker style={{width: "100%"}} locale={locale}/>
      </Form.Item>
      </Col>
      <Col span={6}></Col>
      <Col span={7}></Col>
      <Button type='primary'>Cargar</Button>
      <Col span={5}></Col>
  </Row>

  <Row>
      <Col span={6}>
      <Form.Item
      name="titulo"
      label="Título:" style={{width: "160%"}}
      rules={[
        {
          required: true,
          message: 'Por favor ingresa el título o tema!',
          whitespace: true,
        },
      ]}
    >
      <Input />
    </Form.Item></Col>
      <Col span={6}></Col>
      <Col span={7}></Col>
      <Col span={5}><Button type='primary'>Eliminar</Button></Col>
  </Row>

  <Row>
      <Col span={6}>
      <Form.Item
          name="descripcion"
          label="Descripcion" style={{width: "160%"}}
          rules={[
            {
              required: false,
              message: 'Por favor ingrese una descripción de la disertación',
            },
          ]}
        >
        <Input.TextArea placeholder="" showCount maxLength={100} tex/>
        </Form.Item>
      </Col>
      <Col span={6}></Col>
      <Col span={7}></Col>
      <Col span={5}><Button type="primary" danger>Salir</Button></Col>
  </Row>   
      
    <Row>
      <Col span={6}>
      <Form.Item
      name="disertante"
      label="Disertante" style={{width: "160%"}}
      //tooltip="What do you want others to call you?"
      rules={[
        {
          required: false,
          message: 'Por favor ingresa el nombre!',
          whitespace: true,
        },
      ]}
    >
      <Input />
      </Form.Item> </Col>
      <Col span={6}></Col>
      <Col span={6}></Col>
      <Col span={6}></Col>
  </Row>
  
    <Row>
      <Col span={6}></Col>
      <Col span={12}></Col>    
  </Row>
    

    
  <Row>
  <Col span={6}>
      <Form.Item
       name="costo"
       label="Costo" style={{width: "160%"}}
       rules={[
        {
          required: false,
          message: 'Por favor ingresa el costo!',
          whitespace: true,
        },
      ]}
      >
      <Input />
      </Form.Item></Col>    
      <Col span={12}></Col>
      <Col span={6}></Col>
      </Row>
    </Form>
);
};
export default App;