import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import "./Logo.css";

interface SideDrawer {
  height: string;
}

const logo = (props: SideDrawer) => (
  <div className="Logo" style={{ height: props.height }}>
    <img alt="burgerLogo" src={burgerLogo} />
  </div>
);

export default logo;
