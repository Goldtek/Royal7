import {
  Header,
  NotificationCenter,
  Sidebar,
  Workspace,
  Wrapper,
} from "../../components";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { MobileBreakpoint } from "../../styleVariables";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { AdminRoutes, TeacherRoutes } from "../../routes/SideBar";
import useMountEffect from "../../mountEffect";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Card from "@material-ui/core/Card";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Modal from "../../components/Modal/CustomDialog";
import MenuItem from "@material-ui/core/MenuItem";
import StudentAssesmentTable from "./StudentTable/StudentAssesmentTable";

import { fetchStudentAssessments } from "../../redux/actions/studentActions";
import cogoToast from "cogo-toast";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
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
}));

const StudentAssessment = ({ history }) => {
  const classes = useStyles();
  let params = useParams();
  const [opened, setOpened] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const stdAssmentArr = useSelector(
    (state) => state.students.studentAssesments
  );
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const userAuth = useSelector((state) => state.authentication);
  const schoolID = userAuth.user.schoolId;
  //API URL
  const API_URL = process.env.REACT_APP_BASEURL;

  const handleDialogOpen = () => {
    setIsOpen(true);
  };

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  const { role } = userAuth.user;

  let routes = [];

  const validationSchema = Yup.object().shape({
    markType: Yup.string().required("required"),
    maxScore: Yup.string().required("required"),
    markObtained: Yup.string().required("required"),
    remarks: Yup.string().nullable(),
  });

  if (role === "Admin") {
    routes = AdminRoutes;
    // return routes;
  }
  if (role === "Teacher") {
    routes = TeacherRoutes;
    // return routes;
  }
  const mediaMatcher = matchMedia(`(max-width: ${MobileBreakpoint}px)`);

  const resizeDispatch = () => {
    if (typeof Event === "function") {
      window.dispatchEvent(new Event("resize"));
    } else {
      const evt = window.document.createEvent("UIEvents");
      evt.initUIEvent("resize", true, false, window, 0);
      window.dispatchEvent(evt);
    }
  };

  const handleDrawerToggle = () => {
    setOpened(!opened);
    resizeDispatch();
  };

  const handleNotificationToggle = () =>
    setNotificationsOpen(!notificationsOpen);

  const handleFullscreenToggle = () => {
    const element = document.querySelector("#root");
    const isFullscreen =
      document.webkitIsFullScreen || document.mozFullScreen || false;

    element.requestFullScreen =
      element.requestFullScreen ||
      element.webkitRequestFullScreen ||
      element.mozRequestFullScreen ||
      function () {
        return false;
      };
    document.cancelFullScreen =
      document.cancelFullScreen ||
      document.webkitCancelFullScreen ||
      document.mozCancelFullScreen ||
      function () {
        return false;
      };
    isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
  };

  // useEffect(() => {
  //   dispatch(fetchStudentAssessments(stdID));
  //   return () => {
  //     dispatch(fetchStudentAssessments());
  //   };
  // }, [dispatch]);
  useMountEffect(() => {
    if (mediaMatcher.matches) setOpened(false);
    mediaMatcher.addListener((match) => {
      setTimeout(() => {
        if (match.matches) setOpened(false);
        else setOpened(true);
      }, 300);
    });

    const unlisten = history.listen(() => {
      if (mediaMatcher.matches) setOpened(false);
      document.querySelector("#root > div > main").scrollTop = 0;
    });
    dispatch(fetchStudentAssessments(params.stdId));
    return () => {
      unlisten();
      mediaMatcher.removeListener((match) => {
        setTimeout(() => {
          if (match.matches) setOpened(false);
          else setOpened(true);
        }, 300);
      });
    };
  }, [dispatch]);

  return (
    <>
      <Header
        logoAltText="Edcollab"
        logo={`${process.env.PUBLIC_URL}/static/images/logo.svg`}
        toggleDrawer={handleDrawerToggle}
        toogleNotifications={handleNotificationToggle}
        toggleFullscreen={handleFullscreenToggle}
      />
      <div className={classNames(classes.panel, "theme-dark")}>
        <Sidebar
          routes={routes.items}
          opened={opened}
          toggleDrawer={handleDrawerToggle}
        />
        <Workspace opened={opened}>
          <Wrapper>
            <br />
            <Card>
              <Wrapper>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link color="inherit" to="/dashboard/exam/create">
                    Exam
                  </Link>
                  <Typography color="textPrimary">Exam Time Table</Typography>
                </Breadcrumbs>
              </Wrapper>
            </Card>
            <AppBar
              position="static"
              color="primary"
              className={classes.appBar}
            >
              <Typography
                color="inherit"
                className={`${classes.typo} flexs={12}pacer`}
              >
                <Button
                  classes={{
                    root: classes.createbtn, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label, // class name, e.g. `classes-nesting-label-x`
                  }}
                  onClick={handleDialogOpen}
                >
                  Populate Assesment
                </Button>{" "}
                <Button
                  classes={{
                    root: classes.createbtn, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label, // class name, e.g. `classes-nesting-label-x`
                  }}
                  onClick={history.goBack}
                >
                  Go Back
                </Button>
              </Typography>
            </AppBar>
            {/* SCHOOL EXAMS */}

            {/* CUSTOM DIALOG ::::::::::::::::::::::::::::::::::::::::: */}
            <Modal
              OpenModal={isOpen}
              title={"Populate Student Assessment"}
              dialogWidth="md"
              handleOpen={handleDialogClose}
            >
              <Formik
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setSubmitting(true);
                  axios({
                    method: "POST",
                    url: `${API_URL}/ClassAssessment`,
                    data: {
                      id: uuidv4(),
                      markType: values.markType,
                      maxScore: values.maxScore,
                      markObtained: values.markObtained,
                      // subject: params.subj,
                      studentId: params.stdId,
                      remarks: values.remarks,
                      schoolId: schoolID,
                      created: Date.now(),
                    },
                  })
                    .then(() => {
                      cogoToast.success("Assessment Added Successfully!");
                      dispatch(fetchStudentAssessments(params.stdId));
                      resetForm();
                    })
                    .catch((error) => {
                      cogoToast.error(error);
                      resetForm();
                    });
                }}
                initialValues={{
                  markType: "",
                  maxScore: "",
                  markObtained: "",
                  remarks: "",
                }}
                validationSchema={validationSchema}
              >
                {(props) => {
                  const {
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  } = props;
                  return (
                    <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                          <TextField
                            select
                            label="Marks Type"
                            placeholder="Marks Type"
                            fullWidth
                            name="markType"
                            margin="normal"
                            value={values.markType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.markType && touched.markType}
                            helperText={
                              errors.markType &&
                              touched.markType &&
                              errors.markType
                            }
                          >
                            <MenuItem value="class Assessment">
                              Class Assessment
                            </MenuItem>
                            <MenuItem value="First Term">First Term</MenuItem>
                            <MenuItem value="Mid Term">Mid Term</MenuItem>
                          </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                          <TextField
                            label="Max Score"
                            placeholder="Max Score"
                            fullWidth
                            name="maxScore"
                            value={values.maxScore}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.maxScore && touched.maxScore}
                            helperText={
                              errors.maxScore &&
                              touched.maxScore &&
                              errors.maxScore
                            }
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                          <TextField
                            label="Mark Obtained"
                            placeholder="Mark Obtain"
                            fullWidth
                            name="markObtained"
                            value={values.markObtained}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.markObtained && touched.markObtained}
                            helperText={
                              errors.markObtained &&
                              touched.markObtained &&
                              errors.markObtained
                            }
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                          <TextField
                            multiline
                            label="Remarks"
                            placeholder="Remarks"
                            fullWidth
                            margin="normal"
                            name="remarks"
                            value={values.remarks}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.remarks && touched.remarks}
                            helperText={
                              errors.remarks &&
                              touched.remarks &&
                              errors.remarks
                            }
                          />
                        </Grid>
                      </Grid>
                      <br />
                      <Button
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                        type="submit"
                      >
                        Create Subject
                      </Button>{" "}
                      <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.button}
                        type="button"
                        onClick={handleDialogClose}
                      >
                        {" "}
                        Close
                      </Button>
                    </Form>
                  );
                }}
              </Formik>
            </Modal>
            {/* CUSTOM DIALOG ::::::::::::::::::::::::::::::::::::::::: */}

            {/* ASSESSMENT TABLE ::::::::::::::::::::::::::::::::::::::::: */}
            <StudentAssesmentTable
              subj={params.subj}
              stdAssment={stdAssmentArr}
            />
            {/* ASSESSMENT TABLE ::::::::::::::::::::::::::::::::::::::::: */}
          </Wrapper>
        </Workspace>
        <NotificationCenter
          notificationsOpen={notificationsOpen}
          toogleNotifications={handleNotificationToggle}
        />
      </div>
    </>
  );
};

export default StudentAssessment;
