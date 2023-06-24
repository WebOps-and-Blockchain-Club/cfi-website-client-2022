import { Card, CardContent, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import { useGetMeSummerSchoolQuery } from '../../../generated/graphql'
import useWindowSize from '../../../Utils/windowSize'
import MediaCard from '../../Community/MediaCard'
import CustomBox, { CustomGridPage, CustomGridSection } from '../../Shared/CustomBox'
import ErrorDialog from '../../Shared/Dialog/ErrorDialog'
import Loading from '../../Shared/Dialog/Loading'
import Heading, { HeadingSub, HeadingSub1 } from '../../Shared/Heading'
import content from "../../../Assets/Data/SummerSchool"
import { HashLink } from 'react-router-hash-link'

const Profile = () => {
    const { data, loading, error } = useGetMeSummerSchoolQuery();
    const theme = useTheme()
    const [errorMessage, setErrorMessage] = React.useState<string>();
    const [width] = useWindowSize();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
    const matches2 = useMediaQuery(theme.breakpoints.down("md"))



    useEffect(() => {
        if (error) setErrorMessage("Some Error Occurred");
    }, [error]);


    return (
        <CustomBox>
            <CustomGridPage>
                <Loading loading={!!loading} />
                <ErrorDialog
                    message={errorMessage}
                    handleClose={() => setErrorMessage(undefined)}
                />
                <Heading red='Profile' white=''></Heading>
                {
                    data?.getMe && <>
                        <Typography color="primary.contrastText" textAlign={"center"} variant="h5" fontWeight="bold">
                            {data?.getMe.name} </Typography>
                        <Typography color="primary.contrastText" textAlign={"center"} variant="h5" fontWeight="bold">
                            {data?.getMe.email} </Typography>

                        <Grid container paddingTop={"3rem"} direction="column">
                            <HeadingSub white='Registered' red=""></HeadingSub>
                            <Grid
                                container
                                mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
                                direction={matches2 ? "column" : "row"}
                                justifyContent="space-evenly"
                                alignItems="center"
                                rowGap={{
                                    xs: 3,
                                    sm: 4,
                                    md: 5,
                                    lg: width >= 1500 ? 3 : 6,
                                }}
                                columnGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
                            >
                                {data.getMe.clubs && data.getMe.clubs.map(club => {

                                    let a = content.sessions.filter(e => { console.log(e.id); return ((e.id && e.id == club.id) || (e.ids && e.ids.includes(club.id))) });
                                    let x = a[0]

                                    return <Grid item>
                                        <HashLink to={`/summer-school/session/${x.title.split(" ").join('-')}`} style={{ textDecoration: "none" }}>
                                            <Card
                                                sx={{
                                                    maxWidth: "25rem",
                                                    borderRadius: "20px",
                                                    display: "flex",
                                                    backgroundColor: "primary.light",
                                                    boxShadow:
                                                        "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",

                                                    margin: 'auto',
                                                }}
                                            >

                                                <CardContent
                                                    sx={{
                                                        px: "30px",
                                                        py: "20px",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        justifyContent: "space-evenly",
                                                    }}
                                                    style={{
                                                        paddingBottom: "20px",
                                                    }}
                                                >

                                                    <HeadingSub1 white={x.title1.split('##')[0]} red={x.title1.split('##')[1]} size="h6" />

                                                    <Typography
                                                        component="div"
                                                        color="primary.contrastText"
                                                        sx={{
                                                            textAlign: "center",
                                                            fontSize: matches ? "16px" : "20px",
                                                        }}>
                                                        {"Slot " + x.slot}
                                                    </Typography>
                                                    <Typography
                                                        component="div"
                                                        color="primary.contrastText"
                                                        sx={{
                                                            textAlign: "center",
                                                            fontSize: matches ? "16px" : "20px",
                                                        }}>
                                                        {"Slot " + x.time}
                                                    </Typography>
                                                    {
                                                        x.club && <Typography
                                                            component="div"
                                                            color="primary.contrastText"
                                                            sx={{
                                                                textAlign: "center",
                                                                fontSize: matches ? "16px" : "20px",
                                                            }}>
                                                            {x.club}
                                                        </Typography>
                                                    }
                                                    {
                                                        x.clubs && x.clubs.map(e => <Typography
                                                            component="div"
                                                            color="primary.contrastText"
                                                            sx={{
                                                                textAlign: "center",
                                                                fontSize: matches ? "12px" : "14px",
                                                            }}>
                                                            {e}
                                                        </Typography>)
                                                    }
                                                </CardContent>

                                            </Card>
                                        </HashLink>
                                    </Grid>
                                })}
                            </Grid>
                        </Grid>
                    </>
                }

            </CustomGridPage>
        </CustomBox >
    )
}

export default Profile
