import React from "react";
import style from "./OptAuth.module.css";
import { useNavigate } from "react-router-dom";
function OtpAuth() {
  const navigate = useNavigate();
  return (
    <div className={style.main}>
      <div className={style.heading}>
        <h2>OTP Verification</h2>
        <p>We’ve just sent you 4 digits code to your email example@gmail.com</p>
      </div>
      <form className={style.inputFields}>
        <input className={style.inputs} type="number" />
        <input className={style.inputs} type="number" />
        <input className={style.inputs} type="number" />
        <input className={style.inputs} type="number" />
      </form>
      <button className={style.AuthBtn} onClick={() => navigate("/home")}>
        Submit
      </button>
      <div className={style.footer}>
        <p>Don’t received the code?</p>
        <a href="/">Resend Code</a>
      </div>
    </div>
  );
}

export default OtpAuth;
