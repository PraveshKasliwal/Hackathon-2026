import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLogo from "../../assets/appLogo.jpeg";
import "./OtpLogin.css";

const OtpLogin = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) setPhone(value);
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 6) setOtp(value);
  };

  const sendOtp = () => {
    if (phone.length !== 10) {
      setError("Phone number must be exactly 10 digits");
      return;
    }

    setError("");
    // API CALL → /auth/send-otp
    setStep(2);
  };

  const verifyOtp = () => {
    if (otp.length !== 6) {
      setError("OTP must be exactly 6 digits");
      return;
    }

    setError("");
    // API CALL → /auth/verify-otp
    console.log("OTP verified");

    navigate("/");
  };

  return (
    <div className="otp-root">
      <div className="otp-card">
        <div className="app-logo">
            <img src={AppLogo} alt="" />
        </div>
        <h2>Login to Mera Care</h2>

        {step === 1 && (
          <>
            <input
              placeholder="Enter phone number"
              value={phone}
              onChange={handlePhoneChange}
              inputMode="numeric"
            />

            {error && <p className="error-text">{error}</p>}

            <button className="primary" onClick={sendOtp}>
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={handleOtpChange}
              inputMode="numeric"
            />

            {error && <p className="error-text">{error}</p>}

            <button className="primary" onClick={verifyOtp}>
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default OtpLogin;
