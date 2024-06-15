
import { createSearchParams, useNavigate, useParams } from 'react-router-dom'
import CustomBox, { CustomGridPage } from "../../Shared/CustomBox";
import content from "../../../Assets/Data/SummerSchool"
import Heading, { HeadingSub, HeadingSub1 } from '../../Shared/Heading'
import { Button, Chip, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useContext, useEffect, useState } from 'react'
import Loading from '../../Shared/Dialog/Loading';
import AuthContext from '../../../Utils/context';
import ErrorDialog from '../../Shared/Dialog/ErrorDialog';
import { UserRole } from '../../../generated/graphql';


const SessionPage = () => {
    const { title } = useParams<{ title: string }>()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const matches2 = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();
    const { state } = useContext(AuthContext)!;
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const onSubmit = (title: string) => {
        if (state?.user?.role === UserRole.User) {
            const nameQueryParam = title.split(" ").join('-');
            const searchParams = createSearchParams({ name: nameQueryParam }).toString();
            console.log(searchParams)
            const destination = `/summer-school/register?${searchParams}`;

            navigate(destination);
        }
        else setErrorMessage("Login to Continue");

    }

    const [data, setData] = useState<{
        club?: string;
        description: string;
        title1: string;
        title: string;
        slot: string;
        poster: string;
        time: string;
        fulldesc: string;
        daywise?: string[];
        id?: string;
        syllabus?: string;
        sessionwise?: { title?: string, description?: string, session_nums?: string }[];
        clubs?: string[];
        ids?: string[];
    }>();

    useEffect(() => {
        let x = content.sessions.find((s) => s.title == title?.split("-").join(" "))
        if (x) setData(x);
    }, [])
    return (
        <CustomBox>
            <Loading loading={!data}></Loading>
            {errorMessage && (
                <ErrorDialog
                    message={errorMessage}
                    handleClose={() => setErrorMessage(undefined)}
                />
            )}
            <CustomGridPage>
                {data && <>
                    <Heading white={data.title1.split("##")[0]} red={data.title1.split("##")[1]} />
                    <Grid
                        container
                        direction="column"
                    >
                        <Grid container gap={2} pt={1} justifyContent="center" paddingBottom={"5px"}>
                            {data.club && <Chip
                                label={data.club}
                                sx={{
                                    backgroundColor: "primary.contrastText",
                                    ":hover": {
                                        backgroundColor: "primary.contrastText",
                                    },
                                }}
                                size="small"
                                onClick={() => { navigate(`/clubs/${data.club!.toLowerCase().split(" ").join('-')}`); }}
                            />}
                            {
                                data.clubs && data.clubs.map(club => <Chip
                                    label={club}
                                    sx={{
                                        backgroundColor: "primary.contrastText",
                                        ":hover": {
                                            backgroundColor: "primary.contrastText",
                                        },
                                    }}
                                    size="small"
                                    onClick={() => { navigate(`/clubs/${club!.toLowerCase().split(" ").join('-')}`); }}
                                />)
                            }
                        </Grid>
                        <Typography color="primary.contrastText" textAlign={"center"} variant="h5" fontWeight="bold">
                            Slot {data.slot} </Typography>
                        <Typography color="primary.contrastText" textAlign={"center"} variant="h5" fontWeight="bold">
                            {data.time} </Typography>

                        {/* <Button
                            sx={{
                                padding: "5px 20px",
                                width: "fit-content",
                                margin: "auto",
                                marginTop: "1.5rem",
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
                            onClick={(e: any) => { e.preventDefault(); onSubmit(data.title) }}
                        >
                            REGISTER
                        </Button> */}


                    </Grid>

                    <Grid
                        container
                        direction="column"
                        justifyContent="left"
                        py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
                        alignItems="left"
                    >
                        <Typography
                            variant={matches2 ? (matches ? "subtitle1" : "h6") : "h6"}
                            component="div"
                            color="primary.contrastText"
                            sx={{
                                textAlign: data.fulldesc.length > 350 ? "left" : "center",

                            }}
                            dangerouslySetInnerHTML={{ __html: data.fulldesc }}
                        />
                        {
                            data.syllabus && <Grid item paddingTop={"3rem"}>
                                <HeadingSub1 white="" red={"Syllabus"} size="h4"></HeadingSub1>
                                <Typography
                                    paddingTop={"1rem"}
                                    variant={matches2 ? (matches ? "subtitle1" : "h6") : "h6"}
                                    component="div"
                                    color="primary.contrastText"
                                    sx={{
                                        textAlign: "center",

                                    }}
                                    dangerouslySetInnerHTML={{ __html: data.syllabus }}
                                />
                            </Grid>
                        }
                        {
                            data.daywise && <Grid item paddingTop={"3rem"}>
                                <HeadingSub1 white="" red={"Schedule"} size="h4"></HeadingSub1>
                                {data.daywise.map((topic, index) => {
                                    return <Grid
                                        container
                                    >
                                        <Grid item paddingRight={"1rem"}><HeadingSub white="Day " red={`${index + 1}`}></HeadingSub></Grid>
                                        <Grid item>
                                            <Typography
                                                variant={matches2 ? (matches ? "subtitle1" : "h6") : "h6"}
                                                component="div"
                                                color="primary.contrastText"
                                                sx={{
                                                    textAlign: "left",
                                                    display: "inline",
                                                    whiteSpace: "pre-wrap"
                                                }}
                                                dangerouslySetInnerHTML={{ __html: topic }}
                                            />
                                        </Grid>
                                    </Grid>
                                })}
                            </Grid>
                        }
                        {
                            data.sessionwise && <Grid item paddingTop={"3rem"}>

                                <HeadingSub1 white="" red={"Schedule"} size="h4"></HeadingSub1>
                                {
                                    data.sessionwise.map((session, index) => {
                                        return <Grid container direction="column"
                                        >
                                            <HeadingSub white={`Session ${session.session_nums || index + 1}`} red={session.title ? ` - ${session.title}` : ""}></HeadingSub>
                                            <p>
                                                {
                                                    session.description &&
                                                    <Typography
                                                        variant={matches2 ? (matches ? "subtitle1" : "h6") : "h6"}
                                                        component="div"
                                                        color="primary.contrastText"

                                                        dangerouslySetInnerHTML={{ __html: session.description }}
                                                    />
                                                }</p>
                                        </Grid>
                                    })
                                }

                            </Grid>
                        }

                    </Grid>
                </>
                }
            </CustomGridPage>
        </CustomBox >
    )
}

export default SessionPage
