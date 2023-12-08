import React from "react";
import MultiLang from "./MultiLang";

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 2em",
      }}
    >
      <h1>Translator</h1>
      <MultiLang />
    </div>
  );
}

export default NavBar;
