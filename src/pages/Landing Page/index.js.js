import React from "react";
import LimitlessImage from "../../assets/images/Limitless_Prototype_Small_Version_5_v2.png";
import { Layout } from "antd";
import "./style.css";
import Title from "../../components/LP Title";
import Masonry from "../../components/Masonry Grid";
import SubscribeForm from "../../components/NewsletterSignup";

const { Content } = Layout;

const LandingPage = () => {
  return (
    <>
      <Content style={{ padding: "50px", textAlign: "center" }}>
        <div className="container">
          <Title />
          <img
            src={LimitlessImage}
            alt="Limitless Prototype"
            className="luxury-image"
          />
          <p className="luxury-text">
            The minimal design of our box produces the infinity mirror effect
            with the key selling point of allowing customers to personalize
            their items and create a pattern of their choice with the various
            box sizes we provide.
          </p>
          <p className=" bold">“Connecting People with Limitless Potential”</p>
          <p className="italic">- TTstudio</p>
          <SubscribeForm />
          <Masonry />
        </div>
      </Content>
    </>
  );
};

export default LandingPage;
