import React from "react";
import "./header.css";
import logo from "./../logo.svg";
export default function Header() {
  const languageOptions = ["English", "Spanish", "French"]; // this should be your list of languages

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    // handle language change here
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <img src={logo} alt="logo" style={{ width: "50px" }} />{" "}
      {/* replace with your logo */}
      {/*  <select onChange={handleLanguageChange} style={{ marginRight: "10px" }}>
        {languageOptions.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select> */}
    </header>
  );
}
