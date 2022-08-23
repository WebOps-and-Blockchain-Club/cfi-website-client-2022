import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Snackbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { IMember } from "../../Types";

import EmailIcon from "../../Assets/Icons/Social/email.png";
import WhatsAppIcon from "../../Assets/Icons/Social/whatsapp1.png";
import LinkedInIcon from "../../Assets/Icons/Social/linkedin.png";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

interface Probs {
  members: IMember[];
}

const ContactCard = ({ members }: Probs) => {
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
    <Grid
      item
      container
      direction={"row"}
      gap={{ xs: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
      justifyContent={"center"}
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
      {members.map((_member: IMember) => (
        <Card
          sx={{
            width: matches ? "220px" : "275px",
            borderRadius: "20px",
            backgroundColor: "primary.light",
            boxShadow:
              "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
          }}
        >
          <CardMedia
            component="img"
            image={_member.image}
            alt={_member.name}
            sx={{
              verticalAlign: "start",
              objectFit: "cover",
              height: matches ? "190px" : "265px",
              backgroundColor: "#d6d6d6",
            }}
          />
          <CardContent
            sx={{
              px: "10px",
              py: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
            style={{
              paddingBottom: "20px",
            }}
          >
            <Typography
              component="div"
              color="primary.contrastText"
              sx={{
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              {_member.name}
            </Typography>
            {_member.department && (
              <Typography
                component="div"
                color="primary.contrastText"
                sx={{
                  textAlign: "center",
                  fontSize: "16px",
                  letterSpacing: "1px",
                }}
                mt={2}
              >
                {_member.department}
              </Typography>
            )}
            <Grid container mt={2} mb={2} gap={2} justifyContent={"center"}>
              <Grid item>
                <Button
                  onClick={() => handleClick(_member.email)}
                  sx={{
                    padding: "unset",
                    minWidth: "unset",
                    textTransform: "unset",
                  }}
                >
                  <img
                    src={EmailIcon}
                    style={{
                      borderRadius: "20px",
                      height: matches ? "30px" : "35px",
                    }}
                    alt="Email"
                  />
                </Button>
              </Grid>
              {_member.phone && (
                <Grid item>
                  <a
                    href={`https://wa.me/+91${_member.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={_member.phone}
                  >
                    <img
                      src={WhatsAppIcon}
                      style={{ height: matches ? "30px" : "35px" }}
                      alt="WhatsApp"
                    />
                  </a>
                </Grid>
              )}
              {_member.linkedIn && (
                <Grid item>
                  <a
                    href={_member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={LinkedInIcon}
                      style={{ height: matches ? "30px" : "35px" }}
                      alt="LinkedIn"
                    />
                  </a>
                </Grid>
              )}
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default ContactCard;
