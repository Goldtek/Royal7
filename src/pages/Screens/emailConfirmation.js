import React, { Fragment, useState, useEffect } from "react";
import { useParams, withRouter, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
// import LinkIcon from '@material-ui/icons/Link';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 250,
    height: 250,
    marginRight: "auto",
    marginLeft: "auto",
  },
  img: {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  // typehead: {
  //   fontWeight: "400",
  //   fontSize: "1em ! important",
  // },
  textfont: {
    fontWeight: "bold",
  },
  link: {
    color: "#0040C1",
    fontWeight: "bold",
  },
}));
const EmailConfirm = () => {
  // Declare a new state variable, which we'll call "count"
  const [counter, setCounter] = useState(10);
  const [useremail, setEmail] = useState("");
  const classes = useStyles();
  const params = useParams();
  // const history = useHistory()

  useEffect(() => {
    setEmail(params.email);
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter, params.email]);

  return (
    <Fragment>
      <div class="hero">
        <div class="hero__title">
          {" "}
          <Typography variant="h6" className={classes.typehead}>
            Email Verified Successfully
          </Typography>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid
                container
                spacing={0}
                align="center"
                justify="center"
                direction="column"
              >
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={`${process.env.PUBLIC_URL}/static/images/screens/email-confirmation.png`}
                    />
                  </ButtonBase>
                </Grid>

                <Grid item>
                  <Typography>
                    Congratulations{" "}
                    <b className={classes.textfont}>{params.email}</b> has been
                    verified <br />{" "}
                    {counter ? (
                      `Please Wait ${counter} s`
                    ) : (
                      <Redirect
                        push
                        to={{
                          pathname: "/continue",
                          state: { email: useremail },
                        }}
                      />
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
      </div>
    </Fragment>
  );
};
export default withRouter(EmailConfirm);
