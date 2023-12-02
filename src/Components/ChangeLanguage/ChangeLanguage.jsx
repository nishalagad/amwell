import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./changeLanguage.css";

const LanguageChange = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(true);

  const changeLanguage = (event) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  const handleOkClick = () => {
    setShowDropdown(false);
  };

  return (
    <div className="d-flex flex-column">
      {showDropdown && (
        <div className="changeLanguageContainer">
          <select
            style={{
              width: "100%",
              height: "35px",
              background: "#f6f6f6",
              color: "#444",
              border: "none",
              borderRadius: "5px",
              boxShadow: "0 3px 5px 1px rgba(0, 0, 0, 0.1)",
            }}
            value={lang}
            onChange={changeLanguage}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>

          <Button
            className="m-2 w-50"
            variant="primary"
            onClick={() => {
              navigate("/login");
              handleOkClick();
            }}
          >
            OK
          </Button>
        </div>
      )}
    </div>
  );
};

export default LanguageChange;
