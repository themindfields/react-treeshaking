import React, { FunctionComponent, PropsWithChildren } from "react";

export interface ButtonAProps extends PropsWithChildren {}

const ButtonA: FunctionComponent<ButtonAProps> = ({ children }) => (
  <button className="buttonA">{children}</button>
);

export default ButtonA;
