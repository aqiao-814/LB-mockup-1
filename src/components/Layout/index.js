import React from "react";
import { Layout } from "antd";
import Navbar from "../Navbar";
import { InstagramOutlined, XOutlined, MailOutlined } from "@ant-design/icons";
import "./Layout.css";

const { Header, Footer, Content } = Layout;

function AppLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        className="header"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          background: "none",
        }}
      >
        <Navbar />
      </Header>
      <Content>{children}</Content>
      <Footer style={{ textAlign: "center", background: "none" }}>
        TTStudio ©{new Date().getFullYear()} Created by Andy Qiao
        <div className="social-media-icons">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined className="social-icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XOutlined className="social-icon" />
          </a>
          <a href="mailto:example@example.com">
            <MailOutlined className="social-icon" />
          </a>
        </div>
      </Footer>
    </Layout>
  );
}

export default AppLayout;
