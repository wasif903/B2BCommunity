import React, { useState } from "react";
import style from "./forgetPasswordCss/forgetPass.module.css";
import Container from "react-bootstrap/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { usePasswordResetMutation } from "../../REDUX/Reducers/auth/UserSlice";

function EnterNewPass() {
  const navigate = useNavigate();

  const [resetPass, setresetPass] = useState({
    password: "",
    newPassword: "",
    otpCode: null,
  });

  const location = useLocation();
  const email = location?.state?.email;
  console.log(email, "email heree");

  const [passwordReset] = usePasswordResetMutation();

  const handleChange = (e) => {
    setresetPass({
      ...resetPass,
      [e.target.name]: e.target.value,
    });
  };

  const onSumbit = async () => {
    if (
      resetPass.newPassword === "" ||
      resetPass.password === "" ||
      resetPass.otpCode === null
    ) {
      alert("All the fields are required");
    } else {
      if (resetPass.password === resetPass.newPassword) {
        const res = await passwordReset({
          email: email,
          otpCode: Number(resetPass.otpCode),
          password: resetPass.password,
        });
        if (res.data.status === 200) {
          navigate("/login");
        }
      } else {
        console.log("passes dont match");
      }
    }
  };

  return (
    <>
      <div className={style.body}>
        <Container className={style.con}>
          <div
            className={`${style.headings} d-flex justify-content-center align-items-center flex-column`}
          >
            <h1 className="d-flex justify-content-center align-items-center m-3 text-center">
              Enter New Password
            </h1>
            <p className="d-flex flex-column gap-2">
              Enter Your New Password Below{" "}
              <span>
                <strong>Hint:</strong>
                Password should be at least Uppercase and lowercase letter and
                symbols like ! " ? $ % ^ &
              </span>
            </p>
          </div>
          <div className={style.inputs}>
            <input
              className={style.inputField}
              type="number"
              placeholder="OTP"
              name="otpCode"
              value={resetPass.otpCode}
              onChange={handleChange}
            />
            <input
              className={style.inputField}
              type="password"
              placeholder="Password"
              name="password"
              value={resetPass.password}
              onChange={handleChange}
            />
            <input
              className={style.inputField}
              type="Password"
              placeholder="Confirm Password"
              name="newPassword"
              value={resetPass.newPassword}
              onChange={handleChange}
            />
            <button onClick={onSumbit}>Reset Password</button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default EnterNewPass;
