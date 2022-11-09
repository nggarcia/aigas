import React from "react";
import Layout from "antd/lib/layout";

export default function LayoutBasic(props) {
  const { children } = props;
  const { Content, Footer } = Layout;

  return (
    <Layout>
      <h2>Menu de la pagina LayoutBasic</h2>
      <Layout>
        <Content>{children}</Content>
        <Footer>Aigas 2022 powered by elevenG</Footer>
      </Layout>
    </Layout>
  )
}