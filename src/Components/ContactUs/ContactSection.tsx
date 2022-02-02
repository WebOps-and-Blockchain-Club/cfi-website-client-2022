import * as React from "react";
import {
  Button,
  Grid,
  IconButton,
  Snackbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { IMember } from "../../Types";
import ContactCard from "./ContactCard";
import CloseIcon from "@mui/icons-material/Close";

interface Probs {
  title: string;
  email?: string | null;
  members: IMember[];
}

export default function ContactSection({ title, members, email }: Probs) {
  const [copyEmail, setCopyEmail] = React.useState<string | null>(null);
  const handleClick = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopyEmail(email);
  };
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setCopyEmail(null);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {email && (
        <Grid
          item
          container
          justifyContent={"center"}
          mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
        >
          <Snackbar
            open={copyEmail !== null}
            autoHideDuration={6000}
            onClose={handleClose}
            message={`Email ${copyEmail} copied to clipboard`}
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
          <Typography
            color="primary.contrastText"
            sx={{
              textAlign: "center",
              fontSize: matches ? "16px" : "26px",
            }}
          >
            {title}&nbsp;EMAIL: &nbsp;
          </Typography>
          <Button
            onClick={() => handleClick(email)}
            sx={{ padding: "unset", minWidth: "unset", textTransform: "unset" }}
          >
            <Typography
              color="secondary"
              sx={{
                textAlign: "center",
                fontSize: matches ? "16px" : "26px",
              }}
            >
              {email}
            </Typography>
          </Button>
        </Grid>
      )}
      <Grid item mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
        <ContactCard members={members} />
      </Grid>
    </>
  );
}
