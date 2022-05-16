import Layout from "./Layout/Layout";
import "./App.css";
import React from "react";
import Home from "./Theme/Home";
import Themes from "./Theme/Theme.json";
import { useState } from "react";
// export const UserContext = React.createContext({
//   language: "en",
//   setLanguage: () => {},
// });
import { UserContext } from "./Context/Context";
export default function App() {
  const [name, setName] = useState("firstTheme_");
  const value = { name, setName };
  return (
    <UserContext.Provider value={value}>
      <Layout>
        <Home />
      </Layout>
    </UserContext.Provider>
  );
}
/*
Implementation source => https://reactjs.org/docs/context.html
color source          => https://coolors.co/palettes/trending
context in child      => https://stackoverflow.com/questions/41030361/how-to-update-react-context-from-inside-a-child-component
*/
