import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageChange = () => {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const changeLanguage = (event) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <select value={lang} onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>

      <div>{t("HELLO")}</div>
    </>
  );
};

export default LanguageChange;
