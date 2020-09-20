import React from "react";
import axios from "axios";
import * as Yup from "yup";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Wrapper } from "../../components";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Role } from "../../_helpers";
import cogoToast from "cogo-toast";

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
  firstName: Yup.string().required("required"),
  middleName: Yup.string().required("required"),
  lastName: Yup.string().required("required"),
  phone: Yup.number("must be a phone number").required("required"),
  dob: Yup.string().required("required"),
  religion: Yup.string().required("required"),
  bloodgrp: Yup.string().required("required"),
  idno: Yup.string().required("required"),
  // tclass: Yup.string().required("required"),
  // section: Yup.string().required("required"),
  shortbio: Yup.string().nullable(),
  gender: Yup.string().required("required"),
  address: Yup.string().required("required"),
  photo: Yup.string().required("required"),
  password: Yup.string().required("required"),
  email: Yup.string().email("invalid email").required("required"),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;
const CreateTeacher = () => {
  const classes = useStyles();
  const userAuth = useSelector((state) => state.authentication);
  const schoolID = userAuth.user.schoolId;

  // let keylist =
  //   "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // let temp = "";
  // const generatepass = (plength) => {
  //   temp = "";
  //   for (let i = 0; i < plength; i++)
  //     temp += keylist.charAt(Math.floor(Math.random() * keylist.length));
  //   return temp;
  // };

  // const populateTextfield = (enterlength) => {
  //   // document.pgenerate.password.value = generatepass(enterlength);
  //   document.getElementById("password").defaultValue = generatepass(
  //     enterlength
  //   );
  //   console.log(document.getElementById("password"));
  // };
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
              password: values.password,
              gender: values.gender,
              dob: values.dob,
              phone: values.phone,
              religion: values.religion,
              photo: values.photo,
              address: values.address,
              bloodgrp: values.bloodgrp,
              // tclass: values.tclass,
              idno: values.idno,
              // section: values.section,
              shortbio: values.shortbio,
              role: Role.Teacher,
              schoolId: schoolID,
              created: Date.now(),
            },
          })
            .then(() => {
              cogoToast.success("Teacher Added Successfully!");
              resetForm();
              // history.push("/dashboard/teachers/view", true);
            })
            .catch((error) => {
              cogoToast.error(error);
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
          password: "%tempPassword!",
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
              <Card>
                <Wrapper>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" to="/dashboard/teachers/view">
                      Teachers
                    </Link>
                    <Typography color="textPrimary">
                      Create Teacher Account
                    </Typography>
                  </Breadcrumbs>
                </Wrapper>
              </Card>
              <AppBar
                position="static"
                color="primary"
                className={classes.appBar}
              ></AppBar>
              <Card
                className={classes.card}
                style={{ marginTop: "5px", marginBottom: "20px" }}
              >
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                      <TextField
                        label="First Name"
                        placeholder="First Name"
                        fullWidth
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
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
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
                        margin="normal"
                        id="bloodgroup"
                        select
                        label="Blood Group"
                        name="bloodgrp"
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
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
                        <MenuItem value="3">AB+</MenuItem>
                        <MenuItem value="4">AB-</MenuItem>
                        <MenuItem value="5">B+</MenuItem>
                        <MenuItem value="6">B-</MenuItem>
                        <MenuItem value="7">O+</MenuItem>
                        <MenuItem value="8">O-</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                      <TextField
                        label="ID NO"
                        placeholder="ID NO"
                        fullWidth
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
                        <MenuItem value="christian">Christianity</MenuItem>
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
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        fullWidth
                        label="Temporary Password"
                        id="password"
                        placeholder="Temporary Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        InputProps={{
                          readOnly: true,
                        }}
                        error={errors.password && touched.password}
                        helperText={
                          errors.password && touched.password && errors.password
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        label="Short Bio"
                        placeholder="Short Bio"
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
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              <Card>
                <Wrapper>
                  <ButtonGroup aria-label="teacher button">
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Create Teacher
                    </Button>

                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      type="reset"
                    >
                      Reset Form
                    </Button>
                  </ButtonGroup>
                </Wrapper>
              </Card>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

// CreateTeacher.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default CreateTeacher;
