import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Wrapper } from "../../components";
import { connect } from "react-redux";
import { fetchTeachers } from "../../redux/actions/teachersAction";
import TeachersTable from "./TeachersTables/TeacherTable";
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
const TeacherLists = ({ fetchTeachers, teachers }) => {
  const classes = useStyles();
  useEffect(() => {
    fetchTeachers();
  }, [fetchTeachers]);
  const teacherArray = teachers.teachers;
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
            <Link color="inherit" to="/dashboard/teachers/view">
              Teachers
            </Link>
            <Typography color="textPrimary">Teacher List</Typography>
          </Breadcrumbs>
        </Wrapper>
      </Card>
      <AppBar position="static" color="primary" className={classes.appBar}>
        {/* <Typography color="inherit" className="flexs={12}pacer">
          TEACHERS LIST
        </Typography> */}
      </AppBar>
      {teachers.loading ? (
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
        <TeachersTable teachers={teacherArray} />
      )}
    </Wrapper>
  );
};

TeacherLists.propTypes = {
  teachers: PropTypes.object.isRequired,
  fetchTeachers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  teachers: state.teachers,
});

export default connect(mapStateToProps, { fetchTeachers })(TeacherLists);
