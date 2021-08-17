import React, { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

const Aux = (props: Props) => {
  return <>{props.children}</>;
};

export default Aux;
