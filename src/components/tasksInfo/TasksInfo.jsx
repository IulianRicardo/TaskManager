import React from "react";
import Layout from "../layout";
import "./TasksInfo.css";
import ListItemIcon from "@mui/material/ListItemIcon";
import prof6 from "../../icons/Rectangle 103.png";
import prof4 from "../../icons/Rectangle 124.png";
import attach from "../../icons/paperclip.png";
import send from "../../icons/send-2.png";
import { MultipleSelectStatus } from "../MuiComponents/multipleSelectStatus/MultipleSelectStatus";
import { useParams } from "react-router-dom";

export const TasksInfo = () => {
  return (
    <Layout>
      <div className="container__task_info">
        <div className="task__title">
          <h2>Task 001</h2>
        </div>
        <div className="container__task__full">
          <div className="task__info__left">
            <div className="task__info__left__top">
              <div className="task__info__title">
                <h3>Task Description</h3>
                <h6>Deadline:22.04.2022</h6>
              </div>
              <div className="task__info__description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus distinctio recusandae consectetur explicabo quod
                  cupiditate, magnam fugit. Provident dolorum adipisci iusto
                  debitis ratione fuga, voluptas vel quis necessitatibus, magnam
                  molestiae!
                </p>
              </div>
              <div className="task__info__supervisor__all">
                <div className="task__info__supervisor">
                  <div className="task__info__user">
                    <h3>Supervisor</h3>
                    <div className="task__info__user__pic">
                      <ListItemIcon>
                        <img src={prof6} alt="" />
                      </ListItemIcon>
                      <p>Cody Fisher</p>
                    </div>
                  </div>
                </div>
                <div className="task__info__status">
                  <h3>Status</h3>
                  <MultipleSelectStatus />
                </div>
              </div>

              <div className="task__info__buttons">
                <button className="goTO">GO TO PROJECT</button>
                <button className="takeTask">TAKE TASK</button>
              </div>
            </div>
          </div>
          <div className="task__info__left_down">
            <h2>Users:</h2>
            <div className="task__users_onProj">
              <ListItemIcon>
                <img src={prof4} alt="" />
              </ListItemIcon>
              <p>Cody Fisher</p>
              <ListItemIcon>
                <img src={prof6} alt="" />
              </ListItemIcon>
              <p>Guy Hawkins</p>
            </div>
          </div>
          <div className="task__info__right">
            <div className="task__info__right__title">
              <h2>Task Chat</h2>
            </div>

            <div className="task__info__message">
              <label htmlFor="">
                <input type="text" required placeholder="Message" />
                <button>
                  <img src={attach} alt="" />
                </button>
                <button>
                  <img src={send} alt="" />
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
