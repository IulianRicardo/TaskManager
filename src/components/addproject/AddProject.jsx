import * as React from "react";
import { useState } from "react";
import "./AddProject.css";
import deleteIcon from "../../Images/delete.png";
import manIcon from "../../Images/man.png";
import searchIcon from "../../Images/search.png";
import { Link } from "react-router-dom";

import { InputLabel, MenuItem, Button, Select } from "@mui/material";
import Layout from "../layout";

const axios = require("axios");

export const AddProject = () => {
  const [project, setProject] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDeadline, setDeadline] = useState("");
  const [projectSupervisor, setSupervisor] = useState("");
  const [projectDescription, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:8000/projects/createProject", {
        projectName,
        projectDeadline,
        projectSupervisor,
        projectDescription,
      })
      .then(async (res) => {
        setProject(res.data);
        console.log(res.data);
        alert("Adaugat");
      })
      .catch((err) => {
        console.log(err);
        alert("eroare");
      });
  };
  return (
    <Layout>
      <div className="add_project">
        <h2>Add new project</h2>

        <div className="add_tab">
          <div className="name_and_deadline">
            <div className="name">
              <label className="full_name">Project name</label>
              <input
                type="text"
                className="input_full_name"
                placeholder="Full name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              ></input>
            </div>
            <div className="deadline">
              <label className="full_deadline">Deadline</label>
              <input
                type="date"
                className="input_deadline"
                value={projectDeadline}
                onChange={(e) => setDeadline(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="supervisor">
            <div className="assign_supervisor">
              <label className="assign">Assign supervisor</label>
              <div className="search_assign">
                <img
                  className="search_icon"
                  src={searchIcon}
                  alt="search-icon"
                />
                <input
                  type="text"
                  className="input_supervisor"
                  placeholder="Search"
                  value={projectSupervisor}
                  onChange={(e) => setSupervisor(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="icon_and_name">
              <img src={manIcon} />
              <label className="name_icon"> Devon Lane</label>
            </div>
          </div>

          <div className="description">
            <label className="description_text">Project description</label>
            <input
              type="text"
              className="input_description"
              placeholder="Write the description"
              value={projectDescription}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
            console.log({projectDescription})
          </div>

          <div className="upload_files">
            <label className="add_documents">Add documents and files</label>
            <Button
              component="label"
              style={{
                width: "178px",
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

          <div className="files">
            <div className="left_column">
              <div className="document">
                <label className="document_title">Document1.pdf</label>
                <div className="delete_icon2">
                  <img src={deleteIcon} />
                </div>
              </div>
              <div className="document">
                <label className="document_title">Document3.docx</label>
                <div className="delete_icon2">
                  <img src={deleteIcon} />
                </div>
              </div>
              <div className="document">
                <label className="document_title">Document5.pdf</label>
                <div className="delete_icon2">
                  <img src={deleteIcon} />
                </div>
              </div>
            </div>

            <div className="right_column">
              <div className="document">
                <label className="document_title">Document2.pdf</label>
                <div className="delete_icon2">
                  <img src={deleteIcon} />
                </div>
              </div>
              <div className="document">
                <label className="document_title">Document4.ppt</label>
                <div className="delete_icon2">
                  <img src={deleteIcon} />
                </div>
              </div>
              <div className="document">
                <label className="document_title">Document6.pdf</label>
                <div className="delete_icon2">
                  <img src={deleteIcon} />
                </div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <label className="mandatory">*All fields are mandatory</label>
            <div className="bottom_buttons">
              <Button
                style={{
                  width: "178px",
                  height: "48px",
                  margin: "5px",
                  borderRadius: "30px",
                  color: "orange",
                }}
                variant="outlined"
                color="secondary"
              >
                RESET
              </Button>

              <Button
                style={{
                  width: "176px",
                  height: "48px",
                  margin: "5px",
                  borderRadius: "30px",
                  color: "white",
                }}
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
              >
                ADD PROJECT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
