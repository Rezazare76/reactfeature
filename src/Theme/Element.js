import React from "react";
import { UserContext } from "../Context/Context";
import { useContext } from "react";
import PropTypes from "prop-types";
import "./element.css";
export default function Element({ color }) {
  const { name, setName } = useContext(UserContext);
  return (
    <div className="element">
      <div
        className={`${name}${color}`}
        style={{
          padding: "50px",
          borderRadius: "10px",
        }}
      >
        {color}
      </div>
    </div>
  );
}
Element.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "info",
    "warning",
    "success",
  ]),
};
Element.defaultProps = {
  color: "warning",
};
