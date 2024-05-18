import React from "react";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logos/Logo_Clear_Background.svg";

const Navbar = () => (
  <div className="navbar-container">
    <Breadcrumb
      className="breadcrumb"
      items={[
        {
          href: "/",
          title: (
            <Link to="/">
              <HomeOutlined />
            </Link>
          ),
          label: "Home",
        },
        {
          href: "/features",
          title: (
            <Link to="/features">
              <InfoCircleOutlined />
            </Link>
          ),
          label: "Features",
        },
        {
          href: "/about-us",
          title: (
            <Link to="/about-us">
              <TeamOutlined />
            </Link>
          ),
          label: "About Us",
        },
        {
          href: "",
          title: <ShoppingCartOutlined />,
          label: "Shop",
        },
      ]}
    />
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  </div>
);

export default Navbar;
