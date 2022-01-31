import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { IMember } from "../../Types";

import EmailIcon from "../../Assets/Icons/Social/email.png";
import WhatsAppIcon from "../../Assets/Icons/Social/whatsapp1.png";
import LinkedInIcon from "../../Assets/Icons/Social/linkedin.png";

interface Probs {
  members: IMember[];
}

const ContactCard = ({ members }: Probs) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      item
      container
      direction={"row"}
      gap={{ xs: 6, sm: 8, md: 12, lg: 16 }}
      justifyContent={"center"}
    >
      {members.map((_member: IMember) => (
        <Card
          sx={{
            width: matches ? "220px" : "280px",
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
              borderRadius: "20px 20px 0 0",
              verticalAlign: "middle",
              objectFit: "cover",
              height: matches ? "190px" : "270px",
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
                <a
                  href={`mailto:${_member.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={_member.email}
                >
                  <img
                    src={EmailIcon}
                    style={{
                      borderRadius: "20px",
                      height: matches ? "30px" : "35px",
                    }}
                    alt="Email"
                  />
                </a>
              </Grid>
              {_member.phone && (
                <Grid item>
                  <a
                    href={`https://api.whatsapp.com/send?phone=+91${_member.phone}`}
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
