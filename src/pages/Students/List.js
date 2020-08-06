import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Wrapper } from "../../components";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import LinkIcon from "@material-ui/icons/Link";
const columns = [
  { id: "name", label: "Name" },
  {
    id: "gender",
    label: "Gender",
  },
  {
    id: "stdclass",
    label: "Class",
  },
  {
    id: "section",
    label: "Section",
  },
  {
    id: "address",
    label: "Address",
  },
  {
    id: "phone",
    label: "Phone",
  },
  {
    id: "email",
    label: "Email",
  },
  {
    id: "view",
    label: "View",
  },
  {
    id: "edit",
    label: "Edit",
  },
  {
    id: "del",
    label: "Delete",
  },
];

function createData(
  name,
  gender,
  stdclass,
  section,
  address,
  dob,
  phone,
  email
) {
  const view = (
    <Link>
      <LinkIcon></LinkIcon>
    </Link>
  );
  const del = (
    <Link>
      <DeleteRoundedIcon style={{ color: "#b71c1c" }} />
    </Link>
  );
  const edit = (
    <Link>
      <EditRoundedIcon color="primary" />
    </Link>
  );
  return {
    name,
    gender,
    stdclass,
    section,
    address,
    dob,
    phone,
    email,
    edit,
    del,
    view,
  };
}

const rows = [
  createData(
    "Mark Willy",
    "Male",
    2,
    "A",
    "Address",
    "DOB",
    "Phone",
    "mark@email.com"
  ),
  createData(
    "John Doe",
    "Male",
    2,
    "A",
    "Address",
    "DOB",
    "Phone",
    "doe@email.com"
  ),
  createData(
    "Queen Tracey",
    "Female",
    2,
    "A",
    "Address",
    "DOB",
    "Phone",
    "queen@email.com"
  ),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  typo: {
    fontSize: "1rem",
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Wrapper>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            color="inherit"
            variant="h6"
            className={`${classes.typo} flexs={12}pacer`}
          >
            ALL STUDENTS
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Wrapper>
  );
}
