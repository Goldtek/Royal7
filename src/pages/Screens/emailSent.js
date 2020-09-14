import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import "./styles.js";
const useStyles = makeStyles((theme) => ({
  card: {
    overflow: "visible",
  },
  session: {
    position: "relative",
    zIndex: 4000,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  background: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
  content: {
    padding: `40px ${theme.spacing(1)}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 0 auto",
    flexDirection: "column",
    minHeight: "100%",
    // textAlign: "justify",
  },
  wrapper: {
    flex: "none",
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto",
  },

  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/static/images/screens/envelope-email.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: 200,
    height: 200,
    marginRight: "auto",
    marginLeft: "auto",
    // border: "2px solid red",
  },
  img: {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },

  email: {
    color: "black",
    fontWeight: "600",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Copyright = () => {
  return (
    <Typography
      variant="body2"
      align="center"
      style={{ color: "#fff !mportant" }}
    >
      {"Copyright © "}
      <Link color="white" to="/">
        edcollab
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const EmailValidate = (props) => {
  //   const params = useParams();
  const classes = useStyles();
  let history = useHistory();
  const [useremail, setEmail] = useState("");
  console.log(props);
  useEffect(() => {
    if (props.location.state !== undefined) {
      setEmail(props.location.state.email);
    }
  }, [props.location.state, setEmail]);
  return (
    <React.Fragment>
      {props.location.state ? (
        <div className={classNames(classes.session, classes.background)}>
          <div className={classes.content}>
            <div className={classes.wrapper}>
              <Card>
                <CardContent>
                  <Grid
                    container
                    spacing={0}
                    align="center"
                    justify="center"
                    direction="column"
                  >
                    <Grid item className={classes.image}></Grid>

                    <Grid item>
                      <Typography
                        color="inherit"
                        style={{ fontSize: "0.9rem", fontWeight: "nomral" }}
                      >
                        {/* Almost there, check your email: on how to verify your
                        email address.  */}
                        We've sent an email to your registered email address:{" "}
                        <b className={classes.email}>{useremail}</b> Kindly
                        follow the instructions in the email to complete your
                        registration.
                      </Typography>
                      <br />
                      <br />

                      <b>Didn't receive the email?</b>

                      <List
                        component="nav"
                        className={classes.root}
                        aria-label="contacts"
                      >
                        <ListItem>
                          <ListItemText primary="Make sure your email address is entered correctly" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Check your email spam or junk folder" />
                        </ListItem>
                      </List>

                      <Button
                        onClick={() => history.push("/create")}
                        variant="contained"
                        className={classes.button}
                        color="primary"
                      >
                        Resend Email
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Box mt={5}>
                <Copyright />
              </Box>
            </div>
          </div>
        </div>
      ) : (
        history.goBack()
      )}
    </React.Fragment>
  );
};

export default EmailValidate;
