import React from "react";
import "./NavigationItem.css";

export interface Props {
  children: JSX.Element | JSX.Element[] | string;
  link: string;
  active?: boolean;
}

const navigationItem = (props: Props) => (
  <li className="NavigationItem">
    <a href={props.link} className={props.active ? "active" : undefined}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
