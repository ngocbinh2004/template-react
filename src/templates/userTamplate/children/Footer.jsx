import React from "react";
import { Layout } from "antd";
const { Footer: FooterAntd } = Layout;
const Footer = () => {
  return (
    <FooterAntd style={{ textAlign: "center" }}>
      Ant Design ©{new Date().getFullYear()} Template
    </FooterAntd>
  );
};

export default Footer;
