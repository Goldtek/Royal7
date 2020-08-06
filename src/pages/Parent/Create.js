import React from "react";
import PropTypes from "prop-types";
// import axios from "axios"
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
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

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
});

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("required"),
  middleName: Yup.string().required("required"),
  lastName: Yup.string().required("required"),
  phone: Yup.number("must be a phone number").required("required"),
  dob: Yup.string().required("required"),
  religion: Yup.string().required("required"),
  state: Yup.string().required("required"),
  gender: Yup.string().required("required"),
  address: Yup.string().required("required"),
  country: Yup.string().required("required"),
  photo: Yup.string().required("required"),
  institution: Yup.string().required("required"),
  degree: Yup.string().required("required"),
  yrPassedOut: Yup.string().nullable(),
  yrPassedOut1: Yup.string().nullable(),
  cgpa: Yup.string().nullable(),
  cgpa1: Yup.string().nullable(),
  institution1: Yup.string().nullable(),
  degree1: Yup.string().nullable(),
  email: Yup.string().email("invalid email").required("required"),
});

// const occupations = ['Doctor', 'Teacher', 'Nurse'];

// const names = [
//     'Oliver Hansen',
//     'Van Henry',
//     'April Tucker',
//     'Ralph Hubbard',
//     'Omar Alexander',
//     'Carlos Abbott',
//     'Miriam Wagner',
//     'Bradley Wilkerson',
//     'Virginia Andrews',
//     'Kelly Snyder',
// ];

