import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import LanguageChange from "./Components/ChangeLanguage/ChangeLanguage";
import { React } from "react";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/change-language" element={<LanguageChange />} />
      </Routes>
    </Router>
  );
};

export default App;
