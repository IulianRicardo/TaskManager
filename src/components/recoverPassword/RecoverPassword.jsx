import React from "react";
import "./RecoverPassword.css";
import imgLog from "../../images/Login.png";
import arrowRight from "../../images/arrow-right.svg";
import arrowRight2 from "../../images/arrow-right-2.svg";
import {Link} from "react-router-dom";

export const RecoverPassword = () => {
  return (
    <div className="recover-pass">
      <div className="container-recover-pass">
        <div className="arrow-back">
          <Link to="/login">
            <img src={arrowRight2} />
          </Link>
        </div>
        <div className="head-container-recover-pass">
          <h2 className="titlu-recover-pass">Welcome at</h2>

          <label htmlFor="" className="lbl-task-box-recover-pass">
            <label htmlFor="" className="lbl-task-recover-pass">
              Task
            </label>
            <label htmlFor="" className="lbl-box-recover-pass">
              Box
            </label>
          </label>
        </div>
        <div className="sub-head-container-recover-pass">
          <h3 className="sub-titlu-recover-pass">Forgot password</h3>
          <p>
            Please enter your mail below and <br />
            we will send you a link in order to <br /> reset your password
          </p>
        </div>
        <form action="" className="form-recover-pass">
          <div className="dates-forms-recover-pass">
            <input type="text" className="email-address-recover-pass" placeholder="Email Address" />
          </div>
          <div className="dates-forms-recover-pass">
            <Link to="/login_success">
              <input type="submit" value={"SEND LINK"} />
            </Link>
          </div>

          <div className="back-to-login">
            <Link to="/login">
              <img src={arrowRight} />
            </Link>
            <Link to="/login">
              <button className="btn-back-to-log-in">Back to Log in</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
