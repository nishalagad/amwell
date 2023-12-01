import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import LanguageChange from "./Components/ChangeLanguage/ChangeLanguage";
import { React } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/dashboard";
import Chatbot from "./chatbot/chatbot";
import Header from "./Headers/header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LanguageChange />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