class CreateParent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Wrapper>
        <Formik
          // onSubmit={(values, { setSubmitting, resetForm }) => {
          //     setSubmitting(true);
          //     axios({
          //         method: "POST",
          //         url: `${ApiUrl}/api/send/mail`,
          //         data: {
          //             email: values.email,
          //         },
          //     })
          //         .then((response) => {
          //             toast.success(`Message Sent!`, {
          //                 position: "top-right",
          //                 autoClose: 15000,
          //                 hideProgressBar: false,
          //                 closeOnClick: true,
          //                 pauseOnHover: true,
          //                 draggable: true,
          //                 progress: undefined,
          //             });

          //             resetForm();
          //             history.push(
          //                 `/sent/${values.email}`,
          //                 true
          //             );
          //         })
          //         .catch((error) => {
          //             toast.error(`${error}`, {
          //                 position: "top-right",
          //                 autoClose: 15000,
          //                 hideProgressBar: false,
          //                 closeOnClick: true,
          //                 pauseOnHover: true,
          //                 draggable: true,
          //                 progress: undefined,
          //             });
          //             resetForm();
          //         });
          // }}

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
            zip: "",
            institution: "",
            institution1: "",
            degree: "",
            degree1: "",
            cgpa: "",
            cgpa1: "",
            country: "",
            state: "",
            yrPassedOut: "",
            yrPassedOut1: "",
            bldgrp: "",
            bio: "",
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
                <Card
                  className={classes.card}
                  style={{ marginTop: "5px", marginBottom: "20px" }}
                >
                  <AppBar
                    position="static"
                    color="default"
                    className={classes.appBar}
                  >
                    <Toolbar>
                      <Typography
                        color="inherit"
                        className="flexs={12}pacer"
                        variant="h6"
                      >
                        ADD PARENT INFO
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
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
                      <Grid item xs={12} sm={6} md={4} lg={4}>
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
                      <Grid item xs={12} sm={6} md={4} lg={4}>
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
                            errors.lastName &&
                            touched.lastName &&
                            errors.lastName
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
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
                      <Grid item xs={12} sm={6} md={4} lg={4}>
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
                            errors.religion &&
                            touched.religion &&
                            errors.religion
                          }
                        >
                          <MenuItem value="christian">Christian</MenuItem>
                          <MenuItem value="islamic">Islamic</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TextField
                          fullWidth
                          id="BloodGroup"
                          select
                          label="Blood Group"
                          margin="normal"
                          name="bldgrp"
                          value={values.bldgrp}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.bldgrp && touched.bldgrp}
                          helperText={
                            errors.bldgrp && touched.bldgrp && errors.bldgrp
                          }
                        >
                          <MenuItem value="1">A+</MenuItem>
                          <MenuItem value="2">A-</MenuItem>
                          <MenuItem value="3">B+</MenuItem>
                          <MenuItem value="4">B-</MenuItem>
                          <MenuItem value="5">O+</MenuItem>
                          <MenuItem value="6">O-</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TextField
                          fullWidth
                          multiline
                          rowsMax="4"
                          id="admissionID"
                          label="Admission ID"
                          margin="normal"
                          name="admisiionID"
                          value={values.admisiionID}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.admisiionID && touched.admisiionID}
                          helperText={
                            errors.admisiionID &&
                            touched.admisiionID &&
                            errors.admisiionID
                          }
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <TextField
                          fullWidth
                          multiline
                          rowsMax="4"
                          id="bio"
                          label="Short BIO"
                          margin="normal"
                          name="bio"
                          value={values.bio}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.bio && touched.bio}
                          helperText={errors.bio && touched.bio && errors.bio}
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
                      <Grid item xs={12} sm={6} md={4} lg={4}>
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
                {/* <Card className={classes.card} style={{ marginBottom: "20px" }}>
                                    <AppBar position="static" color="default" className={classes.appBar}>
                                        <Toolbar>
                                            <Typography color="inherit" className="flexs={12}pacer" variant="h6">
                                                PARENT INFO
                                            </Typography>

                                        </Toolbar>
                                    </AppBar>
                                    <CardContent>


                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={12} md={3} lg={3}>

                                                <TextField
                                                    label="Fathter Name"
                                                    placeholder="Father Name"
                                                    fullWidth
                                                    margin="normal"
                                                    name="fatherName"
                                                    value={values.fatherName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={errors.fatherName && touched.fatherName}
                                                    helperText={(errors.fatherName && touched.fatherName) && errors.fatherName}
                                                />

                                            </Grid>
                                            <Grid item xs={12} sm={12} md={3} lg={3}>

                                                <TextField
                                                    label="Mother Name"
                                                    placeholder="Mother Name"
                                                    fullWidth
                                                    margin="normal"
                                                    name="motherName"
                                                    value={values.motherName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={errors.motherName && touched.motherName}
                                                    helperText={(errors.motherName && touched.motherName) && errors.motherName}
                                                />

                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4}>


                                                <TextField
                                                    fullWidth
                                                    id="occupation"
                                                    select
                                                    label="occupation"
                                                    SelectProps={{
                                                        MenuProps: {
                                                            className: classes.menu,
                                                        },
                                                    }}

                                                    margin="normal"
                                                    name="occupation"
                                                    value={values.occupation}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={errors.occupation && touched.occupation}
                                                    helperText={(errors.occupation && touched.occupation) && errors.occupation}
                                                >
                                                    <MenuItem value="doctor">Doctor</MenuItem>
                                                    <MenuItem value="Nurse">Nurse</MenuItem>
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                                <TextField
                                                    label="Contact"
                                                    placeholder="Contact"
                                                    fullWidth
                                                    margin="normal"
                                                    name="contact"
                                                    value={values.contact}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={errors.contact && touched.contact}
                                                    helperText={(errors.contact && touched.contact) && errors.contact}
                                                />

                                            </Grid>

                                        </Grid>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6} md={4} lg={4}>

                                                <TextField
                                                    fullWidth
                                                    id="email"
                                                    label="Email"
                                                    margin="normal"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={errors.email && touched.email}
                                                    helperText={(errors.email && touched.zip) && errors.email}
                                                />

                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4}>


                                                <TextField
                                                    fullWidth
                                                    id="religion"
                                                    select
                                                    label="Religion"
                                                    SelectProps={{
                                                        MenuProps: {
                                                            className: classes.menu,
                                                        },
                                                    }}

                                                    margin="normal"
                                                    name="parentReligion"
                                                    value={values.parentReligion}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={errors.parentReligion && touched.parentReligion}
                                                    helperText={(errors.parentReligion && touched.parentReligion) && errors.parentReligion}
                                                >
                                                    <MenuItem value="christian">Christian</MenuItem>
                                                    <MenuItem value="islamic">Islamic</MenuItem>
                                                </TextField>

                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4}>


                                                <TextField
                                                    fullWidth
                                                    id="nationality"
                                                    select
                                                    label="Nationality"
                                                    SelectProps={{
                                                        MenuProps: {
                                                            className: classes.menu,
                                                        },
                                                    }}

                                                    margin="normal"
                                                    name="nationality"
                                                    value={values.nationality}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={errors.nationality && touched.nationality}
                                                    helperText={(errors.nationality && touched.nationality) && errors.nationality}
                                                >
                                                    <MenuItem value="Nigeria">Nigeria</MenuItem>
                                                    <MenuItem value="Ghana">Ghana</MenuItem>
                                                </TextField>

                                            </Grid>
                                        </Grid>
                                    </CardContent>

                                </Card> */}

                {/* <Card className={classes.card} style={{ marginBottom: "20px" }}>
                                    <AppBar position="static" color="default" className={classes.appBar}>
                                        <Toolbar>
                                            <Typography color="inherit" className="flexs={12}pacer" variant="h6">
                                                ACADEMIC INFO

                                            </Typography>
                                        </Toolbar>
                                    </AppBar>
                                    <CardContent>


                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6} md={4} lg={4}>

                                                <TextField
                                                    label="Registration #"
                                                    placeholder="Registration"
                                                    name="registration"
                                                    fullWidth
                                                    margin="normal"
                                                    value={values.registration}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={errors.registration && touched.registration}
                                                    helperText={(errors.registration && touched.registration) && errors.registration}
                                                />

                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4}>

                                                <TextField
                                                    label="Class"
                                                    placeholder="Class"
                                                    name="stdclass"
                                                    fullWidth
                                                    margin="normal"
                                                    value={values.stdclass}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={errors.stdclass && touched.stdclass}
                                                    helperText={(errors.stdclass && touched.stdclass) && errors.stdclass}
                                                />

                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4}>

                                                <TextField
                                                    fullWidth
                                                    id="stdSection"
                                                    select
                                                    label="Nationality"
                                                    SelectProps={{
                                                        MenuProps: {
                                                            className: classes.menu,
                                                        },
                                                    }}

                                                    margin="normal"
                                                    name="stdSection"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={errors.stdSection && touched.stdSection}
                                                    helperText={(errors.stdSection && touched.stdSection) && errors.stdSection}
                                                >
                                                    <MenuItem value="">sample</MenuItem>
                                                    <MenuItem value="">sample</MenuItem>
                                                </TextField>

                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4}>

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
                                                    helperText={(errors.cgpa && touched.cgpa) && errors.cgpa}
                                                />

                                            </Grid>

                                        </Grid>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6} md={4} lg={4}>

                                                <TextField
                                                    label="Role"
                                                    placeholder="Role"
                                                    name="stdRole"
                                                    fullWidth
                                                    margin="normal"
                                                    value={values.stdRole}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={errors.stdRole && touched.stdRole}
                                                    helperText={(errors.stdRole && touched.stdRole) && errors.stdRole}
                                                />

                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4}>

                                                <TextField
                                                    label="Last School"
                                                    placeholder="Last School"
                                                    name="lastSchool"
                                                    fullWidth
                                                    margin="normal"
                                                    value={values.lastSchool}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={errors.lastSchool && touched.lastSchool}
                                                    helperText={(errors.lastSchool && touched.lastSchool) && errors.lastSchool}
                                                />

                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                                <TextField
                                                    fullWidth
                                                    label="Sports"
                                                    margin="normal"
                                                    name="sport"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={errors.sport && touched.sport}
                                                    helperText={(errors.sport && touched.sport) && errors.sport}

                                                />

                                            </Grid>
                                             </Grid>
                                    </CardContent>

                                </Card> */}

                <Card>
                  <Wrapper>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      type="submit"
                    >
                      <SaveIcon
                        className={classes.rightIcon}
                        disabled={isSubmitting}
                      />{" "}
                      Save
                    </Button>{" "}
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      type="reset"
                    >
                      <DeleteIcon className={classes.rightIcon} /> Cancel
                    </Button>
                  </Wrapper>
                </Card>
              </Form>
            );
          }}
        </Formik>
      </Wrapper>
    );
  }
}

CreateParent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateParent);
