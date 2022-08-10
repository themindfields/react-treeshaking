import React, { FunctionComponent, PropsWithChildren } from "react";

export interface ButtonBProps extends PropsWithChildren {}

const ButtonB: FunctionComponent<ButtonBProps> = ({ children }) => (
  <button className="buttonB">{children}</button>
);

export default ButtonB;
