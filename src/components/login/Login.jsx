import React from "react";
import "./Login.css";
import imgLog from "../../Images/Login.png";
import line from "../../Images/line.svg";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="log-in">
      <div className="container">
        <div className="head-container">
          <h2 className="titlu">Welcome at</h2>

          <label htmlFor="" className="lbl-task-box">
            <label htmlFor="" className="lbl-task">
              Task
            </label>
            <label htmlFor="" className="lbl-box">
              Box
            </label>
          </label>
        </div>
        <form action="" className="form">
          <div className="dates-forms">
            <label htmlFor="" className="lbl-user">
              Enter Email or Username
            </label>
            <input type="text" className="lbl-user" placeholder="Username" />
          </div>
          <div className="dates-forms">
            <label htmlFor="" className="lbl-pass">
              Enter Password
            </label>
            <input
              type="password"
              className="lbl-pass"
              placeholder="Password"
            />
          </div>
          <div className="keep-me">
            <input type="checkbox" id="cb1" />
            <label htmlFor="cb1">Keep me logged in</label>
          </div>
          <Link to="/dashboard">
            <input type="submit" value={"LOG IN"} />
          </Link>
          <div className="line-bottom"></div>
          <Link to="/recover">
            <button className="recover-password">Recover password</button>
          </Link>
        </form>
      </div>
    </div>
  );
};
