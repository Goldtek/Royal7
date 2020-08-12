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
  section: Yup.string().required("required"),
  sectionCode: Yup.string().required("required"),
  subject: Yup.string().required("required"),
  description: Yup.number("must be a description number").required("required"),
  tclass: Yup.string().required("required"),
  classTime: Yup.string().required("required"),
  sectionClass: Yup.string().required("required"),
  section: Yup.string().required("required"),
  classDate: Yup.string().required("required"),
  email: Yup.string().email("invalid email").required("required"),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const CreateSection = (props) => {
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
              teacherName: values.section,
              teachersectionCode: values.sectionCode,
              email: values.email,
              sectionClass: values.sectionClass,
              description: values.description,
              tclass: values.tclass,
              classTime: values.classTime,
              section: values.section,
              classDate: values.classDate,
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
          section: "",
          sectionCode: "",
          email: "",
          sectionClass: "",
          description: "",
          tclass: "",
          classTime: "",
          section: "",
          classDate: "",
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
                    <Link color="inherit" href="/dashboard/class">
                      Class
                    </Link>
                    <Typography color="textPrimary">New Section</Typography>
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
                    Section
                  </Typography>
                </AppBar>

                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        label="Section Name"
                        placeholder="Section Name"
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
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        fullWidth
                        id="sectionClass"
                        name="sectionClass"
                        select
                        label="Section Class"
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        margin="normal"
                        value={values.sectionClass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.sectionClass && touched.sectionClass}
                        helperText={
                          errors.sectionClass &&
                          touched.sectionClass &&
                          errors.sectionClass
                        }
                      >
                        <MenuItem value="STD5">STD5</MenuItem>
                        <MenuItem value="STD6">STD6</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        label="Section Code"
                        placeholder="Section Code"
                        fullWidth
                        margin="normal"
                        name="sectionCode"
                        value={values.sectionCode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.sectionCode && touched.sectionCode}
                        helperText={
                          errors.sectionCode &&
                          touched.sectionCode &&
                          errors.sectionCode
                        }
                      />
                    </Grid>

                    <Grid container spacing={3}></Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        fullWidth
                        multiline
                        rowsMax="4"
                        placeholder="Description"
                        id="description"
                        label="Description"
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

CreateSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateSection);
