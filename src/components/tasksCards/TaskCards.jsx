import React from "react";
import "./TaskCards.css";
import editIcon from "../../icons/edit.png";
import deleteIcon from "../../icons/delete.png";
import { Link } from "react-router-dom";

export const TaskCards = ({ content }) => {
  return (
    <div className="container__task__cards">
      <div className="bar">
        <h3>{content.taskName}</h3>
        <div className="bar__icons">
          <h6>Deadline: {content.taskDeadline}</h6>
          <button>
            {" "}
            <img src={editIcon} alt="" />
          </button>
          <button>
            <img src={deleteIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="text">
        <p>{content.taskDescription}</p>
      </div>
      <div className="down_bar">
        <div className="more__details">
          <p>
            <b>Project:</b> {content.task_fk_project}
          </p>
          <p>
            <b>Supervisor:</b> {content.taskSupervisor}
          </p>
        </div>
        <Link to="/cardDetails">
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};
