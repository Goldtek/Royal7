import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Wrapper } from "../../../components";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  Switch,
  TextField,
  Typography,
  colors,
} from "@material-ui/core";

// import SuccessSnackbar from "../SuccessSnackbar";

const useStyles = makeStyles((theme) => ({
  root: {},
  saveButton: {},
}));

const GeneralSettings = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [values, setValues] = useState({
    firstName: "profile.firstName",
    lastName: "profile.lastName",
    email: "profile.email",
    phone: "profile.phone",
    state: "profile.state",
    country: "profile.country",
    isPublic: "profile.isPublic",
    canHire: "profile.canHire",
  });

  const handleChange = (event) => {
    event.persist();

    setValues({
      ...values,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenSnackbar(true);
  };

  //   const handleSnackbarClose = () => {
  //     setOpenSnackbar(false);
  //   };

  const states = ["Alabama", "New York", "San Francisco"];

  return (
    <Wrapper>
      <Card {...rest} className={clsx(classes.root, className)}>
        <form onSubmit={handleSubmit}>
          <CardHeader title="Profile" />
          <Divider />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  type="text"
                  value={values.phone}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Select State"
                  name="state"
                  onChange={handleChange}
                  select
                  // eslint-disable-next-line react/jsx-sort-props
                  SelectProps={{ native: true }}
                  value={values.state}
                >
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              className={classes.saveButton}
              type="submit"
              variant="contained"
              color="primary"
            >
              Save Changes
            </Button>
          </CardActions>
        </form>
        {/* <SuccessSnackbar onClose={handleSnackbarClose} open={openSnackbar} /> */}
      </Card>
    </Wrapper>
  );
};

GeneralSettings.propTypes = {
  className: PropTypes.string,
  profile: PropTypes.object.isRequired,
};

export default GeneralSettings;
