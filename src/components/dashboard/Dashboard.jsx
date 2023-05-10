import React from "react";

import "./Dashboard.css";
import MyCards from "../dashboardCards/myCards";
import Layout from "../layout";
import ListItemIcon from "@mui/material/ListItemIcon";
import prof1 from "../../icons/Rectangle 94.png";
import prof2 from "../../icons/Rectangle 101.png";
import prof3 from "../../icons/Rectangle 122.png";
import prof4 from "../../icons/Rectangle 124.png";
import prof5 from "../../icons/Rectangle 96.png";
import prof6 from "../../icons/Rectangle 103.png";
import prof7 from "../../icons/Rectangle 123.png";
import prof8 from "../../icons/Rectangle 125.png";

export const Dashboard = () => {
  const projects = [
    {
      id: 1,
      name: "Design Menu",
      project: "Restaurant App",
      supervisor: "Andrei Nistor",
      text: "Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's.",
    },
    {
      id: 2,
      name: "Design Hero Section",
      project: "Restaurant App",
      supervisor: "Andrei Nistor",
      text: "Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's.",
    },
    {
      id: 3,
      name: "Make Logo",
      project: "Restaurant App",
      supervisor: "Andrei Nistor",
      text: "Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's.",
    },
    {
      id: 4,
      name: "User Flow",
      project: "Restaurant App",
      supervisor: "Andrei Nistor",
      text: "Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's.",
    },
    {
      id: 5,
      name: "User Journey",
      project: "Restaurant App",
      supervisor: "Andrei Nistor",
      text: "Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's.",
    },
    {
      id: 6,
      name: "Wireframes",
      project: "Restaurant App",
      supervisor: "Andrei Nistor",
      text: "Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's.",
    },
    {
      id: 7,
      name: "Wireframes",
      project: "Restaurant App",
      supervisor: "Andrei Nistor",
      text: "Lorem Ipsum is simply dummy text of the printing and types industry. Lorem Ipsum has been the industry's.",
    },
  ];

  const onlineUsers = [
    {
      id: 1,
      name: "Marvin McKinney",
      pic: <img src={prof1} alt="Marvin" />,
    },
    {
      id: 2,
      name: "Brooklyn Simmons",
      pic: <img src={prof2} alt="Brooklyn" />,
    },
    {
      id: 3,
      name: "Cody Fisher",
      pic: <img src={prof3} alt="Cody" />,
    },
    {
      id: 4,
      name: "Arlene McCoy",
      pic: <img src={prof4} alt="Arlene" />,
    },
    {
      id: 5,
      name: "Bessie Cooper",
      pic: <img src={prof5} alt="Bessie" />,
    },
    {
      id: 6,
      name: "Dianne Russell",
      pic: <img src={prof6} alt="Dianne" />,
    },
    {
      id: 7,
      name: "Jerome Bell",
      pic: <img src={prof7} alt="Jerome" />,
    },
    {
      id: 8,
      name: "Jenny Wilson",
      pic: <img src={prof8} alt="Jenny" />,
    },
  ];

  return (
    <Layout title="Dashboard ">
      <div className="container-dash">
        <div className="title-navbar">
          <div className="title-left">
            <button className="btn-recent-task">ALL USERS</button>
            <h2>ACTIVE USERS</h2>
          </div>
          <div className="title-right">
            <button className="btn-recent-task">ALL TASKS</button>
            <h2>RECENT TASKS</h2>
          </div>
        </div>

        <div className="container_this">
          <div className="container_left">
            {/* <div className="title">
              <button className="btn-recent-task">ALL USERS</button>
              <h2>ACTIVE USERS</h2>
            </div> */}
            <div className="container_left_up">
              {onlineUsers.map((user) => (
                <div key={user.id} className="details">
                  <ListItemIcon>{user.pic}</ListItemIcon>
                  {user.name}
                </div>
              ))}
            </div>
            <div className="title">
              <button className="btn-recent-task">ALL PROJECTS</button>
              <h2>RECENT PROJECTS</h2>
            </div>
            <div className="container_left_down">
              {projects.map((project) => (
                <MyCards
                  key={project.id}
                  content={project}
                  className="mycards"
                />
              ))}
            </div>
          </div>

          <div className="container_right">
            {/* <div className="title-right">
              <button className="btn-recent-task">ALL TASKS</button>
              <h2>RECENT TASKS</h2>
            </div> */}
            {projects.map((project) => (
              <MyCards key={project.id} content={project} className="mycards" />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
