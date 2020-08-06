import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import { Link, Redirect, useHistory } from "react-router-dom";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Grid,
} from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { Formik, Form } from "formik";
import SaveIcon from "@material-ui/icons/Save";
import SchoolForm from "./Forms/SchoolNameForm";
import EmailForm from "./Forms/EmailForm";
import PhoneForm from "./Forms/PhoneForm";
import AddressForm from "./Forms/AddressForm";
import AboutForm from "./Forms/AboutForm";
import PasswordForm from "./Forms/PasswordForm";
import { useAlert } from "react-alert";
import validationSchema from "./FormModel/validationSchema";
import continueFormModel from "./FormModel/continueFormModel";
import formInitialValues from "./FormModel/formInitialValues";

import useStyles from "./styles";
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
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const [counter, setCounter] = useState(10);
  const [userEmail, setEmail] = useState("ielemson@gmail.com");
  const alert = useAlert();
  let history = useHistory();

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
    };
    await _sleep(1000);
    // alert(JSON.stringify(data, null, 2));
    axios({
      method: "POST",
      url: `${API_URL}/newadmin`,
      data,
    })
      .then((res) => {
        actions.resetForm();
        actions.setSubmitting(false);
        // alert.success("Account Created");
        alert.success("Account Created", {
          timeout: 5000, // custom timeout just for this one alert
          // callback that will be executed after this alert open
          onClose: () => {
            history.push("/signin", true);
          }, // callback that will be executed after this alert is removed
        });
      })
      .catch((err) => {
        alert.error(`${err}`);
      });
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
    <Fragment>
      <div
        className="container-fluid"
        style={{
          overflow: "hidden",
          width: "100%",
          padding: 0,
        }}
      >
        <div className="row">
          <div className="col-sm-12 col-xs-12 col-lg-5 col-md-5">
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
                    <b style={{ fontWeight: "bold" }}>{userEmail}</b> Your
                    account has been created <br />{" "}
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
                              <NavigateBeforeIcon
                                className={classes.rightIcon}
                              />
                              Back
                            </Button>
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
                                }}
                              >
                                Save <SaveIcon />
                              </Button>
                            </Fragment>
                          ) : (
                            <Fragment>
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
                    <ButtonBase className={classes.image}>
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
          </div>
          <div
            className="col-sm-12 col-xs-12 col-lg-7 col-md-7 hidden-sm hidden-xs"
            style={{ padding: 0, overflow: "hidden" }}
          >
            <div className="wizard-content-left d-flex justify-content-center align-items-center center-block ">
              <Typography component="h1">
                Complete Your Account Set-up
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateAccount;
