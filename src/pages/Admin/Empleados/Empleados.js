import React from "react";
import "./Empleados.scss";

import 'moment/locale/es';
import locale from "antd/lib/date-picker/locale/es_ES";

import {
  //AutoComplete,
  Button,
  Cascader,
  Checkbox,
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
      message: 'Please select time!',
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

  //const onChange = (value) => {
 //   console.log('changed', value);
 // };
  //const InputNumber= () => <InputNumber min={1} max={5} defaultValue={1} onChange={onChange} />;

  /*const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
      );*/
  //const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  //const onWebsiteChange = (value) => {
    //if (!value) {
    //  setAutoCompleteResult([]);
   // } else {
    //  setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
   // }
  //};
  //const websiteOptions = autoCompleteResult.map((website) => ({
    //label: website,
    //value: website,
  //}
  //)
  //);
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
<Divider orientation="left">Gestión de Empleados:</Divider>
<br></br>
    <Row>
     <Col span={6}>
        <Form.Item name="legajo"label="Legajo"
         rules={[
        {
          required: true,
          message: 'Por favor ingresa tu legajo!',
          whitespace: true,
        },
        ]}
       >         
        <Input/>
        </Form.Item>        
      </Col>
   
      <Col span={2}>
      <Button type="primary" icon={<SearchOutlined/>}htmlType="Buscar">
            Buscar
          </Button>
      </Col>

     <Col span={6}></Col>

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
        <Form.Item label="Tipo Doc">
          <Select 
          placeholder="Selecciona un tipo documento" defaultValue="DNI">
            <Select.Option value="DNI">DNI</Select.Option>
            <Select.Option value="PASAPORTE">PASAPORTE</Select.Option>
            <Select.Option value="CEDULA">CEDULA</Select.Option>
          </Select>
        </Form.Item></Col>

      <Col span={6}>
      <Form.Item name="nrodocumento"label="Nro Doc"
      rules={[
        {
          required: true,
          message: 'Por favor ingresa tu nro documento!',
          whitespace: true,
        },
      ]}
      >
          <Input />
        </Form.Item>        
      </Col>
      <Col span={6}></Col>
      <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                Registrar 
            </Button>
          </Form.Item>
      <Col span={6}></Col>
  </Row>

  <Row>
      <Col span={6}>
      <Form.Item name="date-picker" label="Fecha Nac:" {...config}>
        <DatePicker style={{width: "100%"}} locale={locale}/>
      </Form.Item>
      </Col>
      <Col span={6}>
      <Form.Item
      name="En Actividad"
      valuePropName="checked"      
      {...tailFormItemLayout}
    >
      <Checkbox>
        En Actividad
      </Checkbox>
    </Form.Item>
      </Col>
      <Col span={7}></Col>
      <Button type='primary'>Consultar</Button>
      <Col span={5}></Col>
  </Row>

  <Row>
      <Col span={6}>
      <Form.Item
      name="name"
      label="Nombre"
      //tooltip="What do you want others to call you?"
      rules={[
        {
          required: true,
          message: 'Por favor ingresa tu nombre!',
          whitespace: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

      </Col>
      <Col span={6}>
      <Form.Item
      name="apellido"
      label="Apellido"
      //tooltip="What do you want others to call you?"
      rules={[
        {
          required: true,
          message: 'Por favor ingresa tu apellido!',
          whitespace: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
      </Col>
      <Col span={7}></Col>
      <Col span={5}><Button type='primary'>Eliminar</Button></Col>
  </Row>

  <Row>
      <Col span={6}>
      <Form.Item name="date-picker" label="Ingreso:" {...config}>
        <DatePicker style={{width: "100%"}} locale={locale}/>
      </Form.Item>
      </Col>
      <Col span={6}>
         <Form.Item label="Cargo">
          <Select 
          placeholder= "Selecciona un cargo">
            <Select.Option value="uno">Administrativo</Select.Option>
            <Select.Option value="dos">Contador</Select.Option>
            <Select.Option value="tres">Miembro de Comisión</Select.Option>
          </Select>
        </Form.Item></Col>
      <Col span={7}></Col>
      <Col span={5}><Button type="primary" danger>Salir</Button></Col>
  </Row>   
      
{/*}
  <Row>
      <Col span={6}>
        <Form.Item label="Estado Civil">
          <Select
          placeholder= "Selecciona tu estado civil">
            <Select.Option value="CASADO">Casado</Select.Option>
            <Select.Option value="SOLTERO">Pasado</Select.Option>
            <Select.Option value="VIUDO">Viudo</Select.Option>
            <Select.Option value="EN CONVIVENCIA">En convivencia</Select.Option>
          </Select>
        </Form.Item></Col>
      <Col span={6}></Col>

      <Col span={3}></Col>
      <Col span={6}>
      
      </Col>
      <Col span={3}></Col>
    </Row>
    */}
    <Row>
      <Col span={6}>
      <Form.Item
      name="calle"
      label="Calle"
      //tooltip="What do you want others to call you?"
      rules={[
        {
          required: false,
          message: 'Por favor ingresa tu calle!',
          whitespace: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
      </Col>
      <Col span={6}>
      <Form.Item label="Número">
          <Input />
        </Form.Item>      
      </Col>

      <Col span={6}>
      <Form.Item
      name="localidad"
      label="Localidad"
      rules={[
        {
          type: 'array',
          required: false,
          message: 'Por favor ingresa tu localidad!',
        },
      ]}
    >
      <Cascader options={residences} />
    </Form.Item>
      </Col>
      <Col span={6}></Col>
  </Row>
  
    <Row>
      <Col span={6}>
      <Form.Item
      name="celular"
      label="Celular"
      rules={[
        {
          required: true,
          message: 'Por favor ingresa tu número de celular!',
        },
      ]}
    >
      <Input
        addonBefore={prefixSelector}
        style={{
          width: '175%',
        }}
      />
    </Form.Item>

    
      </Col>
      <Col span={12}><Form.Item
      name="fijo"
      label="Fijo"
      rules={[
        {
          required: false,
          message: 'Por favor ingresa tu número de teléfono fijo!',
        },
      ]}
    >
      <Input
        addonBefore={prefixSelector}
        style={{
          width: '100%',
        }}
      />
    </Form.Item></Col>
    
  </Row>
    

    {/*<Form.Item
      name="donation"
      label="Donation"
      rules={[
        {
          required: true,
          message: 'Please input donation amount!',
        },
      ]}
    >
      <InputNumber
        addonAfter={suffixSelector}
        style={{
          width: '100%',
        }}
      />
      </Form.Item>*/}

    {/*<Form.Item
      name="website"
      label="Website"
      rules={[
        {
          required: true,
          message: 'Please input website!',
        },
      ]}
    >
      <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
        <Input />
      </AutoComplete>
    </Form.Item>*/}

  <Row>
  <Col span={6}>
      <Form.Item
       name="obra social"
       label="Obra Social"
      //tooltip="What do you want others to call you?"
      rules={[
        {
          required: false,
          message: 'Por favor ingresa tu Obra Social!',
          whitespace: true,
        },
      ]}
      >
      <Input />
      </Form.Item></Col>

    
    <Col span={12}>
     <Form.Item
      name="email"
      label="Correo E-mail"
      rules={[
        {
          type: 'email',
          message: 'No es un E-mail válido!',
        },
        {
          required: true,
          message: 'Por favor ingresa tu E-mail!',
        },
      ]}
       >
      <Input />
      </Form.Item></Col>

      <Col span={6}></Col>
      
  </Row>

{/*
    <Row>
      <Col span={6}>
      <Form.Item
        name="profesión"
        label="Profesión"
      //tooltip="What do you want others to call you?"
      rules={[
        {
          required: false,
          message: 'Por favor ingresa tu profesión!',
          whitespace: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

      </Col>
      <Col span={6}>
      <Form.Item
      name="obra social"
      label="Obra Social"
      //tooltip="What do you want others to call you?"
      rules={[
        {
          required: false,
          message: 'Por favor ingresa tu Obra Social!',
          whitespace: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

    
      </Col>
      <Col span={6}></Col>
      <Col span={6}></Col>
  </Row>
    */}

{/*
    <Row>
     <Col span={6}>
      <Col span={24}>
          {/*<Form.Item
          name="artículo 6"
          label="Artículo 6"
          rules={[
            {
              required: false,
              message: 'Please input Intro',
            },
          ]}
        >
        
        <Input.TextArea placeholder="Los asociados Activos tienen las siguientes obligaciones y derechos:
          1. a) Abonar puntualmente las cuotas sociales y otras contribuciones que se establezcan,
          2. b) Cumplir las demás obligaciones que imponga este estatuto, reglamentos y las resoluciones emanadas de la Asamblea y de la Comisión
          Directiva,
          3. c) Participar con voz y voto en las Asambleas, debiendo para ello estar al día con respecto al pago de las cuotas y contribuciones que se abonan
          como asociado,
          4. d) Presentar proyectos por escrito,
          5. e) Ser elegido para integrar órganos sociales,
          6. f) Gozar de los bene cios que otorga la entidad." showCount maxLength={100} tex/>
        </Form.Item>
        
              
        </Col>
      </Col>         
    </Row>
    */}

    </Form>
);
};
export default App;





{/*
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
    
 {/*   
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
    {/*
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
{/*
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

*/}
