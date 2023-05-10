import React, { useState, useEffect } from "react";
import "./ProjectDescription.css";
import deleteIcon from "../../Images/delete.png";
import editIcon from "../../Images/edit.png";
import man2Icon from "../../Images/man2.png";
import downloadIcon from "../../Images/download.png";
import manIcon from "../../Images/man.png";
import { Link, useParams } from "react-router-dom";
import { MultipleSelect } from "../select/Select1.jsx";
import CircularStatic from "../MuiComponents/loader/CircularProgressWithLabel";

import { InputLabel, MenuItem, Button, Select } from "@mui/material";
import Layout from "../layout";

const axios = require("axios");

export const ProjectDescription = () => {
  const { id } = useParams();
  const [project1, setProject1] = useState(null);
  const [tasksProj, setTasksProj] = useState([]);

  const getProject = async () => {
    const result = await axios.get(`http://localhost:8000/projects/${id}`);
    console.log(result.data);
    setProject1(result.data);
  };
  useEffect(() => {
    getProject();
  }, []);

  console.log(project1);

  const getTaskForProject = async () => {
    const resultTask = await axios.get(
      `http://localhost:8000/tasks/findAll/${id}`
    );
    console.log(resultTask.data);
    console.log("sunt in get");
    setTasksProj(resultTask.data);
  };

  useEffect(() => {
    getTaskForProject();
  }, []);

  return (
    <>
      {project1 ? (
        <Layout>
          <div className="project_description">
            <label className="title_of_project">
              {project1.projects.projectName}
            </label>

            <div className="boxes">
              <div className="left_box">
                <div className="left_header">
                  <label className="title_description">
                    Project Description
                  </label>
                  <label className="deadline_text">
                    Deadline:{project1.projects.projectDeadline}
                  </label>
                </div>

                <div className="mid_paragraph">
                  <p className="paragraph_1">
                    {project1.projects.projectDescription}
                  </p>
                </div>

                <div className="bottom_supervisor">
                  <label className="supervisor_text">Supervisor</label>
                  <div className="bottom_icon_name">
                    <img src={man2Icon} />
                    <label className="icon_name">Zack Jersey</label>
                  </div>
                </div>
              </div>

              <div className="right_box">
                <div className="title_documentation">
                  <label className="documentation_title">Documentation</label>
                </div>

                <div className="mid_documents">
                  <div className="doc">
                    <label className="doc_title">Document1.pdf</label>
                    <div className="doc_icons">
                      <div className="download_icon">
                        <img src={downloadIcon} />
                      </div>
                      <div className="delete_icon1">
                        <img src={deleteIcon} />
                      </div>
                    </div>
                  </div>
                  <div className="doc">
                    <label className="doc_title">Document2.docx</label>
                    <div className="doc_icons">
                      <div className="download_icon">
                        <img src={downloadIcon} />
                      </div>
                      <div className="delete_icon1">
                        <img src={deleteIcon} />
                      </div>
                    </div>
                  </div>
                  <div className="doc">
                    <label className="doc_title">Document3.pdf</label>
                    <div className="doc_icons">
                      <div className="download_icon">
                        <img src={downloadIcon} />
                      </div>
                      <div className="delete_icon1">
                        <img src={deleteIcon} />
                      </div>
                    </div>
                  </div>
                  <div className="doc">
                    <label className="doc_title">Document4.docx</label>
                    <div className="doc_icons">
                      <div className="download_icon">
                        <img src={downloadIcon} />
                      </div>
                      <div className="delete_icon1">
                        <img src={deleteIcon} />
                      </div>
                    </div>
                  </div>
                  <div className="doc">
                    <label className="doc_title">Document5.pdf</label>
                    <div className="doc_icons">
                      <div className="download_icon">
                        <img src={downloadIcon} />
                      </div>
                      <div className="delete_icon1">
                        <img src={deleteIcon} />
                      </div>
                    </div>
                  </div>
                  <div className="doc">
                    <label className="doc_title">Document6.ppt</label>
                    <div className="doc_icons">
                      <div className="download_icon">
                        <img src={downloadIcon} />
                      </div>
                      <div className="delete_icon1">
                        <img src={deleteIcon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom_documentation">
                  <Button
                    component="label"
                    style={{
                      width: "327px",
                      height: "48px",
                      margin: "5px",
                      borderRadius: "30px",
                      color: "white",
                    }}
                    variant="contained"
                    color="primary"
                  >
                    UPLOAD FILE
                    <input type="file" hidden />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="tasks">
            <label className="header_tasks">Tasks</label>
            <div className="header_button">
              <MultipleSelect />
            </div>
          </div>
          {/* aici incep task-urile */}
          {tasksProj.map((taskProj) => (
            <div className="tasks_boxes">
              <div className="tasks_box">
                <div className="header_task">
                  <label className="title_task">{taskProj.taskName}</label>
                  <input
                    className="to_do_button"
                    button
                    value="TO DO"
                    onChange={() => null}
                  ></input>
                </div>
                <div className="second_line_task">
                  <label className="deadline_task">
                    {taskProj.taskDeadline}
                  </label>
                  <div className="task_icons">
                    <div className="edit_icon">
                      <img src={editIcon} />
                    </div>
                    <div className="delete_icon">
                      <img src={deleteIcon} />
                    </div>
                  </div>
                </div>
                <div className="paragraphs">
                  <p className="lorem_paraph">{taskProj.taskDescription}</p>
                </div>
                <div className="bottom_task">
                  <Button
                    style={{
                      width: "178px",
                      height: "48px",
                      margin: "5px",
                      borderRadius: "30px",
                      color: "white",
                    }}
                    variant="contained"
                    color="secondary"
                  >
                    TAKE TASK
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Layout>
      ) : (
        <CircularStatic />
      )}
    </>
  );
};
