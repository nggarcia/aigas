
import { Button, Form, Input, InputNumber } from 'antd';
import React from "react";

import "./Medidores.scss";

const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 14,
    },
};
  /* eslint-disable no-template-curly-in-string */
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  
  const App = () => {
    const onFinish = (values) => {
      console.log(values);
    };
  
    return (
    <>    
    <div>
        <h1>Lista de Medidores</h1>
    </div>
    
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        
        
        <Form.Item
          name={['user', 'numSerie']}
          label="Número de Serie"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'marca']}
          label="Modelo/Marca/Fábricante"
          rules={[
            {
                required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'capacidad']}
          label="Capacidad/Volúmen"
          rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        
        <Form.Item name={['user', 'observaciones']} label="Observaciones">
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Confirmar">            
          <Button type='primary'>Guardar</Button>
          <Button type='primary'>Limpiar</Button>
          <Button type="primary" danger>Salir</Button>
        </Form.Item>
        
      </Form>
    </>
    );    
  };
  
  export default App;
