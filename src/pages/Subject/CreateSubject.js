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
  subjectName: Yup.string().required("required"),
  subject: Yup.string().required("required"),
  subjectCode: Yup.string().required("required"),
  teacher: Yup.string().required("required"),
  classCode: Yup.string().required("required"),
  description: Yup.string().nullable(),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const CreateSubject = (props) => {
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
              subjectName: values.subjectName,
              description: values.description,
              subjectCode: values.subjectCode,
              teacher: values.teacher,
              subject: values.subject,
              classCode: values.classCode,
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
          subjectName: "",
          idNo: "",
          description: "",
          subjectCode: "",
          phone: "",
          tclass: "",
          classTime: "",
          teacher: "",
          classDate: "",
          subject: "",
          classCode: "",
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
                    <Link color="inherit" href="/dashboard/class">
                      Subject
                    </Link>
                    <Typography color="textPrimary">Create Subject</Typography>
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
                    Add New Class Schedule
                  </Typography>
                </AppBar>

                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        label="Subject Name"
                        placeholder="Subject Name"
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

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        label="Subject Code"
                        placeholder="Subject Code"
                        fullWidth
                        margin="normal"
                        name="subjectCode"
                        value={values.subjectCode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.subjectCode && touched.subjectCode}
                        helperText={
                          errors.subjectCode &&
                          touched.subjectCode &&
                          errors.subjectCode
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
                        name="tclass"
                        value={values.tclass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.tclass && touched.tclass}
                        helperText={
                          errors.tclass && touched.tclass && errors.tclass
                        }
                      >
                        <MenuItem value="1">One</MenuItem>
                        <MenuItem value="2">Two</MenuItem>
                        <MenuItem value="3">Three</MenuItem>
                      </TextField>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        label="Teacher"
                        select
                        placeholder="Teacher"
                        fullWidth
                        margin="normal"
                        name="teacher"
                        value={values.teacher}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.teacher && touched.teacher}
                        helperText={
                          errors.teacher && touched.teacher && errors.teacher
                        }
                      >
                        <MenuItem value="1">One</MenuItem>
                        <MenuItem value="2">Two</MenuItem>
                      </TextField>
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

CreateSubject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateSubject);
