import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

interface Probs {
  message: string | null | undefined;
}

const ErrorDialog = (probs: Probs) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(!!probs.message);
  }, [probs.message]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Error</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {probs.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          <CloseIcon />
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;
