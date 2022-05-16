import React, { Component } from "react";
import Element from "./Element";
import "./Theme.css";
import { useContext } from "react";
import { UserContext } from "../Context/Context";
export default class Home extends Component {
  render() {
    Home.contextType = UserContext;
    let value = this.context;
    return (
      <div
        className={`theme  ${UserContext._currentValue.name}primary`}
        // style={{ backgroundColor: UserContext._currentValue.primary }}
      >
        {/* {this.context} */}
        {console.log(UserContext._currentValue.name)}

        <Element color={"secondary"} />
        <Element color={"tertiary"} />
        <Element color={"info"} />
        <Element color={"warning"} />
        <Element color={"success"} />
        {/* {UserContext._currentValue} */}
      </div>
    );
  }
}
