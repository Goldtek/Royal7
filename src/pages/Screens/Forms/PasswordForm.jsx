import React from "react";
import { Grid } from "@material-ui/core";
import { InputField } from "../FormFields";

export default function PasswordForm(props) {
  const {
    formField: { password },
  } = props;

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <InputField name={password.name} label={password.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
