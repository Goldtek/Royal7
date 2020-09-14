import React, { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Wrapper } from "../../components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { fetchschoolClasses } from "../../redux/actions/schoolClassActions";
import { Role } from "../../_helpers";
import cogoToast from "cogo-toast";

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
  phone: Yup.number().required("required"),
  dob: Yup.string().required("required"),
  religion: Yup.string().nullable(),
  admissionId: Yup.string().required("required"),
  stdclass: Yup.string().required("required"),
  gender: Yup.string().required("required"),
  address: Yup.string().nullable(),
  photo: Yup.string().nullable(),
  bio: Yup.string().nullable(),
  bloodgrp: Yup.string().required("required"),
  email: Yup.string().email("invalid email").required("required"),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;
const CreateStudent = (props) => {
  const { classes } = props;
  // let history = useHistory();
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.authentication);
  const Classes = useSelector((state) => state.schoolClasses.schoolClasses);
  const schoolID = userAuth.user.schoolId;

  useEffect(() => {
    dispatch(fetchschoolClasses());
  }, [dispatch]);

  // console.log(Role.student);
  // const [randPassWord, setRandPassword] = useState("")

  // const getRandomString = (length) => {
  //   const randomChars =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   let result = "";
  //   for (let i = 0; i < length; i++) {
  //     result += randomChars.charAt(
  //       Math.floor(Math.random() * randomChars.length)
  //     );
  //   }

  //   // this.setState({ random: result });
  //   // console.log(this.state.random);
  // };
  return (
    <Wrapper>
      <Helmet>
        <title>Teachers List</title>
      </Helmet>
      <br />
      <Card>
        <Wrapper>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/dashboard/student/view">
              Student
            </Link>
            <Typography color="textPrimary">Create Student</Typography>
          </Breadcrumbs>
        </Wrapper>
      </Card>

      <AppBar position="static" className={classes.appBar}>
        <Typography color="inherit" className="flexs={12}pacer"></Typography>
      </AppBar>
      <Formik
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          axios({
            method: "POST",
            url: `${API_URL}/users`,
            data: {
              id: uuidv4(),
              firstName: values.firstName,
              middleName: values.middleName,
              lastName: values.lastName,
              gender: values.gender,
              address: values.address,
              dob: values.dob,
              email: values.email,
              phone: values.phone,
              img: values.file,
              shortbio: values.bio,
              bloodgrp: values.bloodgrp,
              stdclass: values.stdclass,
              admissionId: values.admissionId,
              schoolId: schoolID,
              role: Role.Student,
              created: Date.now(),
            },
          })
            .then(() => {
              cogoToast.success("Student Added Successfully!");
              resetForm();
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
          file: "",
          address: "",
          bloodgrp: "",
          bio: "",
          stdclass: "",
          admissionId: "",
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
                {/* <AppBar
                  position="static"
                  color="primary"
                  className={classes.appBar}
                >
                  <Typography
                    color="inherit"
                    className={`${classes.typo} flexs={12}pacer`}
                  >
                    FILL STUDENT INFO
                  </Typography>
                </AppBar> */}
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
                          errors.lastName && touched.lastName && errors.lastName
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
                        id="stdclass"
                        select
                        label="Class"
                        margin="normal"
                        name="stdclass"
                        value={values.stdclass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.stdclass && touched.stdclass}
                        helperText={
                          errors.stdclass && touched.roleId && errors.stdclass
                        }
                      >
                        {Classes.map(({ classCode, id }) => (
                          <MenuItem
                            key={id}
                            value={classCode}
                          >{`${classCode}`}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        fullWidth
                        id="BloodGroup"
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
                        id="admissionId"
                        label="Admission ID"
                        margin="normal"
                        name="admissionId"
                        value={values.admissionId}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.admissionId && touched.admissionId}
                        helperText={
                          errors.admissionId &&
                          touched.admissionId &&
                          errors.admissionId
                        }
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
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                      </TextField>
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
                        type="file"
                        fullWidth
                        id="Photo"
                        label="Photo"
                        margin="normal"
                        name="file"
                        value={values.file}
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
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {/* <SaveIcon className={classes.rightIcon} />  */}
                    Create Student
                  </Button>{" "}
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    type="reset"
                    // onClick={() => getRandomString(6)}
                  >
                    {/* <DeleteIcon className={classes.rightIcon} /> */}
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

CreateStudent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateStudent);
