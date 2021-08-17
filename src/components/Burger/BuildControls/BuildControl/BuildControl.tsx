import React, { MouseEventHandler, ReactChild } from "react";
import "./BuildControl.css";

export interface Props {
  label: string;
  added: MouseEventHandler;
  removed: MouseEventHandler;
  disabled: boolean;
  // key: string;
}

const BuildControl = (props: Props) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button className="Less" onClick={props.removed} disabled={props.disabled}>
      Less
    </button>
    <button className="More" onClick={props.added}>
      More
    </button>
  </div>
);

export default BuildControl;
