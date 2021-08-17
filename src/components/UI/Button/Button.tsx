import React from "react";
import "./Button.css";

interface Props {
  clicked: React.MouseEventHandler;
  btnType: string;
  children: JSX.Element | JSX.Element[] | string;
}

const button = (props: Props) => (
  <button
    className={["Button", [props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
