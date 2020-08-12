import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Wrapper } from "../../components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const validationSchema = Yup.object().shape({
  examName: Yup.string().required("required"),
  examTime: Yup.string().required("required"),
  examDate: Yup.string().required("required"),
  examClass: Yup.string().required("required"),
  section: Yup.string().required("required"),
  subjectName: Yup.string().required("required"),
  supervisor: Yup.string().required("required"),
  description: Yup.string().nullable(),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const ExamSchedule = (props) => {
  const { classes } = props;
  return (
    <Wrapper>
      <ToastContainer />
      <Formik
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          axios({
            method: "POST",
            url: `${API_URL}/class_schedule`,
            data: {
              examName: values.examName,
              description: values.description,
              subjectName: values.subjectName,
              supervisor: values.supervisor,
              subject: values.subject,
            },
          })
            .then((response) => {
              toast.success(`🚀 Class Created Succesfully!`, {
                position: "top-right",
                autoClose: 15000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });

              resetForm();
              setSubmitting(true);
              // history.push(`/sent/${values.description}`, true);
            })
            .catch((error) => {
              toast.error(`${error}`, {
                position: "top-right",
                autoClose: 15000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              resetForm();
              setSubmitting(true);
            });
        }}
        initialValues={{
          examName: "",
          examClass: "",
          description: "",
          subjectName: "",
          section: "",
          examTime: "",
          supervisor: "",
          examDate: "",
          subject: "",
        }}
        validationSchema={validationSchema}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <br />
              <br />
              <Card>
                <Wrapper>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/dashboard/">
                      Exam
                    </Link>
                    <Typography color="textPrimary">Schedule Exam</Typography>
                  </Breadcrumbs>
                </Wrapper>
              </Card>

              <Card
                className={classes.card}
                style={{ marginTop: "5px", marginBottom: "20px" }}
              >
                <AppBar
                  position="static"
                  color="primary"
                  className={classes.appBar}
                >
                  <Typography color="inherit" className="flexs={12}pacer">
                    Add New Exam Schedule
                  </Typography>
                </AppBar>

                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        label="Exam Name"
                        placeholder="Exam Name"
                        fullWidth
                        margin="normal"
                        name="examName"
                        value={values.examName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.examName && touched.examName}
                        helperText={
                          errors.examName && touched.examName && errors.examName
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        label="Subject"
                        placeholder="Subject"
                        fullWidth
                        margin="normal"
                        name="subjectName"
                        value={values.subjectName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.subjectName && touched.subjectName}
                        helperText={
                          errors.subjectName &&
                          touched.subjectName &&
                          errors.subjectName
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        label="Class"
                        select
                        placeholder="Class"
                        fullWidth
                        margin="normal"
                        name="examClass"
                        value={values.examClass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.examClass && touched.examClass}
                        helperText={
                          errors.examClass &&
                          touched.examClass &&
                          errors.examClass
                        }
                      >
                        <MenuItem value="1">One</MenuItem>
                        <MenuItem value="2">Two</MenuItem>
                        <MenuItem value="3">Three</MenuItem>
                      </TextField>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        label="Supervisor"
                        placeholder="Supervisor"
                        fullWidth
                        margin="normal"
                        name="supervisor"
                        value={values.supervisor}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.supervisor && touched.supervisor}
                        helperText={
                          errors.supervisor &&
                          touched.supervisor &&
                          errors.supervisor
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        label="Section"
                        select
                        placeholder="Section"
                        fullWidth
                        margin="normal"
                        name="section"
                        value={values.section}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.section && touched.section}
                        helperText={
                          errors.section && touched.section && errors.section
                        }
                      >
                        <MenuItem value="1">One</MenuItem>
                        <MenuItem value="2">Two</MenuItem>
                        <MenuItem value="3">Three</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        fullWidth
                        margin="normal"
                        id="datetime-local"
                        label="Date"
                        type="date"
                        name="examDate"
                        defaultValue="2017-05-24T10:30"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={values.examDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.examDate && touched.examDate}
                        helperText={
                          errors.examDate && touched.examDate && errors.examDate
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        fullWidth
                        margin="normal"
                        id="datetime-local"
                        label="Time"
                        type="time"
                        name="examTime"
                        defaultValue="2017-05-24T10:30"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={values.examTime}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.examTime && touched.examTime}
                        helperText={
                          errors.examTime && touched.examTime && errors.examTime
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        label="Description"
                        placeholder="Description"
                        fullWidth
                        multiline
                        margin="normal"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.description && touched.description}
                        helperText={
                          errors.description &&
                          touched.description &&
                          errors.description
                        }
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              <Card>
                <Wrapper>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit"
                  >
                    Create
                  </Button>{" "}
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    type="reset"
                  >
                    {" "}
                    Cancel
                  </Button>
                </Wrapper>
              </Card>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

ExamSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExamSchedule);
