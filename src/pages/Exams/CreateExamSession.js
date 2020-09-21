import React from "react";
import axios from "axios";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import { Wrapper } from "../../components";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { fetchExamSessionLists } from "../../redux/actions/examActions";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

// <-- MODAL DIALOGUE IMPORTS-->
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import ExamSessionTable from "./Table/ExamSessionTable";
import TeacherExamSessionTable from "./Table/TeacherExamSessionTable";
import cogoToast from "cogo-toast";
import CustomDialog from "../../components/Modal/CustomDialog";
// <-- MODAL DIALOGUE IMPORTS-->

const styles = (theme) => ({
  panel: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      minHeight: "calc(100vh - 64px)",
      paddingTop: "64px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      minHeight: "calc(100vh - 56px)",
      paddingTop: "56px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 64px)",
    },
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
  },
  speedDial: {
    position: "absolute",
    bottom: theme.spacing(1) * 2,
    right: theme.spacing(1) * 3,
  },
  createbtn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 0,
    border: 0,
    color: "white",
    height: 30,
    padding: "0 25px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  avatar: {
    display: "inline-block",
    margin: 0,
    [theme.breakpoints.up("sm")]: {
      width: 128,
      height: 128,
    },
    [theme.breakpoints.down("xs")]: {
      width: 64,
      height: 64,
    },
    marginBottom: theme.spacing(1),
  },
  tabRoot: {
    textTransform: "initial",
    color: theme.palette.text.primary,
  },
  postInput: {
    border: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1) * 3,
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1) * 2,
    },
    fontSize: "13px",
    outline: 0,
    backgroundColor: theme.palette.background.paper,
  },
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
});

const API_URL = process.env.REACT_APP_BASEURL;
class CreateExamSession extends React.Component {
  state = {
    isOpen: false,
  };

  handleDialogOpen = () => {
    this.setState({ isOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { classes, currUser, fetchExamSessionLists } = this.props;
    console.log(currUser);
    return (
      <Wrapper>
        {" "}
        <Helmet>
          <title>Exam Session</title>
        </Helmet>
        <br />
        <br />
        <Card>
          <Wrapper>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" to="/dashboard/student/view">
                Exam
              </Link>
              <Typography color="textPrimary">Exam Session</Typography>
            </Breadcrumbs>
          </Wrapper>
        </Card>
        <AppBar position="static" color="primary" className={classes.appBar}>
          <Typography
            color="inherit"
            className={`${classes.typo} flexs={12}pacer`}
          >
            <Button
              classes={{
                root: classes.createbtn, // class name, e.g. `classes-nesting-root-x`
                label: classes.label, // class name, e.g. `classes-nesting-label-x`
              }}
              onClick={this.handleDialogOpen}
            >
              Create Exam Session
            </Button>
          </Typography>
        </AppBar>
        {/* MATERIAL TABLE :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        {currUser.user.role === "Admin" && <ExamSessionTable />}
        {currUser.user.role === "Teacher" && <TeacherExamSessionTable />}
        {/* MATERIAL TABLE :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        {/* MODAL DIALOG::::::::::::::::::::::::::::::::: */}
        <CustomDialog
          OpenModal={this.state.isOpen}
          handleClose={this.handleDialogClose}
          title={"Create ExamTime Table Session"}
          dialogWidth="sm"
        >
          <Formik
            initialValues={{
              schoolTerm: "",
              schoolSection: "",
              schoolSession: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.schoolSection) {
                errors.schoolSection = "Required";
              }
              if (!values.schoolTerm) {
                errors.schoolTerm = "Required";
              }
              if (!values.schoolSession) {
                errors.schoolSession = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(false);
              axios({
                method: "POST",
                url: `${API_URL}/examSession`,
                data: {
                  id: uuidv4(),
                  section: values.schoolSection,
                  session: values.schoolSession,
                  term: values.schoolTerm,
                  schoolId: currUser.user.schoolId,
                  created: Date.now(),
                },
              })
                .then(() => {
                  cogoToast.success("Table Added Successfully!");
                  resetForm();
                  setSubmitting(true);
                  fetchExamSessionLists();
                  this.handleDialogClose();
                })
                .catch((error) => {
                  cogoToast.error(`${error}`);
                  resetForm();
                  setSubmitting(true);
                });
              // dispatch(creteExamTables(data));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      margin="dense"
                      id="term"
                      label="School Term"
                      placeholder="eg First Term"
                      name="schoolTerm"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.schoolTerm}
                      error={errors.schoolTerm && touched.schoolTerm}
                      helperText={
                        errors.schoolTerm &&
                        touched.schoolTerm &&
                        errors.schoolTerm
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      margin="dense"
                      id="section"
                      label="Section"
                      fullWidth
                      placeholder="eg Junior Section"
                      name="schoolSection"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.schoolSection}
                      error={errors.schoolSection && touched.schoolSection}
                      helperText={
                        errors.schoolSection &&
                        touched.schoolSection &&
                        errors.schoolSection
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      margin="dense"
                      id="session"
                      label="Session"
                      placeholder="eg 2019/2020"
                      fullWidth
                      name="schoolSession"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.schoolSession}
                      error={errors.schoolSession && touched.schoolSession}
                      helperText={
                        errors.schoolSession &&
                        touched.schoolSession &&
                        errors.schoolSession
                      }
                    />
                  </Grid>
                </Grid>
                <DialogActions>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={this.handleDialogClose}
                    type="button"
                  >
                    Close
                  </Button>
                  <Button type="submit" variant="outlined" color="primary">
                    Submit
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </CustomDialog>
        {/* MODAL DIALOG::::::::::::::::::::::::::::::::: */}
      </Wrapper>
    );
  }
}

// fetchExamSessionLists.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
// const mapStateToProps = (state) => ({
//   // eventData: state.events,
// });

const mapStateToProps = (state) => {
  return {
    currUser: state.authentication,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchExamSessionLists: () => dispatch(fetchExamSessionLists()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CreateExamSession));

// export default (CreateExamSession);
