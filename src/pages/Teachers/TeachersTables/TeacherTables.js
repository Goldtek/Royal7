import React, { useState } from "react";
// import clsx from 'clsx';
import PropTypes from "prop-types";
// import Moment from "react-moment";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { withStyles } from "@material-ui/core/styles";
// import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
// import Icon from '@material-ui/core/Icon';
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
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

const TeacherTables = ({ classes, candidates }) => {
  const [selectedCandidates, setselectedCandidates] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    // const { candidates } = props;

    let selectedCandidates;

    if (event.target.checked) {
      selectedCandidates = candidates.map((candidate) => candidate.id);
    } else {
      selectedCandidates = [];
    }

    setselectedCandidates(selectedCandidates);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCandidates.indexOf(id);
    let newselectedCandidates = [];

    if (selectedIndex === -1) {
      newselectedCandidates = newselectedCandidates.concat(
        selectedCandidates,
        id
      );
    } else if (selectedIndex === 0) {
      newselectedCandidates = newselectedCandidates.concat(
        selectedCandidates.slice(1)
      );
    } else if (selectedIndex === selectedCandidates.length - 1) {
      newselectedCandidates = newselectedCandidates.concat(
        selectedCandidates.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newselectedCandidates = newselectedCandidates.concat(
        selectedCandidates.slice(0, selectedIndex),
        selectedCandidates.slice(selectedIndex + 1)
      );
    }

    setselectedCandidates(newselectedCandidates);
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
                      checked={selectedCandidates.length === candidates.length}
                      color="primary"
                      indeterminate={
                        selectedCandidates.length > 0 &&
                        selectedCandidates.length < candidates.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Registration date</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {candidates.slice(0, rowsPerPage).map((candidate) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={candidate.id}
                    selected={selectedCandidates.indexOf(candidate.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={
                          selectedCandidates.indexOf(candidate.id) !== -1
                        }
                        color="primary"
                        onChange={(event) =>
                          handleSelectOne(event, candidate.id)
                        }
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          src={candidate.avatarUrl}
                        >
                          {/* {getInitials(candidate.name)} */}
                        </Avatar>
                        <Typography variant="body1">
                          {candidate.name}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell>{candidate.email}</TableCell>
                    <TableCell>
                      {/* {candidate.address.city}, {candidate.address.state},{' '}
                      {candidate.address.country} */}
                    </TableCell>
                    <TableCell>{candidate.phone}</TableCell>
                    <TableCell>
                      {/* <Moment format="D MMM YYYY" withTitle>
                        {candidate.gpaDate}
                      </Moment> */}
                      date
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<EditTwoToneIcon />}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
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
          count={candidates.length}
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

TeacherTables.propTypes = {
  className: PropTypes.string,
  candidates: PropTypes.array.isRequired,
};

export default withStyles(styles)(TeacherTables);
