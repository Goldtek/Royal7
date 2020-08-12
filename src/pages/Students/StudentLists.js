import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Wrapper } from "../../components";
import { fetchStudents } from "../../redux/actions/studentActions";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import StudentTable from "./StudentTable/StudentTable";

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

  const studentArr = students.studentLists;

  return (
    <Wrapper>
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
