import React from "react";
import { Grid } from "@material-ui/core";
import { InputField } from "../FormFields";

export default function EmailForm(props) {
  const {
    formField: { email },
  } = props;

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <InputField
            name={email.name}
            label={email.label}
            fullWidth
            value={props.email}
            readOnly
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
