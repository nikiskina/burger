import React from "react";
import "./Backdrop.css";

export interface Props {
  show: boolean;
  clicked: React.MouseEventHandler;
}

const backdrop = (props: Props) =>
  props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null;

export default backdrop;
