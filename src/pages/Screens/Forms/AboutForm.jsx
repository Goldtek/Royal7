import React from "react";
import { Grid } from "@material-ui/core";
import { InputField } from "../FormFields";

export default function AboutForm(props) {
  const {
    formField: { about },
  } = props;

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <InputField name={about.name} label={about.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
