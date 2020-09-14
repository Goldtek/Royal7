import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const API_URL = process.env.REACT_APP_BASEURL;

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
          <DialogContent>{this.props.children}</DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default CustomDialog;
