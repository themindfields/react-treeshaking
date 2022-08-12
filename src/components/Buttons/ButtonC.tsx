import React, { FunctionComponent, PropsWithChildren } from "react";

export interface ButtonCProps extends PropsWithChildren {}

const ButtonC: FunctionComponent<ButtonCProps> = ({ children }) => (
  <button className="buttonC">
    {children}
    ThisIsButtonC
  </button>
);

export default ButtonC;
