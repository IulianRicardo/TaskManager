import React, { useState, useEffect } from "react";
import Layout from "../layout";
import { TaskCards } from "../tasksCards/TaskCards";
import prof8 from "../../icons/Rectangle 125.png";
import { MultipleSelect } from "../MuiComponents/multipleSelect/MultipleSelect";
import "./Tasks.css";
import { Link } from "react-router-dom";
const axios = require("axios");
export const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const result = await axios.get("http://localhost:8000/tasks/");
    console.log(result.data);
    setTasks(result.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Layout>
      <div className="container__task">
        <div className="header">
          <h2>My Tasks</h2>
          <div className="header__right">
            <MultipleSelect />
            <Link to="/addtasks">
              <button className="btnAddTask">ADD TASK</button>
            </Link>
          </div>
        </div>
        <div className="task__cards">
          <div className="task__cards__left">
            {tasks.map((task) => (
              <TaskCards key={task.taskID} content={task} />
            ))}
          </div>
          {/* <div className="task__cards__right">
            {tasks.map((task) => (
              <TaskCards key={task.taskID} content={task} />
            ))}
          </div> */}
        </div>
      </div>
    </Layout>
  );
};
