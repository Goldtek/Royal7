import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
class CustomDialog extends React.Component {
  render() {
    const { dialogWidth } = this.props;
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
          {/* <DialogTitle id="form-dialog-title">
            <Button
              color="secondary"
              variant="outlined"
              onClick={this.props.handleClose}
            >
              Close
            </Button>
          </DialogTitle> */}
          <DialogContent>{this.props.children}</DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default CustomDialog;
