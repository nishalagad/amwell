import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");

  // Dummy data
  const dummyData = {
    1234567890: "1111",
    "0987654321": "2222",
  };

  const handleLogin = () => {
    if (dummyData[phoneNumber] === otp) {
      setError("");
      alert("Login successful");
    } else {
      setError("Invalid OTP");
    }
  };

  const handleSendOTP = () => {
    if (dummyData[phoneNumber]) {
      alert(`OTP Sent to ${phoneNumber}`);
    } else {
      setError("Invalid mobile number");
    }
  };

  return (
    <div className="login-container">
      {/* <div className="banner">
        <img src={bannerImage} alt="Banner" className="banner-image" />
      </div> */}
      <div className="login-section">
        <input
          type="text"
          className="text-input"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
        />
        <button className={"login-buttons"} onClick={handleSendOTP}>
          Send OTP
        </button>

        <br />

        <input
          type="text"
          className="text-input"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          placeholder="Enter OTP"
        />
        <button className={"login-buttons"} onClick={handleLogin}>
          Login
        </button>

        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
