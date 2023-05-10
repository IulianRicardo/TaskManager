import "./Users";
import "./User.css";
import * as React from "react";
import { AddUser } from "../users/AddUser";
import { EditUser } from "../users/EditUser";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TablePagination from "@mui/material/TablePagination";
import TextField from "@mui/material/TextField";
import { InputLabel, MenuItem } from "@mui/material";
import { MenuUnstyledContext } from "@mui/base";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";

import edit1 from "../../Images/editp.svg";
import delete1 from "../../Images/deletep.svg";
import img1 from "../../Images/imgt1.svg";
import src1 from "../../Images/search1.svg";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    height: "56px",
    fontFamily: "Almarai",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "36px",
    color: "#FFFFFF",
  },
  [`&.${tableCellClasses.body}`]: {
    height: "56px",
    height: "27px",
    fontFamily: "Almarai",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#8895A7",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {},

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  id: number,
  fullname: string,
  email: string,
  password: string,
  role: string,
  avatar: string,
  edit: string
) {
  return { id, fullname, email, password, role, avatar, edit };
}

const rows = [
  createData(
    1,
    "Ionut Popescu",
    "ionut.popescu@gmail.com",
    "capac123",
    "Administrator",
    "",
    ""
  ),
  createData(
    2,
    "Claudiu Dumitrescu",
    "claudiu123@gmail.com",
    "capac123",
    "Employee",
    "",
    ""
  ),
  createData(
    3,
    "Robert Hostiuc",
    "hostiuc.atat@gmail.com",
    "capac123",
    "Manager",
    "",
    ""
  ),
  createData(
    4,
    "Maria Dolanescu",
    "maria.andreea@gmail.com",
    "capac123",
    "Employee",
    "",
    ""
  ),
  createData(
    5,
    "Andreea Ionescu",
    "andreea98765@gmail.com",
    "capac123",
    "Employee",
    "",
    ""
  ),
  createData(
    6,
    "Denis Cariuc",
    "denis.cr@gmail.com",
    "capac123",
    "Employee",
    "",
    ""
  ),
  createData(
    7,
    "Razvan Petrescu",
    "razvan.petrescu@gmail.com",
    "capac123",
    "Manager",
    "",
    ""
  ),
];

export const Users = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className="project01">
      <div className="bar01">
        <h2 className="Title01">Users</h2>
        <div className="header_buttons01">
          <div className="input01">
            <img className="search_icon01" src={src1} alt="" />
            <input className="search01" type="search" Placeholder="Search" />
          </div>
          <div className="btn01">
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/adduser"
            >
              <Button
                className="btn_search01"
                style={{
                  fontFamily: "Almarai",
                  fontstyle: "normal",
                  fontweight: "700",
                  fontsize: "14px",
                  lineHeight: "16px",
                  textAlign: "center",
                  color: "#FFFFFF",
                  width: "182px",
                  height: "48px",
                  borderRadius: "50px",
                  backgroundColor: "#00BABA",
                  marginLeft: "20px",
                }}
                variant="contained"
                color="primary"
              >
                ADD USER
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="table01">
        <TableContainer
          style={{ borderRadius: "20px 20px 0px 0px" }}
          component={Paper}
        >
          <Table sx={{ minWidth: 1142 }} aria-label="customized table">
            <TableHead
              style={{
                background: "linear-gradient(90deg, #EFAC00 0%, #FF9500 100%)",
              }}
            >
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Full name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Password</StyledTableCell>
                <StyledTableCell>Role</StyledTableCell>
                <StyledTableCell>Avatar</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell>{row.fullname}</StyledTableCell>
                    <StyledTableCell>{row.email}</StyledTableCell>
                    <StyledTableCell>{row.password}</StyledTableCell>
                    <StyledTableCell>{row.role}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.avatar}
                      <img src={img1} alt="" />
                    </StyledTableCell>
                    <StyledTableCell a>
                      {row.edit}
                      <Link
                        style={{
                          textDecoration: "none",
                          display: "inline-block",
                        }}
                        to="/edituser"
                      >
                        {" "}
                        <img
                          src={edit1}
                          style={{ marginRight: "5px" }}
                          alt=""
                        />
                      </Link>{" "}
                      <img src={delete1} alt="" />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className="pag01">
            <Pagination
              style={{ marginLeft: "350px" }}
              rowsPerPageOptions={[15]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </div>
        </TableContainer>
      </div>
    </div>
  );
};
