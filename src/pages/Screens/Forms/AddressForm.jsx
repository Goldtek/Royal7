import React from "react";
import { Grid } from "@material-ui/core";
import { InputField } from "../FormFields";

export default function AddressForm(props) {
  const {
    formField: { address },
  } = props;

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <InputField name={address.name} label={address.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
