import React, {useState} from "react"; //importamos de React un Hook
import { Navigate, Route, useNavigate } from "react-router-dom";// para AdminSignIn no usado todavia
import { Layout } from "antd";
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";
import AdminSignIn from '../pages/Admin/SignIn';// para AdminSignIn no usado todavia

import "./LayoutAdmin.scss";


export default function LayoutAdmin(props) {
  const { children }= props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;

  const user = null; // para AdminSignIn no usado todavia

  // if(!user) {
  //   return (
    // <>
    // <Route path= "/admin/login" component={AdminSignIn} />
    // <Redirect to="/admin/login" />
    // </>
  //   );
  // }

  return (
    <Layout>
      <MenuSider menuCollapsed = {menuCollapsed} />
      <Layout className ="layout-admin" style={{marginLeft: menuCollapsed ? "80px" : "200px"}}>
        <Header className="layout-admin__header">
          <MenuTop menuCollapsed = {menuCollapsed} setMenuCollapsed = {setMenuCollapsed} />
        </Header>
        <Content className="layout-admin__content">{children}</Content>
        <Footer className="layout-admin__footer">Aigas 2022 powered by elevenG</Footer>
      </Layout>
    </Layout>
  );
}

// version anterior en video 58
// import React from "react";
// import { Layout } from "antd";

// export default function LayoutAdmin(props) {
//   const { children }= props;
//   const { Header, Content, Footer } = Layout;
//   return (
//     <Layout>
//       <h2>Menu Sider Admin!</h2> //!TO DO Menu Sider */}
//       <Layout>
//         <Header>Header!!...</Header>
//         <Content>{children}</Content>
//         <Footer>Footer: TinCode</Footer>
//       </Layout>
//     </Layout>
//   );
// }