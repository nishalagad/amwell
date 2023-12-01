import React from "react";
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t, i18n } = useTranslation();
  return <h1>{t("Hello")}</h1>;
};

export default MyComponent;
