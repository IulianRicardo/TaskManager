import React, { useState, useEffect } from "react";
import "./Projects.css";
import deleteIcon from "../../Images/delete.png";
import editIcon from "../../Images/edit.png";
import manIcon from "../../Images/man.png";
import { Link } from "react-router-dom";
import { MultipleSelect } from "../select/Select.jsx";

import { InputLabel, MenuItem, Button, Select } from "@mui/material";
import Layout from "../layout";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
const axios = require("axios");

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    const result = await axios.get("http://localhost:8000/projects/");
    console.log(result.data);
    setProjects(result.data);
  };
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <Layout>
      <div className="project">
        <h2>Projects</h2>
        <div className="header_buttons">
          {/* <Select style={{ width: "274px", color: "white", height: "47px", margin: "5px", borderRadius: "30px" }} select variant='outlined' fullWidth>
            <InputLabel>All</InputLabel>
            <MenuItem>
              All Projects
            </MenuItem>
            <MenuItem>
              My Projects
            </MenuItem>
          </Select> */}
          <MultipleSelect />
          <Link className="add_button" to="/addproject">
            <Button
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
              ADD PROJECT
            </Button>
          </Link>
        </div>
      </div>
      <div className="project_boxes">
        {projects.map((project) => (
          <div className="project_box" key={project.projectId}>
            <div className="header_box">
              <h3>{project.projectName}</h3>
              <h5>Deadline:{project.projectDeadline}</h5>
              <div className="header_icons">
                <Link
                  className="edit_button"
                  to={`/editproject/${project.projectId}`}
                >
                  <div className="edit_icon">
                    <img src={editIcon} />
                  </div>
                </Link>
                <div className="delete_icon">
                  <img src={deleteIcon} />
                </div>
              </div>
            </div>
            <div className="paragraph">
              <p>{project.projectDescription}</p>
            </div>
            <div className="bottom_box">
              <img src={manIcon} />
              <h4>User Name</h4>
              <Link
                className="details_button"
                to={`/projectdescription/${project.projectId}`}
              >
                <Button
                  style={{
                    width: "99px",
                    margin: "5px",
                    borderRadius: "30px",
                    color: "white",
                  }}
                  variant="contained"
                  color="secondary"
                >
                  Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
