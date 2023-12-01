import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Container, Button, FormControl } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation;
  // Dummy data
  const dummyData = {
    1234567890: "1111",
    "0987654321": "2222",
  };

  const handleLogin = () => {
    if (dummyData[phoneNumber] === otp) {
      setError("");
      alert("Login successful");
      navigate("/dashboard");
    } else {
      setError("Invalid OTP");
    }
  };

  const handleSendOTP = () => {
    if (dummyData[phoneNumber]) {
      alert(`OTP Sent to ${phoneNumber}`);
      setShowOtp(true);
    } else {
      setError("Invalid mobile number");
    }
  };

  return (
    <Container className="login-container">
      <div className="login-section">
        {!showOtp && (
          <>
            <FormControl
              type="text"
              className="text-input"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
            />
            <Button className="login-buttons" onClick={handleSendOTP}>
              Send OTP
            </Button>
          </>
        )}

        {showOtp && (
          <>
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
          </>
        )}

        {error && <p>{error}</p>}
      </div>
    </Container>
  );
};

export default Login;
