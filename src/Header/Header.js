import React, { useState } from "react";
import "./Header.css";
import ChangeColor from "./ChangeColor";
// import { UserContext } from "../App";
import { UserContext } from "../Context/Context";
import { useContext } from "react";
export default function Header() {
  const { name, setName } = useContext(UserContext);
  const [visibility, setVisible] = useState("hidden");
  return (
    <div className={`${name}info`}>
      <div className="header">
        {/* <div className="tooltip" onClick={() => setName("secondTheme_")}>
          {name}
        </div> */}
        <div
          class="tooltip"
          onClick={() =>
            setVisible(visibility == "visible" ? "hidden" : "visible")
          }
        >
          <img
            src={require("../content/images/changeTheme.jpg")}
            width="44px"
          />
          <span class="tooltiptext" style={{ visibility: visibility }}>
            <ChangeColor bg="#cdb4db" theme="firstTheme" />
            <ChangeColor bg="#8ecae6" theme="secondTheme" />
            <ChangeColor bg="#94d2bd" theme="thirdTheme" />
            <ChangeColor bg="#2b2d42" theme="fourthTheme" />
          </span>
        </div>
        <h2>Context Theme</h2>
        <div>Amoutseir</div>
      </div>
    </div>
  );
}
