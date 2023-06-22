
import { useParams } from 'react-router-dom'
import CustomBox, { CustomGridPage } from "../../Shared/CustomBox";
import content from "../../../Assets/Data/SummerSchool"
import Heading, { HeadingSub, HeadingSub1 } from '../../Shared/Heading'
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import useWindowSize from '../../../Utils/windowSize'
import { useEffect, useState } from 'react'
import Loading from '../../Shared/Dialog/Loading';
import { textAlign } from '@mui/system';

const SessionPage = () => {
    const { title } = useParams<{ title: string }>()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const matches2 = useMediaQuery(theme.breakpoints.down("md"));
    const [width] = useWindowSize();

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
            <CustomGridPage>
                {data && <>
                    <Heading white={data.title1.split("##")[0]} red={data.title1.split("##")[1]} />
                    <Grid
                        container
                        marginTop={"2rem"}
                        direction="column"
                    >
                        <Typography color="primary.contrastText" textAlign={"center"} variant="h5" fontWeight="bold">
                            Slot {data.slot} </Typography>
                        <Typography color="primary.contrastText" textAlign={"center"} variant="h5" fontWeight="bold">
                            {data.time} </Typography>
                        {data.club && <Typography color="primary.contrastText" textAlign={"center"} variant="h5" fontWeight="bold">
                            {data.club} </Typography>}
                        {
                            data.clubs && data.clubs.map(club => <Typography color="primary.contrastText" textAlign={"center"} variant="h5" fontWeight="bold">
                                {club} </Typography>)
                        }

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
                                            <HeadingSub white={`Day ${session.session_nums || index + 1}`} red={session.title ? ` - ${session.title}` : ""}></HeadingSub>
                                            {
                                                session.description &&
                                                <Typography
                                                    variant={matches2 ? (matches ? "subtitle1" : "h6") : "h6"}
                                                    component="div"
                                                    color="primary.contrastText"

                                                    dangerouslySetInnerHTML={{ __html: session.description }}
                                                />
                                            }
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
