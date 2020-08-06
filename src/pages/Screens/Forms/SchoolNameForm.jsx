import React from "react";
import { Grid } from "@material-ui/core";
import { InputField } from "../FormFields";

export default function schoolNameForm(props) {
  const {
    formField: { schoolName },
  } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <InputField
            name={schoolName.name}
            label={schoolName.label}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
