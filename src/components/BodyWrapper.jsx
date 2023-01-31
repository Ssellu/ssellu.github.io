import "../features/App.css";
import React from "react";
import { useTheme } from "../features/theme";

const BodyWrapper = (props) => {
  const theme = useTheme();
  return <div id="wrapper">{props.children}</div>;
};

BodyWrapper.propTypes = {};

export default BodyWrapper;
