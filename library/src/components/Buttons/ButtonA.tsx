import React, { FunctionComponent, PropsWithChildren } from "react";
import { isEmpty } from "lodash-es";

export interface ButtonAProps extends PropsWithChildren {}

const ButtonA: FunctionComponent<ButtonAProps> = ({ children }) => (
  <button className="buttonA">
    {children}
    {isEmpty(children) ? "emptyChildren" : "notEmptyChildren"}
  </button>
);

export default ButtonA;
