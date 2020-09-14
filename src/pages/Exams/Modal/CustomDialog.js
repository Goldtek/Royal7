import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// import Slide from "@material-ui/core/Slide";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

const API_URL = process.env.REACT_APP_BASEURL;
// function Transition(props) {
//   return <Slide direction="left" {...props} />;
// }

const styles = (theme) => ({
  panel: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      minHeight: "calc(100vh - 64px)",
      paddingTop: "64px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      minHeight: "calc(100vh - 56px)",
      paddingTop: "56px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 64px)",
    },
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
  },
  speedDial: {
    position: "absolute",
    bottom: theme.spacing(1) * 2,
    right: theme.spacing(1) * 3,
  },
  createbtn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 0,
    border: 0,
    color: "white",
    height: 30,
    padding: "0 25px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
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
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
});
class CustomDialog extends React.Component {
  render() {
    const { classes, dialogWidth } = this.props;
    return (
      <React.Fragment>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.props.isOpen}
          onClose={this.props.handleClose}
          // TransitionComponent={Transition}
          fullWidth={true}
          maxWidth={dialogWidth}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <Button
              color="secondary"
              variant="outlined"
              onClick={this.props.handleClose}
            >
              Close
            </Button>
          </DialogTitle>
          <DialogContent>{this.props.children}</DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(CustomDialog);
