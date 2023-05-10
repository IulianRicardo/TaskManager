import React from "react";
import "./Login_SuccesRecoverPass.css";
import imgLog from "../../images/Login.png";
import arrowRight2 from "../../images/arrow-right-2.svg";
import arrowRight from "../../images/arrow-right.svg";
import tickcircle from "../../images/tick-circle.svg";
import {Link} from "react-router-dom";

export const Login_SuccesRecoverPass = () => {
  return (
    <div className="recover-pass">
      <div className="container-recover-pass">
        <div className="arrow-back">
          <Link to="/recover">
            <img src={arrowRight2} />
          </Link>
        </div>
        <div className="head-container-recover-pass">
          <h2 className="login-titlu-login-success">Welcome at</h2>

          <label htmlFor="" className="lbl-task-box-login-success">
            <label htmlFor="" className="lbl-task-recover-pass">
              Task
            </label>
            <label htmlFor="" className="lbl-box-recover-pass">
              Box
            </label>
          </label>
        </div>
        <div className="message-sent">
          <img src={tickcircle} alt="" className="icon-sent" />
          <h3 className="message">The link has been sent</h3>
        </div>
        <div className="back-to-login">
          <Link to="/login">
            <img src={arrowRight} />
          </Link>
          <Link to="/login">
            <button className="btn-back-to-log-in">Back to Log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
