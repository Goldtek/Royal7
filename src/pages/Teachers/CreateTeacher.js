import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Wrapper } from "../../components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import { withStyles } from "@material-ui/core/styles";
import { Role } from "../../_helpers";
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
  firstName: Yup.string().required("required"),
  middleName: Yup.string().required("required"),
  lastName: Yup.string().required("required"),
  phone: Yup.number("must be a phone number").required("required"),
  dob: Yup.string().required("required"),
  religion: Yup.string().required("required"),
  bloodgrp: Yup.string().required("required"),
  idno: Yup.string().required("required"),
  tclass: Yup.string().required("required"),
  section: Yup.string().required("required"),
  shortbio: Yup.string().nullable(),
  // state: Yup.string().required("required"),
  gender: Yup.string().required("required"),
  address: Yup.string().required("required"),
  // country: Yup.string().required("required"),
  photo: Yup.string().required("required"),
  // institution: Yup.string().required("required"),
  // institution1: Yup.string().nullable(),
  // degree: Yup.string().required("required"),
  // degree1: Yup.string().nullable(),
  // yrPassedOut: Yup.string().nullable(),
  // yrPassedOut1: Yup.string().nullable(),
  // cgpa: Yup.string().nullable(),
  // cgpa1: Yup.string().nullable(),
  email: Yup.string().email("invalid email").required("required"),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;
