import React from "./node_modules/react";
import { Typography } from "./node_modules/@material-ui/core";
// import { Link } from "react-router-dom"
import { Button } from "./node_modules/@material-ui/core";
function CheckoutSuccess({ email }) {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Congratulations {email}.
      </Typography>
      <Typography variant="subtitle1">
        Your registration is complete and account created successfully.
        <br />
        Kindly click here to{" "}
        <Button href="/signin" variant="contained" color="primary" size="small">
          {" "}
          Login{" "}
        </Button>{" "}
        into the dashboard.
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
