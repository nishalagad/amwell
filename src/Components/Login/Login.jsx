import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Button, FormControl } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import LoginPageImage from "../../assets/loginPageImage.png";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Dummy data
  const dummyData = {
    1234567890: "1111",
    "0987654321": "2222",
  };

  const handleLogin = () => {
    // if (dummyData[phoneNumber] === otp) {
    setError("");
    toast.success(t("KEY_LOGIN_SUCCESSFULL"));
    navigate("/dashboard");
    // } else {
    //   setError("Invalid OTP");
    // }
  };

  const handleSendOTP = () => {
    // if (dummyData[phoneNumber]) {
    toast.success(t("OTP_SENT_TO"));
    setShowOtp(true);
    // } else {
    //   alert("Invalid mobile number");
    // }
  };

  return (
    <div className="loginContainer">
      <div className="div-5">
        <img loading="lazy" src={LoginPageImage} className="loginPageImage" />
        <div className="div-6">{t("CONSULT_DOCTORS_NEARBY")}</div>
      </div>
      <div className="loginPageTextStrip">{t("LETS_GET_STARTED")}</div>
      {!showOtp && (
        <div className="div-15">
          <FormControl
            type="text"
            className="text-input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={t("PHONE_NUMBER")}
          />

          <Button className="login-buttons" onClick={handleSendOTP}>
            {t("KEY_SEND_OTP")}
          </Button>
        </div>
      )}
      <div className="div-14">
        {showOtp && (
          <div className="div-15">
            <FormControl
              type="text"
              className="text-input"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              placeholder="Enter OTP"
            />
            <Button className="login-buttons" onClick={handleLogin}>
              Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
