// //import React from "react";
import React, { useState } from 'react';
import "./Empleados.scss";


import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  //Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from 'antd';

//export default function Empleados () {
  const { RangePicker } = DatePicker;

//const { TextArea } = Input;
const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  return (
    <>
    
{/*<div>
      //<h1>Datos de Empleado</h1>
    //</div>*/}
    
    
<Checkbox
      checked={componentDisabled}
      onChange={(e) => setComponentDisabled(e.target.checked)}
    >
      Habilitado
    </Checkbox>
    

    <Form
      labelCol={{
        span: 0,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      onValuesChange={onFormLayoutChange}
      disabled={componentDisabled}
    >

      
      {/*
      <Form.Item label="Chekbox" name="disabled" valuePropName="checked">
        <Checkbox>Checkbox</Checkbox>
      </Form.Item>
       */}

       {/*
      <Form.Item label="Radio">
        <Radio.Group>
          <Radio value="apple"> Apple </Radio>
          <Radio value="pear"> Pear </Radio>
        </Radio.Group>
            </Form.Item>
            */}
    
    <fieldset>
	<legend>Datos Empleado:</legend>
<Form.Item label="Tipo Doc">
        <Select>
          <Select.Option value="DNI">DNI</Select.Option>
          <Select.Option value="PASAPORTE">PASAPORTE</Select.Option>
          <Select.Option value="PASAPORTE">CEDULA</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Nro Doc">
        <Input />

      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 0,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Buscar
        </Button>
        </Form.Item>
    </fieldset>
               

          <Form.Item label="Nombre">
        <Input />
      </Form.Item>
           
      <Form.Item label="Apellido">
        <Input />
      </Form.Item>
    
          
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: 'Light',
              value: 'light',
              children: [
                {
                  title: 'Bamboo',
                  value: 'bamboo',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="RangePicker">
        <RangePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>

      {/*<Form.Item label="TextArea">
        <TextArea rows={4} />
        </Form.Item>*/}

      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Upload" valuePropName="fileList">
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <PlusOutlined />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload
            </div>
          </div>
        </Upload>
      </Form.Item>
      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>
  </>
  )
};

export default () => <FormDisabledDemo/>;

