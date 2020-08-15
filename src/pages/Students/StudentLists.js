import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import { Wrapper } from "../../components";
import { fetchStudents } from "../../redux/actions/studentActions";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import StudentTable from "./StudentTable/StudentTable";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Card from "@material-ui/core/Card";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "440",
  },
  typo: {
    fontSize: "1rem",
  },
  appBar: {
    padding: "10px",
  },
}));

const StudentLists = ({ fetchStudents, students }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const studentArr = students.students;

  return (
    <Wrapper>
      <Helmet>
        <title>Teachers List</title>
      </Helmet>
      <br />
      <br />
      <Card>
        <Wrapper>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/dashboard/student/view">
              Student
            </Link>
            <Typography color="textPrimary">Student List</Typography>
          </Breadcrumbs>
        </Wrapper>
      </Card>
      <Paper className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Typography color="inherit" className="flexs={12}pacer"></Typography>
        </AppBar>
        <StudentTable students={studentArr} />
      </Paper>
    </Wrapper>
  );
};

StudentLists.propTypes = {
  students: PropTypes.object.isRequired,
  fetchStudents: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  students: state.students,
});

export default connect(mapStateToProps, { fetchStudents })(StudentLists);
