import React, { MouseEventHandler } from "react";
import "./Modal.css";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

interface Props {
  children: JSX.Element | JSX.Element[];
  show: boolean;
  modalClosed: MouseEventHandler;
}

const modal = (props: Props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
      className="Modal"
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;
