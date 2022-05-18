import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./Redux/Redux";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/**
 Theme : https://codepen.io/aybukeceylan/pen/jOMazYe
 color : https://coolors.co/001514-fbfffe-6b0504-a3320b-e6af2e
 jsx convertor : https://magic.reactjs.net/htmltojsx.htm
 */
reportWebVitals();