const CreateTeacher = (props) => {
  const { classes } = props;
  let history = useHistory();
  return (
    <Wrapper>
      <Formik
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          axios({
            method: "POST",
            url: `${API_URL}/users`,
            data: {
              firstName: values.firstName,
              lastName: values.lastName,
              middleName: values.middleName,
              email: values.email,
              gender: values.gender,
              dob: values.dob,
              phone: values.phone,
              religion: values.religion,
              photo: values.photo,
              address: values.address,
              bloodgrp: values.bloodgrp,
              tclass: values.tclass,
              idno: values.idno,
              section: values.section,
              shortbio: values.shortbio,
              role: Role.teacher,
            },
          })
            .then((response) => {
              toast.success(`🚀 Teacher Added Successfully!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });

              resetForm();
              history.push("/dashboard/teachers/view", true);
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
            });
        }}
        initialValues={{
          firstName: "",
          lastName: "",
          middleName: "",
          email: "",
          gender: "",
          dob: "",
          phone: "",
          religion: "",
          photo: "",
          address: "",
          bloodgrp: "",
          tclass: "",
          idno: "",
          section: "",
          shortbio: "",
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
              <ToastContainer />
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
                    ADD NEW TEACHER
                  </Typography>
                </AppBar>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                      <TextField
                        label="First Name"
                        placeholder="First Name"
                        fullWidth
                        margin="normal"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.firstName && touched.firstName}
                        helperText={
                          errors.firstName &&
                          touched.firstName &&
                          errors.firstName
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                      <TextField
                        label="Middle Name"
                        placeholder="Middle Name"
                        fullWidth
                        margin="normal"
                        name="middleName"
                        value={values.middleName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.middleName && touched.middleName}
                        helperText={
                          errors.middleName &&
                          touched.middleName &&
                          errors.middleName
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                      <TextField
                        label="Last Name"
                        placeholder="Last Name"
                        fullWidth
                        margin="normal"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.lastName && touched.lastName}
                        helperText={
                          errors.lastName && touched.lastName && errors.lastName
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
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
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                      <TextField
                        fullWidth
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        margin="normal"
                        name="dob"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.dob && touched.dob}
                        helperText={errors.dob && touched.dob && errors.dob}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                      <TextField
                        type="number"
                        label="Phone Number"
                        placeholder="Phone Number"
                        fullWidth
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
                    <Grid item xs={12} sm={6} md={3} lg={3}>
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
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                      <TextField
                        fullWidth
                        id="bloodgroup"
                        select
                        label="Blood Group"
                        margin="normal"
                        name="bloodgrp"
                        value={values.bloodgrp}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.bloodgrp && touched.bloodgrp}
                        helperText={
                          errors.bloodgrp && touched.bloodgrp && errors.bloodgrp
                        }
                      >
                        <MenuItem value="1">A+</MenuItem>
                        <MenuItem value="2">A-</MenuItem>
                        <MenuItem value="3">B+</MenuItem>
                        <MenuItem value="3">B-</MenuItem>
                        <MenuItem value="3">O+</MenuItem>
                        <MenuItem value="3">O-</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                      <TextField
                        label="ID NO"
                        placeholder="ID NO"
                        fullWidth
                        margin="normal"
                        name="idno"
                        value={values.idno}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.idno && touched.idno}
                        helperText={errors.idno && touched.idno && errors.idno}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
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
                        <MenuItem value="3">Four</MenuItem>
                        <MenuItem value="3">Five</MenuItem>
                        <MenuItem value="3">Six</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
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
                        <MenuItem value="3">Four</MenuItem>
                        <MenuItem value="3">Five</MenuItem>
                        <MenuItem value="3">Six</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                      <TextField
                        fullWidth
                        id="Religion"
                        select
                        label="Religion"
                        margin="normal"
                        name="religion"
                        value={values.religion}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.religion && touched.religion}
                        helperText={
                          errors.religion && touched.religion && errors.religion
                        }
                      >
                        <MenuItem value="christian">Christian</MenuItem>
                        <MenuItem value="islamic">Islamic</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        label="Address"
                        placeholder="Address"
                        multiline
                        fullWidth
                        margin="normal"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.address && touched.address}
                        helperText={
                          errors.address && touched.address && errors.address
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        label="SHORT BIO"
                        placeholder="SHORT BIO"
                        multiline
                        fullWidth
                        margin="normal"
                        name="shortbio"
                        value={values.shortbio}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.shortbio && touched.shortbio}
                        helperText={
                          errors.shortbio && touched.shortbio && errors.shortbio
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        type="file"
                        fullWidth
                        id="Photo"
                        label="Photo"
                        margin="normal"
                        name="photo"
                        value={values.photo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.photo && touched.photo}
                        helperText={
                          errors.photo && touched.photo && errors.photo
                        }
                      />
                    </Grid>{" "}
                  </Grid>
                </CardContent>
              </Card>
              {/* <Card className={classes.card} style={{ marginBottom: "20px" }}>
                  <AppBar
                    position="static"
                    color="primary"
                    className={classes.appBar}
                  >
                    <Typography color="inherit" className="flexs={12}pacer">
                      CONTACT INFORMATION
                    </Typography>
                  </AppBar>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={6} lg={6}>
                        <TextField
                          label="Address"
                          placeholder="Address"
                          fullWidth
                          margin="normal"
                          name="address"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.address && touched.address}
                          helperText={
                            errors.address && touched.address && errors.address
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField
                          fullWidth
                          id="Country"
                          select
                          label="Country"
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          margin="normal"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.country && touched.country}
                          helperText={
                            errors.country && touched.country && errors.country
                          }
                        >
                          <MenuItem value="male">Nigeria</MenuItem>
                          <MenuItem value="female">Ghana</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField
                          fullWidth
                          id="State"
                          select
                          label="State"
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          margin="normal"
                          name="state"
                          value={values.state}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.state && touched.state}
                          helperText={
                            errors.state && touched.state && errors.state
                          }
                        >
                          <MenuItem value="male">Lagos</MenuItem>
                          <MenuItem value="female">Accra</MenuItem>
                        </TextField>
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField
                          fullWidth
                          id="zip"
                          label="ZIP"
                          margin="normal"
                          name="zip"
                          value={values.zip}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.zip && touched.zip}
                          helperText={errors.zip && touched.zip && errors.zip}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
                <Card className={classes.card} style={{ marginBottom: "20px" }}>
                  <AppBar
                    position="static"
                    color="primary"
                    className={classes.appBar}
                  >
                    <Typography color="inherit" className="flexs={12}pacer">
                      ACADEMIC INFORMATION
                    </Typography>
                  </AppBar>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField
                          label="Highest Degree"
                          placeholder="Highest Degree"
                          name="degree"
                          fullWidth
                          margin="normal"
                          value={values.degree}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.degree && touched.degree}
                          helperText={
                            errors.degree && touched.degree && errors.degree
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField
                          label="University/College"
                          placeholder="University/College"
                          fullWidth
                          margin="normal"
                          name="institution"
                          value={values.institution}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.institution && touched.institution}
                          helperText={
                            errors.institution &&
                            touched.institution &&
                            errors.institution
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField
                          fullWidth
                          id="date"
                          label="Year Attended"
                          type="date"
                          defaultValue="2017-05-24"
                          margin="normal"
                          name="yrPassedOut"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.yrPassedOut && touched.yrPassedOut}
                          helperText={
                            errors.yrPassedOut &&
                            touched.yrPassedOut &&
                            errors.yrPassedOut
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField
                          fullWidth
                          id="CGPA"
                          label="CGPA"
                          margin="normal"
                          name="cgpa"
                          value={values.cgpa}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.cgpa && touched.cgpa}
                          helperText={
                            errors.cgpa && touched.cgpa && errors.cgpa
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField
                          label="Other Degree"
                          placeholder="Highest Degree"
                          name="degree1"
                          fullWidth
                          margin="normal"
                          value={values.degree1}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.degree1 && touched.degree1}
                          helperText={
                            errors.degree1 && touched.degree1 && errors.degree1
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField
                          label="University/College"
                          placeholder="University/College"
                          fullWidth
                          margin="normal"
                          name="institution1"
                          value={values.institution1}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.institution1 && touched.institution1}
                          helperText={
                            errors.institution1 &&
                            touched.institution1 &&
                            errors.institution1
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField
                          fullWidth
                          id="date"
                          label="Year Attended"
                          type="date"
                          defaultValue="2017-05-24"
                          margin="normal"
                          name="yrPassedOut1"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.yrPassedOut1 && touched.yrPassedOut1}
                          helperText={
                            errors.yrPassedOut1 &&
                            touched.yrPassedOut1 &&
                            errors.yrPassedOut1
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField
                          fullWidth
                          id="CGPA"
                          label="CGPA"
                          margin="normal"
                          name="cgpa1"
                          value={values.cgpa1}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.cgpa1 && touched.cgpa1}
                          helperText={
                            errors.cgpa1 && touched.cgpa1 && errors.cgpa1
                          }
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card> */}

              <Card>
                {" "}
                <Wrapper>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <SaveIcon className={classes.rightIcon} /> Save
                  </Button>{" "}
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    type="reset"
                  >
                    <DeleteIcon className={classes.rightIcon} /> Reset
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

CreateTeacher.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateTeacher);
