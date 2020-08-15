import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLogout } from "../../redux/actions/userActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
// import Button from '@material-ui/core/Button';
import CloseIcon from "@material-ui/icons/Close";
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  password: Yup.string().required("required"),
  email: Yup.string().email("invalid email").required("required"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
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
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },

  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LoginPage = (props) => {
  const classes = useStyles();
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const alert = useSelector((state) => state.alert);
  const [statInfo, setSateInfo] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  // const [counter, setCounter] = React.useState(10);
  // console.log(statInfo);
  // reset login status

  // const Toast = Swal.mixin({
  //   toast: true,
  //   position: "top-end",
  //   showConfirmButton: false,
  //   timer: 3000,
  //   timerProgressBar: true,
  //   onOpen: (toast) => {
  //     toast.addEventListener("mouseenter", Swal.stopTimer);
  //     toast.addEventListener("mouseleave", Swal.resumeTimer);
  //   },
  // });

  const Clear = () => {
    const { history } = props;
    //use the state via location.state
    //and replace the state via
    history.replace();
    console.log(props);
  };

  useEffect(() => {
    let stateAlert = props.location.state;
    let alerts = stateAlert === undefined ? undefined : stateAlert;
    dispatch(userLogout());
    setSateInfo(alerts);
    setOpen(true);
    //set timer for error display
    // const timer =
    //   counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    // return () => clearInterval(timer);
  }, [dispatch, props.location.state]);

  // counter ? console.log(counter) : props.history.replace();

  return (
    <Grid container component="main" className={classes.root}>
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
            initialValues={{ password: "", email: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              const data = {
                email: values.email,
                password: values.password,
                role: "admin",
              };
              dispatch(userLogin(data));
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
                    src={`${process.env.PUBLIC_URL}/static/images/logo/logo-clear.png`}
                    alt=""
                    // className="block"
                  />
                  <Typography variant="h6">
                    Sign in with your details to continue.
                  </Typography>
                  {alert.type === "alert-danger" ? (
                    <React.Fragment>
                      <Snackbar
                        open={open}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        autoHideDuration={6000}
                      >
                        <Alert
                          severity="error"
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setOpen(false);
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }
                        >
                          {"Error: Email or Password is incorrect, try again"}
                          {/* {dispatch(alertActions.clear())} */}
                        </Alert>
                      </Snackbar>
                    </React.Fragment>
                  ) : statInfo !== undefined ? (
                    <React.Fragment>
                      <Snackbar
                        open={open}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        autoHideDuration={6000}
                      >
                        <Alert
                          severity="error"
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setOpen(false);
                                Clear();
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }
                        >
                          {statInfo ? statInfo.info : null}
                        </Alert>
                      </Snackbar>
                    </React.Fragment>
                  ) : null}
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
                <TextField
                  id="password"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                />
                <FormControlLabel
                  control={<Checkbox value="checkedA" />}
                  label="Stayed logged in"
                  className={classes.fullWidth}
                />

                <div className={classes.wrapper}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    disabled={loggingIn}
                  >
                    Login
                  </Button>
                  {loggingIn && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
                <div className="pt-1 text-sm-center">
                  <Link to="/forgot">
                    <Button>
                      <Typography
                        className="flexSpacer"
                        style={{ fontSize: "0.875rem" }}
                      >
                        Forgot password?
                      </Typography>
                    </Button>
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

export default LoginPage;
