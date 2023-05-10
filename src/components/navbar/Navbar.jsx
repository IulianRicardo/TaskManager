import React from "react";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {useState} from "react";
import imgDashboard from "../../icons/Vector2.png";
import imgPeople from "../../icons/people.png";
import imgGrid from "../../icons/grid-2.png";
import imgTask from "../../icons/task-square.png";
import imgProfile from "../../icons/people.png";
import imgLogout from "../../icons/logout.png";
import imgTaskBox from "../../icons/TaskBox1.png";
import "./Navbar.css";
import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 218;
//sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
export const Navbar = () => {
  const useStyles = makeStyles({
    weirdColor: {
      backgroundColor: "#212934",
      color: "#FFFFFF",
    },
  });

  const [items, setItems] = useState([
    {
      id: 1,
      text: "Dashboard",
      icon: <img src={imgDashboard} alt="dash" />,
      link1: "/dashboard",
    },
    {
      id: 2,
      text: "Users",
      icon: <img src={imgPeople} alt="user" />,
      link1: "/users",
    },
    {
      id: 3,
      text: "Projects",
      icon: <img src={imgGrid} alt="proj" />,
      link1: "/projects",
    },
    {
      id: 4,
      text: "My Tasks",
      icon: <img src={imgTask} alt="task" />,
      link1: "/tasks",
    },
    {
      id: 5,
      text: "Profile",
      icon: <img src={imgProfile} alt="profile" />,
      link1: "/profile",
    },
    {
      id: 6,
      text: "Logout",
      icon: <img src={imgLogout} alt="logout" />,
      link1: "/logout",
    },
  ]);
  const styles = useStyles();

  return (
    <Box sx={{display: "flex"}}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
        classes={{paperAnchorLeft: styles.weirdColor}}
      >
        {/* <Toolbar />
        <Divider /> */}

        <List className="navbar">
          <div className="imgLogo">
            <img src={imgTaskBox} alt="" />
          </div>
          {items.map((item) => (
            <Link to={item.link1} key={item.id} className="mapping">
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
