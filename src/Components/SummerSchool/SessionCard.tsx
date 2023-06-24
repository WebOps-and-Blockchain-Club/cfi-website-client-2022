
import { useMediaQuery, useTheme, Card, CardMedia, CardContent, Typography, Button, Grid } from "@mui/material";
import { title } from "process";
import { HashLink } from "react-router-hash-link";
import { HeadingSub1 } from "../Shared/Heading";


type MediaCardProps = {
    heading: string;
    image: string;
    link: string;
    description?: string | undefined;
    onSubmit: Function
};

function SessionCard({ heading, image, link, description, onSubmit }: MediaCardProps) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <HashLink to={link} style={{ textDecoration: "none" }}>
            <Card
                key={title}
                sx={{
                    m: "0 5px",
                    width: matches ? "68vw" : "350px",
                    borderRadius: "20px",
                    backgroundColor: "primary.light",
                    boxShadow:
                        "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "20px",

                }}
            >
                <CardMedia
                    component="img"
                    image={image}
                    alt="newsimg"
                    sx={{
                        borderRadius: "20px 20px 0 0",
                        verticalAlign: "middle",
                        objectFit: "fill",
                        height: matches ? "50vw" : "300px",
                    }}
                />
                <CardContent
                    sx={{
                        px: "10px",
                        py: "20px",
                        minHeight: matches ? "50px" : "100px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        flex: "1 0 auto"
                    }}
                    style={{
                        paddingBottom: "20px",
                    }}
                >
                    {!description && <Typography
                        component="div"
                        color="primary.contrastText"
                        sx={{
                            textAlign: "center",
                            fontSize: matches ? "16px" : "18px",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                        }}
                    >
                        {heading.split("##").join("")}
                    </Typography>
                    }
                    {
                        <Grid item>
                            description && <HeadingSub1 white={heading.split("##")[0]} red={heading.split("##")[1]} size="h5"></HeadingSub1>
                        </Grid>

                    }

                    {
                        description && <Typography
                            component="div"
                            color="primary.contrastText"
                            flex="1"
                            sx={{
                                textAlign: "left",
                                fontSize: matches ? "16px" : "18px",
                                letterSpacing: "1px",
                                padding: "0.4rem",
                            }}
                        >
                            {description}
                        </Typography>
                    }
                </CardContent>
                <Button
                    sx={{
                        padding: "5px 20px",
                        margin: "0 20px",
                        color: "primary.contrastText",
                        backgroundColor: "secondary.dark",
                        fontWeight: "bold",
                        fontSize: "16px",
                        ":hover": {
                            backgroundColor: "secondary.main",
                            color: "primary.contrastText",
                        },
                    }}
                    type="submit"
                    onClick={(e: any) => { e.preventDefault(); onSubmit(heading.split("##").join("")) }}
                >
                    REGISTER
                </Button>
            </Card>
        </HashLink>
    );
}

export default SessionCard
