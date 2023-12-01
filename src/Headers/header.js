import React from "react";
import "./header.css";
import logo from "./../assets/Logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

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
      <img
        src={logo}
        alt="logo"
        style={{ width: "150px" }}
        onClick={() => navigate("/dashboard")}
      />
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
