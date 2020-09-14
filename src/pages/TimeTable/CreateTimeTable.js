import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
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
}));
const validationSchema = Yup.object().shape({
  class: Yup.string().required("required"),
  day: Yup.string().required("required"),
  section: Yup.string().required("required"),
  subject: Yup.string().required("required"),
  timeSlot: Yup.string().required("required"),
  teacher: Yup.string().required("required"),
  description: Yup.string().nullable(),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const CreateTimeTable = (props) => {
  const classes = useStyles();
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
              timeSlot: values.timeSlot,
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
          class: "",
          day: "",
          description: "",
          timeSlot: "",
          section: "",
          supervisor: "",
          examDate: "",
          subject: "",
          teacher: "",
        }}
        validationSchema={validationSchema}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            // isSubmitting,
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
                      TimeTable
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
                    Create TimeTable
                  </Typography>
                </AppBar>

                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        label="Day"
                        select
                        placeholder="Day"
                        fullWidth
                        margin="normal"
                        name="day"
                        value={values.day}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.day && touched.day}
                        helperText={errors.day && touched.day && errors.day}
                      >
                        <MenuItem value="Monday">Monday</MenuItem>
                        <MenuItem value="Tuesday">Tuesday</MenuItem>
                        <MenuItem value="Wednesday">Wednesday</MenuItem>
                        <MenuItem value="Thursday">Thursday</MenuItem>
                        <MenuItem value="Friday">Friday</MenuItem>
                      </TextField>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        label="Time Slot"
                        placeholder="10.00 am-11.00 am"
                        fullWidth
                        margin="normal"
                        name="timeSlot"
                        value={values.timeSlot}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.timeSlot && touched.timeSlot}
                        helperText={
                          errors.timeSlot && touched.timeSlot && errors.timeSlot
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
                        name="day"
                        value={values.class}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.class && touched.class}
                        helperText={
                          errors.class && touched.class && errors.class
                        }
                      >
                        <MenuItem value="STD5">STD5</MenuItem>
                        <MenuItem value="STD6">STD6</MenuItem>
                      </TextField>
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
                        <MenuItem value="STD5">STD8</MenuItem>
                        <MenuItem value="STD6">STD7</MenuItem>
                      </TextField>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        label="Subject"
                        select
                        placeholder="Subject"
                        fullWidth
                        margin="normal"
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.subject && touched.subject}
                        helperText={
                          errors.subject && touched.subject && errors.subject
                        }
                      />
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
                        <MenuItem value="STD5">Onah James</MenuItem>
                        <MenuItem value="STD6">Michael Joe</MenuItem>
                      </TextField>
                    </Grid>
                    {/* <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Class Room"
                        name="classRoom"
                        value={values.classRoom}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.classRoom && touched.classRoom}
                        helperText={
                          errors.classRoom &&
                          touched.classRoom &&
                          errors.classRoom
                        }
                      />
                    </Grid> */}
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

CreateTimeTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default CreateTimeTable;
