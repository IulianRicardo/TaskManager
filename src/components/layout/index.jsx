import React from "react";
import {Navbar} from "../navbar/Navbar";
import profilePhoto from "../../icons/Rectangle 190.png";
import "./style.css";

export default function Layout(props) {
  return (
    <div className="layout">
      <div className="contents">
        <div className="up_bar">
          <div className="place">
            <p>Dashboard</p>
          </div>
          <div className="user">
            <p>Guy Hawkins</p>
            <img src={profilePhoto} alt="" className="profilePhoto" />
          </div>
        </div>
        <div className="layout-main-content">{props.children}</div>
      </div>
    </div>
  );
}
