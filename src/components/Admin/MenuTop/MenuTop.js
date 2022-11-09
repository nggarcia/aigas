// import { Icon, Button } from "antd";//es la version 3 antdesign
// usamos la version 4.22.6 pero se importa aparte los iconos
import {MenuUnfoldOutlined, LogoutOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from "react";
import LogoAigas from '../../../assets/img/png/logo-white.png'

import './MenuTop.scss';
// aca va todo lo del menu superior
export default function MenuTop(props) {
  // console.log(props);
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
        className="menu-top__left-logo"
        src={LogoAigas}
        alt='Aigas'
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          {/* <Icon type="menu-fold" /> */}
          {/* <MenuUnfoldOutlined /> */}
        </Button>
      </div>
      <div className='menu-top__right'>
        <Button type='link' onClick={() => console.log("Desconexion.")}>
          <LogoutOutlined />
        </Button>
      </div>
    </div>
  )
}