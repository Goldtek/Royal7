import React, { useEffect } from "react";
import PropTypes from "prop-types";
// import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Wrapper } from "../../components";
import { connect } from "react-redux";
import { fetchTeachers } from "../../redux/actions/teachersAction";
import TeachersTable from "./TeachersTables/TeacherTable";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Card from "@material-ui/core/Card";
import { Helmet } from "react-helmet";
const styles = (theme) => ({
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
});

const TeacherLists = ({ fetchTeachers, teachers, classes }) => {
  useEffect(() => {
    fetchTeachers();
  }, [fetchTeachers]);

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
      <TeachersTable teachers={teachers.teachers} />
    </Wrapper>
  );
};

TeacherLists.propTypes = {
  classes: PropTypes.object.isRequired,
  teachers: PropTypes.object.isRequired,
  fetchTeachers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  teachers: state.teachers,
});

export default connect(mapStateToProps, { fetchTeachers })(
  withStyles(styles)(TeacherLists)
);
