import React from "react";
import "./AddTask.css";
import Layout from "../layout";
import ListItemIcon from "@mui/material/ListItemIcon";
import prof8 from "../../icons/Rectangle 125.png";

export const AddTask = () => {
  return (
    <Layout>
      <div className="container__addTask">
        <div className="title__task">
          <h2>Add new task</h2>
        </div>
        <div className="first__line">
          <div className="project__name">
            <label htmlFor="">Project name</label>
            <input type="select" required placeholder="Full name" />
          </div>
          <div className="deadline">
            <label htmlFor="">Deadline</label>
            <input type="date" required />
          </div>
        </div>
        <div className="second__line">
          <div className="assign__user">
            <label htmlFor="">Assign user</label>
            <input type="text" required placeholder="Search" />
          </div>
          <div className="choose__user">
            <div className="choose__first">
              <img src={prof8} alt="" />
              <label htmlFor="">Devon Lane</label>
            </div>
            <button className="btnRemove">Remove</button>
          </div>
        </div>

        <div className="third__line">
          <label htmlFor="">Project Description</label>
          <input type="text" required placeholder="Write the description" />
        </div>
        <div className="last__line">
          <p>*All fields are mandatory</p>
          <div className="last__line__right">
            <button className="reset">RESET</button>
            <button className="addProj">ADD PROJECT</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
