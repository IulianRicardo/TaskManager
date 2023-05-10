import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Navbar } from "./components/navbar/Navbar";
import { Dashboard } from "./components/dashboard/Dashboard.jsx";
import { Users } from "./components/users/Users.jsx";
import { AddUser } from "./components/users/AddUser.jsx";
import { EditUser } from "./components/users/EditUser.jsx";
import { Projects } from "./components/projects/Projects.jsx";
import { AddProject } from "./components/addproject/AddProject.jsx";
import { EditProject } from "./components/editproject/EditProject.jsx";
import { ProjectDescription } from "./components/projectdescription/ProjectDescription.jsx";
import { Tasks } from "./components/mytasks/Tasks.jsx";
import { Profile } from "./components/profile/Profile.jsx";
import { Logout } from "./components/logout/Logout.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AddTask } from "./components/addTask/AddTask";
import { TasksInfo } from "./components/tasksInfo/TasksInfo";
const customTheme = createTheme({
  palette: {
    primary: {
      main: "#00baba",
    },
    secondary: {
      main: "#EFAC00",
    },
  },
  MuiSelect: {
    variants: [
      {
        props: { variant: "dashed" },
        style: {
          textTransform: "none",
          borderRadius: "50px",
        },
      },
      {
        props: { variant: "dashed", color: "secondary" },
        style: {
          // border: `4px dashed ${red[500]}`,
        },
      },
    ],
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/AddUser" element={<AddUser />} />
            <Route path="/EditUser" element={<EditUser />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/addproject" element={<AddProject />} />
            <Route path={`/editproject/:id`} element={<EditProject />} />
            <Route path="/addtasks" element={<AddTask />} />
            <Route path="/cardDetails" element={<TasksInfo />} />
            <Route
              path={`/projectdescription/:id`}
              element={<ProjectDescription />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
