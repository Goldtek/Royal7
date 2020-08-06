import React from "react";
import { Grid } from "@material-ui/core";
import { InputField } from "../FormFields";

export default function PhoneForm(props) {
  const {
    formField: { phone },
  } = props;

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <InputField name={phone.name} label={phone.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
