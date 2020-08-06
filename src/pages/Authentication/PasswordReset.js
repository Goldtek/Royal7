import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import Link from '@material-ui/core/Link';
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import classNames from "classnames";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import * as Yup from "yup";
// import { useHistory } from "react-router-dom";

const API_URL = process.env.REACT_APP_BASEURL;

const validationSchema = Yup.object().shape({
  email: Yup.string().email("invalid email").required("required"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    // backgroundImage: `url(${process.env.PUBLIC_URL}/static/images/screens/screen1.jpg)`,
    backgroundImage: `url(${process.env.PUBLIC_URL}/static/images/logo/login.png)`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
    overflow: "visible",
  },

  content: {
    padding: `40px ${theme.spacing(1)}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 0 auto",
    flexDirection: "column",
    minHeight: "100%",
    textAlign: "center",
  },
  session: {
    position: "relative",
    zIndex: 4000,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  background: {
    // backgroundColor: theme.palette.primary.main,
    // backgroundImage: `url(${process.env.PUBLIC_URL}/static/images/logo/login.png)`,
    // backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  fullWidth: {
    width: "100%",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
  },
}));

const PasswordReset = () => {
  const classes = useStyles();
  // const history = useHistory();

  return (
    <Grid container component="main" className={classes.root}>
      <ToastContainer />
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        component={Paper}
        elevation={6}
        square
        className={classNames(classes.session, classes.background)}
      >
        <div className={classes.content}>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              const data = {
                email: values.email,
              };

              axios({
                method: "POST",
                url: `${API_URL}/passwordreset`,
                data,
              })
                .then((res) => {
                  resetForm();
                  setSubmitting(false);
                })
                .catch((err) => {
                  toast.error(`${err}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                });
            }}
          >
            {({
              values,
              handleSubmit,
              isSubmitting,
              handleChange,
              touched,
              errors,
              handleBlur,
            }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/static/images/logo/logo-single-dark.png`}
                    alt=""
                    // className="block"
                  />
                  <Typography variant="h6">
                    Enter your email we will send you instructions on how to
                    reset your password
                  </Typography>
                </div>
                <TextField
                  id="email"
                  label="Email"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email && errors.email}
                />

                {/* <FormControlLabel
                        control={<Checkbox value="checkedA" />}
                        label="Stayed logged in"
                        className={classes.fullWidth}
                      /> */}
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  className="mt-2"
                >
                  Reset password
                </Button>
                <div className="pt-1 text-md-center">
                  <Link to="/signin">
                    <Button>Signin</Button>
                  </Link>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </Grid>
      <Grid item xs={false} sm={false} md={9} className={classes.image} />
    </Grid>
  );
};
export default PasswordReset;
