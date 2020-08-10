import React, { useState } from "react";
// import clsx from 'clsx';
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
// import Anchor from "@material-ui/icons/Anch/"
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
} from "@material-ui/core";

// import { getInitials } from 'helpers';

const styles = (theme) => ({
  root: {
    // border: "2px solid red",
    marginBottom: "20px",
  },
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  actions: {
    justifyContent: "flex-end",
  },
});

const TeacherTables = ({ classes, teachers }) => {
  const [selectedTeachers, setselectedTeachers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    // const { teachers } = props;

    let selectedTeachers;

    if (event.target.checked) {
      selectedTeachers = teachers.map((teacher) => teacher.id);
    } else {
      selectedTeachers = [];
    }

    setselectedTeachers(selectedTeachers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedTeachers.indexOf(id);
    let newselectedTeachers = [];

    if (selectedIndex === -1) {
      newselectedTeachers = newselectedTeachers.concat(selectedTeachers, id);
    } else if (selectedIndex === 0) {
      newselectedTeachers = newselectedTeachers.concat(
        selectedTeachers.slice(1)
      );
    } else if (selectedIndex === selectedTeachers.length - 1) {
      newselectedTeachers = newselectedTeachers.concat(
        selectedTeachers.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newselectedTeachers = newselectedTeachers.concat(
        selectedTeachers.slice(0, selectedIndex),
        selectedTeachers.slice(selectedIndex + 1)
      );
    }

    setselectedTeachers(newselectedTeachers);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedTeachers.length === teachers.length}
                      color="primary"
                      indeterminate={
                        selectedTeachers.length > 0 &&
                        selectedTeachers.length < teachers.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Class</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>View</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teachers.slice(0, rowsPerPage).map((teacher) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={teacher.id}
                    selected={selectedTeachers.indexOf(teacher.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedTeachers.indexOf(teacher.id) !== -1}
                        color="primary"
                        onChange={(event) => handleSelectOne(event, teacher.id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          src={teacher.avatarUrl}
                        >
                          {/* {getInitials(teacher.name)} */}
                        </Avatar>
                        <Typography variant="body1">
                          {teacher.firstName} {teacher.lastName}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell>{teacher.email}</TableCell>

                    <TableCell>{teacher.phone}</TableCell>
                    <TableCell>
                      <IconButton
                        className={classes.button}
                        aria-label="Delete"
                        color="primary"
                      >
                        <PhotoCamera />
                      </IconButton>
                    </TableCell>

                    <TableCell>
                      <IconButton
                        className={classes.button}
                        aria-label="Delete"
                        color="primary"
                      >
                        <EditTwoToneIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        className={classes.button}
                        aria-label="Delete"
                        color="secondary"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={teachers.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

// TeacherTables.propTypes = {
//   className: PropTypes.string,
//   teachers: PropTypes.array.isRequired,
// };

export default withStyles(styles)(TeacherTables);
