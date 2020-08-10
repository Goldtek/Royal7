import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useHistory } from "react-router-dom";
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
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
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
  occupation: Yup.string().required("required"),
  gender: Yup.string().required("required"),
  address: Yup.string().required("required"),
  bio: Yup.string().nullable(),
  photo: Yup.string().required("required"),
  email: Yup.string().email("invalid email").required("required"),
});

//API URL
const API_URL = process.env.REACT_APP_BASEURL;

const CreateParent = (props) => {
  // let history = useHistory();
  const { classes } = props;
  return (
    <Wrapper>
      <ToastContainer />
      <Formik
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          axios({
            method: "POST",
            url: `${API_URL}/users`,
            data: {
              email: values.email,
            },
          })
            .then((response) => {
              toast.success(`🚀 Parent Added!`, {
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
          firstName: "",
          lastName: "",
          middleName: "",
          email: "",
          gender: "",
          dob: "",
          phone: "",
          occupation: "",
          photo: "",
          address: "",
          bio: "",
          role: Role.parent,
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
                    <Link color="inherit" href="/getting-started/installation/">
                      Dashboard
                    </Link>
                    <Typography color="textPrimary">Create Parent</Typography>
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
                    CREATE PARENT
                  </Typography>
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
                          errors.lastName && touched.lastName && errors.lastName
                        }
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={3}>
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
                        id="Occupation"
                        label="Occupation"
                        margin="normal"
                        name="occupation"
                        value={values.occupation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.occupation && touched.occupation}
                        helperText={
                          errors.occupation &&
                          touched.occupation &&
                          errors.occupation
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <TextField
                        fullWidth
                        multiline
                        rowsMax="4"
                        id="address"
                        label="Address"
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
};

CreateParent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateParent);
