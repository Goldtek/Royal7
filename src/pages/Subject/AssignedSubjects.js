import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Wrapper } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { assignedSubjects } from "../../redux/actions/subjectActions";
import AssignedSubjectTable from "./SubjectTables/AssignedSubjectTable";
import AppBar from "@material-ui/core/AppBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  menu: {
    width: 200,
  },

  card: {
    minWidth: 275,
  },

  root: {
    flexGrow: 1,
    paddingBottom: theme.spacing(1),
  },
  appBar: {
    padding: "10px",
  },
  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10vh",
  },
}));
const AssignedSubject = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.authentication);
  const assTeachers = useSelector((state) => state.assignedSubjects);
  const userID = userAuth.user.id;
  useEffect(() => {
    dispatch(assignedSubjects(userID));
  }, [dispatch]);
  const teacherArray = assTeachers.assignedSubjects;
  return (
    <Wrapper>
      <Helmet>
        <title>Assigned Subjects</title>
      </Helmet>
      <br />
      <br />
      <Card>
        <Wrapper>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/dashboard/teachers/view">
              Teacher
            </Link>
            <Typography color="textPrimary">Assigned Subjects</Typography>
          </Breadcrumbs>
        </Wrapper>
      </Card>
      <AppBar position="static" color="primary" className={classes.appBar}>
        {/* <Typography color="inherit" className="flexs={12}pacer">
          TEACHERS LIST
        </Typography> */}
      </AppBar>
      {assTeachers.loading ? (
        <div className={classes.loader}>
          {" "}
          <CircularProgress className={classes.progress} size={60} />
          <Typography color="inherit" className="flexs={12}pacer">
            Loading...
          </Typography>
        </div>
      ) : Array.isArray(teacherArray) && !teacherArray.length ? (
        <div>No array</div>
      ) : (
        <AssignedSubjectTable subjects={teacherArray} />
      )}
    </Wrapper>
  );
};

AssignedSubject.propTypes = {
  teachers: PropTypes.object.isRequired,
  fetchTeachers: PropTypes.func.isRequired,
};

export default AssignedSubject;
