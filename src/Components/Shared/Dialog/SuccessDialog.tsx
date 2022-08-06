import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";

interface Probs {
  message: string | null | undefined;
  callBack?: Function | null;
}

const SuccessDialog = (probs: Probs) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(!!probs.message);
  }, [probs.message]);

  const handleClose = () => {
    if (probs.callBack) probs.callBack();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Success</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {probs.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Continue</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessDialog;
