import React from "react";
import "./Roles.scss";

import 'moment/locale/es';
import locale from "antd/lib/date-picker/locale/es_ES";

import {
  //AutoComplete, Checkbox, Cascader,
  Button,  
  Col,
  Form,
  Input,
  Row,
  DatePicker,
  Divider,
  Select,
  Upload,
 } from 'antd';
import { DisconnectOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { findAllByDisplayValue } from "@testing-library/react";
const { Option } = Select;
const residences = [
  {
    value: 'cordoba',
    label: 'Cordoba',
    children: [
      {
        value: 'capital',
        label: 'Capital',
        children: [
          {
            value: 'alberdi',
            label: 'Alberdi',
          },
          {
            value: 'nuevacordoba',
            label: 'Nueva Córdoba',
          },
          {
            value: 'jardín',
            label: 'Jardín',
          },
        ],
      },
      {
        value: 'interior',
        label: 'Interior',
        children: [
          {
            value: 'villacarlospaz',
            label: 'Villa Carlos Paz',
          },
          { 
            value: 'villaallende',
            label: 'Villa Allende',
          },
          { 
            value: 'unquillo',
            label: 'Unquillo',
          },
              
        ],
      },


    ],
  },
];

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
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 90,
        }}
      >
        <Option value="351">+351</Option>
        <Option value="353">+353</Option>
        <Option value="358">+358</Option>
      </Select>
    </Form.Item>
  );


  return (
    <Form {...formItemLayout}
    form={form}
    name="register"
    onFinish={onFinish}
    initialValues={{
      residence: ['zhejiang', 'hangzhou', 'xihu'],
      prefix: '351',
    }}
    scrollToFirstError
  >

<br></br>
<h3>Carga de Roles:</h3>
<br></br>
    <Row>
     <Col span={4}>
        <Form.Item name="rol"label="Rol" 
        
         rules={[
        {
          required: true,
          message: 'Por favor ingresar rol buscado!',
          whitespace: true,
        },
        ]}
       >         
        <Input/>
        </Form.Item>        
      </Col>
   
      <Col span={10}>
      <Button type="primary" icon={<SearchOutlined/>}htmlType="Buscar">
            Buscar
          </Button>
      </Col>

     <Col span={2}></Col>

      <Col span={6}>
      <Form.Item label="Subir" valuePropName="fileList">

          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
      </Col>
      <Col span={2}></Col>
   </Row>
    
    <Row>
     <Col span={6}>
     <Form.Item name="date-picker" label ="Fecha Carga:" {...config} style={{width: "160%"}}>
        <DatePicker style={{width: "120%"}} locale={locale}/>
      </Form.Item>
     </Col>
        
      <Col span={6}></Col>
             
      
      <Col span={6}></Col>
      <Col span={6}></Col>
  </Row>

  <Divider></Divider>
        <br></br>
        <h3>Datos del Rol:</h3>
        <br></br>
  <Row>
      <Col span={6}>
      <Form.Item name="date-picker" label="Fecha evento:" {...config } style={{width: "160%"}}>
        <DatePicker style={{width: "120%"}} locale={locale}/>
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
      name="nombreR"
      label="Rol:"
      //tooltip="What do you want others to call you?"
      rules={[
        {
          required: true,
          message: 'Por favor ingresa el nombre del rol!',
          whitespace: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

      </Col>
      <Col span={6}></Col>
      <Col span={7}></Col>
      <Col span={5}><Button type='primary'>Eliminar</Button></Col>
  </Row>

  <Row>
      <Col span={6}>
      <Form.Item
          name="descripcion"
          label="Descripcion"
          rules={[
            {
              required: false,
              message: 'Por favor ingrese una descripción del rol',
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
      label="Disertante"
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
      </Form.Item> 
      </Col>

      <Col span={6}></Col>
      <Col span={6}></Col>
      <Col span={6}></Col>
  </Row>
  
    <Row>
      <Col span={6}>
      

    
      </Col>
      <Col span={12}>
        
    </Col>
    
  </Row>
    

    
  <Row>
  <Col span={6}>
      <Form.Item
       name="costo"
       label="Costo"
      //tooltip="What do you want others to call you?"
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