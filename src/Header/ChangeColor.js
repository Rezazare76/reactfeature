import React from "react";
import PropTypes from "prop-types";
import { UserContext } from "../Context/Context";
import { useContext } from "react";
function ChangeColor({ bg, theme }) {
  const { name, setName } = useContext(UserContext);
  return (
    <div
      style={{
        padding: "10px",
        borderRadius: "50%",
        backgroundColor: bg,
        margin: "5px",
        cursor: "pointer",
      }}
      onClick={() => setName(`${theme}_`)}
    >
      {" "}
    </div>
  );
}

ChangeColor.propTypes = {};

export default ChangeColor;
