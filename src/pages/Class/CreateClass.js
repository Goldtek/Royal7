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
  tname: Yup.string().required("required"),
  idNo: Yup.string().required("required"),
  subject: Yup.string().required("required"),
  phone: Yup.number("must be a phone number").required("required"),
  tclass: Yup.string().required("required"),
  classTime: Yup.string().required("required"),
  gender: Yup.string().required("required"),
  section: Yup.string().required("required"),
  classDate: Yup.string().required("required"),
  classCode: Yup.string().required("required"),
  email: Yup.string().email("invalid email").required("required"),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const CreateClass = (props) => {
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
              teacherName: values.tname,
              teacherIdNo: values.idNo,
              email: values.email,
              gender: values.gender,
              phone: values.phone,
              tclass: values.tclass,
              classTime: values.classTime,
              section: values.section,
              classDate: values.classDate,
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
              // history.push(`/sent/${values.email}`, true);
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
          tname: "",
          idNo: "",
          email: "",
          gender: "",
          phone: "",
          tclass: "",
          classTime: "",
          section: "",
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
                      Class
                    </Link>
                    <Typography color="textPrimary">
                      New Class Schedule
                    </Typography>
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
                        label="Teacher Name"
                        placeholder="Teacher Name"
                        fullWidth
                        margin="normal"
                        name="tname"
                        value={values.tname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.tname && touched.tname}
                        helperText={
                          errors.tname && touched.tname && errors.tname
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        label="ID NO"
                        placeholder="ID NO"
                        fullWidth
                        margin="normal"
                        name="idNo"
                        value={values.idNo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.idNo && touched.idNo}
                        helperText={errors.idNo && touched.idNo && errors.idNo}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        fullWidth
                        id="Gender"
                        name="gender"
                        select
                        label="Gender"
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        margin="normal"
                        value={values.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.gender && touched.gender}
                        helperText={
                          errors.gender && touched.gender && errors.gender
                        }
                      >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid container spacing={3}>
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
                          fullWidth
                          margin="normal"
                          id="classCode"
                          label="Class Code"
                          placeholder="Class Code"
                          name="classCode"
                          value={values.classCode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.classCode && touched.classCode}
                          helperText={
                            errors.classCode &&
                            touched.classCode &&
                            errors.classCode
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={4}>
                        <TextField
                          label="Subject"
                          select
                          placeholder="Class"
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
                        >
                          <MenuItem value="1">One</MenuItem>
                          <MenuItem value="2">Two</MenuItem>
                          <MenuItem value="3">Three</MenuItem>
                        </TextField>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        fullWidth
                        margin="normal"
                        id="datetime-local"
                        label="Date"
                        type="date"
                        name="classDate"
                        defaultValue="2017-05-24T10:30"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={values.classDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.classDate && touched.classDate}
                        helperText={
                          errors.classDate &&
                          touched.classDate &&
                          errors.classDate
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
                        name="classTime"
                        defaultValue="2017-05-24T10:30"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={values.classTime}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.classTime && touched.classTime}
                        helperText={
                          errors.classTime &&
                          touched.classTime &&
                          errors.classTime
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
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        type="email"
                        label="Email"
                        placeholder="Email"
                        fullWidth
                        margin="normal"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.email && touched.email}
                        helperText={
                          errors.email && touched.email && errors.email
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        fullWidth
                        multiline
                        rowsMax="4"
                        id="phone"
                        label="Phone"
                        margin="normal"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.phone && touched.phone}
                        helperText={
                          errors.phone && touched.phone && errors.phone
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

CreateClass.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateClass);
