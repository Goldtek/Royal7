import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Grid,
} from "@material-ui/core";
import { useAlert } from "react-alert";
import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import SchoolForm from "./Forms/SchoolNameForm";
import EmailForm from "./Forms/EmailForm";
import PhoneForm from "./Forms/PhoneForm";
import AddressForm from "./Forms/AddressForm";
import AboutForm from "./Forms/AboutForm";
import PasswordForm from "./Forms/PasswordForm";
import validationSchema from "./FormModel/validationSchema";
import continueFormModel from "./FormModel/continueFormModel";
import formInitialValues from "./FormModel/formInitialValues";
import ButtonBase from "@material-ui/core/ButtonBase";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import SaveIcon from "@material-ui/icons/Save";
import { Formik, Form } from "formik";

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
  button: {
    marginTop: "10px",
  },
}));

const steps = [
  "School Name",
  "Registered Email",
  "Contact Number",
  "School Address",
  "About School",
  "Account Password",
];
const { formId, formField } = continueFormModel;

const API_URL = process.env.REACT_APP_BASEURL;
const CreateAccount = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [counter, setCounter] = useState(10);
  const [userEmail, setEmail] = useState("ielemson@outlook.com");
  const alert = useAlert();

  useEffect(() => {
    if (props.location.state !== undefined) {
      setEmail(props.location.state.email);
    }

    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [setEmail, counter, props.location.state]);

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return <SchoolForm formField={formField} />;
      case 1:
        return <EmailForm formField={formField} email={userEmail} />;
      case 2:
        return <PhoneForm formField={formField} />;
      case 3:
        return <AddressForm formField={formField} />;
      case 4:
        return <AboutForm formField={formField} />;
      case 5:
        return <PasswordForm formField={formField} />;

      default:
        return <div>Not Found</div>;
    }
  }
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    const data = {
      email: userEmail,
      schoolName: values.schoolName,
      phone: values.phone,
      address: values.address,
      about: values.about,
      password: values.password,
      role: "Admin",
      created: Date.now(),
    };
    await _sleep(1000);
    // alert(JSON.stringify(data, null, 2));
    // axios({
    //   method: "POST",
    //   url: `${API_URL}/schools`,
    //   data,
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     alert.error(`${err}`);
    //   });
    // dispatch(create_account(data));
    axios({
      method: "post",
      url: `${API_URL}/schools`,
      data: {
        schoolName: data.schoolName,
        email: data.email,
        address: data.address,
        about: data.about,
        created: Date.now(),
      },
    }).then((res) => {
      const user = {
        firstName: "",
        lastName: "",
        email: res.data.email,
        password: values.password,
        phone: values.phone,
        schoolId: res.data.id,
        role: "Admin",
        created: Date.now(),
      };
      createUser(user);
    });

    const createUser = (data) => {
      axios({
        method: "post",
        url: `${API_URL}/users`,
        data,
      })
        .then((res) => {
          alert.success("Account Created", {
            timeout: 5000, // custom timeout just for this one alert
            // callback that will be executed after this alert open
            onClose: () => {
              // history.push("/signin", true);
              window.location.href = "/signin";
            }, // callback that will be executed after this alert is removed
          });
        })
        .catch((errr) => {
          alert.error(errr);
        });
    };
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

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
        {userEmail ? (
          <div className="form-wizard">
            <Typography component="h1" variant="h4" align="center">
              Fill all form field to go next step
            </Typography>
            <Stepper
              activeStep={activeStep}
              className={classes.stepper}
              style={{ backgroundColor: "#fafafa" }}
              orientation="vertical"
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === steps.length ? (
              // <Typography>End</Typography>
              // <CheckoutSuccess email={setEmail}></CheckoutSuccess>
              <Typography>
                Congratulations{" "}
                <b style={{ fontWeight: "bold" }}>{userEmail}</b> Your account
                has been created <br />{" "}
                {/* {counter !== 0 && `Please Wait ${counter} s`} */}
              </Typography>
            ) : (
              <Formik
                initialValues={formInitialValues}
                validationSchema={currentValidationSchema}
                onSubmit={_handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form id={formId}>
                    {_renderStepContent(activeStep)}
                    <div></div>
                    <div>
                      {activeStep !== 0 && (
                        <React.Fragment>
                          <Button
                            onClick={_handleBack}
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            style={{
                              background:
                                "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                            }}
                          >
                            <NavigateBeforeIcon />
                            Back
                          </Button>{" "}
                        </React.Fragment>
                      )}
                      {isLastStep ? (
                        <Fragment>
                          <Button
                            disabled={isSubmitting}
                            type="submit"
                            variant="contained"
                            className={classes.button}
                            style={{
                              background:
                                "linear-gradient(45deg, #4caf50 30%, #4caf55 90%)",
                              color: "#fff",
                            }}
                          >
                            Save <SaveIcon />
                          </Button>
                        </Fragment>
                      ) : (
                        <Fragment>
                          {" "}
                          <Button
                            disabled={isSubmitting}
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                          >
                            Next <NavigateNextIcon />
                          </Button>
                        </Fragment>
                      )}

                      {isSubmitting && (
                        <CircularProgress
                          size={24}
                          className={classes.buttonProgress}
                        />
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </div>
        ) : (
          <div className="form-wizard">
            <Grid
              container
              spacing={0}
              align="center"
              justify="center"
              direction="column"
            >
              <Grid item>
                <ButtonBase>
                  <Link to="/create">
                    <img
                      className={classes.img}
                      alt="complex"
                      src={`${process.env.PUBLIC_URL}/static/images/notify/error.png`}
                    />
                  </Link>
                </ButtonBase>
              </Grid>

              <Grid item>
                <Typography color="error" className={classes.errotext}>
                  Unauthorized Access .. Please Contact Admin for more
                  information
                </Typography>
              </Grid>
            </Grid>
          </div>
        )}
      </Grid>
      <Grid item xs={false} sm={false} md={9} className={classes.image} />
    </Grid>
  );
};
export default CreateAccount;
