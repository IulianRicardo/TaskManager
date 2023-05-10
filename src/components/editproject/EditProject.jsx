import React, { useState, useEffect } from "react";
import "./EditProject.css";
import deleteIcon from "../../Images/delete.png";
import man1Icon from "../../Images/man1.png";
import { Link, useParams } from "react-router-dom";
import searchIcon from "../../Images/search.png";

import { InputLabel, MenuItem, Button, Select } from "@mui/material";
import Layout from "../layout";

const axios = require("axios");

export const EditProject = () => {
  const { id } = useParams();
  const [editProj, setEditProj] = useState(null);

  const getProject = async () => {
    const result = await axios.get(`http://localhost:8000/projects/${id}`);
    console.log(result.data.projects);
    setEditProj(result.data.projects);
  };

  useEffect(() => {
    getProject();
  }, []);

  const editThis = useEffect(() => {
    // if (editProj) {
    //   this.setState({
    //     [event.target.value]: event.target.value,
    //   });
    // }
    // const update=await axios.put(`http://localhost:8000/projects/${id}`,{
    //     editProj
    // })
  }, [editProj]);

  return (
    <>
      {editProj ? (
        <Layout>
          <div className="edit_project">
            <h2>
              Edit project:
              <label className="title_project"> {editProj.projectName}</label>
            </h2>
            <div className="add_tab">
              <div className="name_and_deadline">
                <div className="name">
                  <label className="full_name">Project name</label>
                  <input
                    type="text"
                    className="input_full_name"
                    defaultValue={editProj.projectName}
                    onChange={editThis}
                    placeholder="Full name"
                  ></input>
                </div>
                <div className="deadline">
                  <label className="full_deadline">Deadline</label>
                  <input
                    type="date"
                    className="input_deadline"
                    defaultValue={editProj.projectDeadline}
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
                      defaultValue={editProj.projectSupervisor}
                    ></input>
                  </div>
                </div>
                <div className="icon_and_name">
                  <img src={man1Icon} />
                  <label className="name_icon">Cody Fisher</label>
                </div>
              </div>

              <div className="description">
                <label className="description_text">Project description</label>
                <input
                  type="text"
                  className="input_description"
                  placeholder="Write the description"
                  defaultValue={editProj.projectDescription}
                ></input>
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
                  <Link className="submit_button" to="/projects">
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
                    >
                      SUBMIT
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        " loading"
      )}
    </>
  );
};
