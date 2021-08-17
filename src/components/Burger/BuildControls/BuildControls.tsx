import React, { MouseEventHandler } from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

export const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

interface Props {
  ingredientRemoved: (type: string) => void;
  ingredientAdded: (type: string) => void;
  disabled: { [key: string]: any };
  price: number;
  purchaseable: boolean;
  ordered: MouseEventHandler;
}

const BuildControls = (props: Props) => (
  <div className="BuildControls">
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className="OrderButton"
      disabled={!props.purchaseable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
