import React from "react";
import "./header.css";
import logo from "./../assets/Logo.png";
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
        justifyContent: "flex-start",
        padding: "8px",
        alignItems: "center",
        position: "fixed",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <img src={logo} alt="logo" style={{ width: "150px" }} />
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
