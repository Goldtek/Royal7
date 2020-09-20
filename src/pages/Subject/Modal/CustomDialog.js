import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

class CustomDialog extends React.Component {
  render() {
    const { dialogWidth, subj } = this.props;
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
          <DialogTitle id="confirmation-dialog-title">{subj}</DialogTitle>
          <DialogContent>{this.props.children}</DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default CustomDialog;
