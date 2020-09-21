// import { ActivityStream, Wrapper } from "../../components";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    display: "inline-block",
    margin: 0,
    [theme.breakpoints.up("sm")]: {
      width: 128,
      height: 128,
    },
    [theme.breakpoints.down("xs")]: {
      width: 64,
      height: 64,
    },
    marginBottom: theme.spacing(1),
  },
  tabRoot: {
    textTransform: "initial",
    color: theme.palette.text.primary,
  },
  postInput: {
    border: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1) * 3,
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1) * 2,
    },
    fontSize: "13px",
    outline: 0,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}));

const ProcfileCard = ({
  firstName,
  lastName,
  middleName,
  email,
  role,
  bio,
  admissionid,
  sex,
}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <Typography variant="h6" gutterBottom>
              {firstName} <b>{middleName}</b> <b>{lastName}</b>
            </Typography>
            <Typography variant="caption" gutterBottom>
              {sex}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {role}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {admissionid}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link to="/">{email}</Link>
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <div className="text-xs-center">
              <Avatar
                alt="Adelle Charles"
                src={`${process.env.PUBLIC_URL}/static/images/avatar/avatar.png`}
                className={classNames(classes.avatar)}
              />

              <input
                accept="image/*"
                className={classes.input}
                id="outlined-button-file"
                multiple
                type="file"
              />
              <label htmlFor="outlined-button-file">
                <Button
                  variant="outlined"
                  component="span"
                  color="primary"
                  className={classes.button}
                >
                  Upload Photo
                </Button>
              </label>
            </div>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Divider />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          About
        </Typography>
        <Typography>{bio}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProcfileCard;
