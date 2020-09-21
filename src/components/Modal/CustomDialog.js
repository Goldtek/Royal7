import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

// import Typography from "@material-ui/core/Typography";
// import AppBar from "@material-ui/core/AppBar";

// const API_URL = process.env.REACT_APP_BASEURL;

const CustomModal = (props) => {
  const { children, dialogWidth, OpenModal, handleDialogClose } = props;
  return (
    <React.Fragment>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={OpenModal}
        onClose={handleDialogClose}
        fullWidth={true}
        maxWidth={dialogWidth}
        aria-labelledby="update password"
      >
        <DialogContent>
          <DialogContentText>{props.title}</DialogContentText>
          {children}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default CustomModal;
