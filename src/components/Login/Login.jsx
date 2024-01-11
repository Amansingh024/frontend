import React from "react";
import "./Login.css";

import starlogo from "../../assets/star.png";
import eyeLOGO from "../../assets/eyeClose.png";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="bg">
        <h2 className="heading">Welcome to PANDA</h2>
      </div>
      <div className="form-side">
        <ul>
          <li>
            <a href="#">Join Panda</a>
          </li>
          <li>or</li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
        <div className="login-box">
          <img src={starlogo} alt="logo" />
          <h2>Create your free account</h2>
          <h3>
            Takes less than <span>5 minutes...</span>
          </h3>
          <div className="form-box">
            <form>
              <label>
                <input type="email" name="Email" />
                <span>Email</span>
              </label>
              <label>
                <input type="password" name="password" id="password" />
                <span>Password</span>
                <img src={eyeLOGO} id="eyeIcon" />
              </label>
              <label>
                <input type="password" name="password" />
                <span>Confirm Password</span>
              </label>
            </form>
          </div>
          <div className="bottom-page">
            <form className="bottom-form">
              <label>
                <input type="checkbox" name="checkbox1" className="chkbox" />
                <p>I'm an Expert</p>
              </label>
              <label>
                <input type="checkbox" name="checkbox2" className="chkbox" />
                <p>I'm an organization in Africa</p>
              </label>

              <input type="submit" value="Join PANDA" />
            </form>
            <p className="tandc">
              By clicking on "Create an account", you agree to our{" "}
              <u>terms of use </u>
              and <u>privacy policy.</u>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
