
import React from "react";
import {Link, useLocation} from 'react-router-dom';
import { HomeOutlined, UserOutlined, TeamOutlined,
         CalendarOutlined, FormOutlined, LineChartOutlined, label } from '@ant-design/icons';
import { Layout, Menu } from "antd";

import './MenuSider.scss';

export default function MenuSider (props) {
  const {menuCollapsed} = props;
  const {Sider} = Layout;
  const {pathname} = useLocation();
  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={pathname}>
        {/* <Menu.Item key="/admin">
          <Link to={"/admin"}>
            <HomeOutlined />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item> */}
        <Menu.Item key="/admin/users">
          <Link to={"/admin/users"}>
            <UserOutlined />
            <span className="nav-text">Gestión Socios</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="/admin/matriculados" >
          <Link to={"/admin/matriculados"}>
            <TeamOutlined />
            <span className="nav-text">Gestión Matriculados</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="/admin/medidores">
          <Link to={"/admin/medidores"}>
            <CalendarOutlined />
            <span className="nav-text">Gestión Medidores</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/empleados">
          <Link to={"/admin/empleados"}>
            <TeamOutlined />
            <span className="nav-text">Gestión Empleados</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/tramites">
          <Link to={"/admin/tramites"}>
            <FormOutlined />
            <span className="nav-text">Cargar C Contratos</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/reportes">
          <Link to={"/admin/reportes"}>
            <LineChartOutlined />
            <span className="nav-text">Reportes</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/capacitacion">
          <Link to={"/admin/capacitacion"}>
            <LineChartOutlined />
            <span className="nav-text">Cargar Capacitacion</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/eventos">
          <Link to={"/admin/eventos"}>
            <LineChartOutlined />
            <span className="nav-text">Cargar Eventos</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/recorridos">
          <Link to={"/admin/recorridos"}>
            <LineChartOutlined />
            <span className="nav-text">Cargar Recorridos</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/roles">
          <Link to={"/admin/roles"}>
            <LineChartOutlined />
            <span className="nav-text">Cargar Roles</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

