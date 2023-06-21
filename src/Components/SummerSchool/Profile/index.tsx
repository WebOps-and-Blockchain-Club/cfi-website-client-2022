import { Card, CardContent, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import { useGetMeSummerSchoolQuery } from '../../../generated/graphql'
import useWindowSize from '../../../Utils/windowSize'
import MediaCard from '../../Community/MediaCard'
import CustomBox, { CustomGridPage } from '../../Shared/CustomBox'
import ErrorDialog from '../../Shared/Dialog/ErrorDialog'
import Loading from '../../Shared/Dialog/Loading'
import Heading, { HeadingSub } from '../../Shared/Heading'
import content from "../../../Assets/Data/SummerSchool"
import { HashLink } from 'react-router-hash-link'

const Profile = () => {
    const { data, loading, error } = useGetMeSummerSchoolQuery();
    const theme = useTheme()
    const [errorMessage, setErrorMessage] = React.useState<string>();
    const [width] = useWindowSize();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));



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

                        <Grid container paddingTop={"2rem"} direction="column">
                            <HeadingSub white='Registered ' red='sessions'></HeadingSub>
                            <Grid
                                item
                                container
                                mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
                                justifyContent={"center"}
                                rowGap={{
                                    xs: 3,
                                    sm: 4,
                                    md: 5,
                                    lg: width >= 1500 ? 3 : 6,
                                }}
                                columnGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
                            >
                                {data.getMe.clubs?.map(club => {
                                    let list = content.sessions;
                                    for (const x of list) {
                                        if ((x.club && x.club == club.id) || (x.clubs && x.clubs.includes(club.id))) {
                                            return <HashLink to={`/summer-school/session/${x.title.split(" ").join('-')}`} style={{ textDecoration: "none" }}>
                                                <Card
                                                    sx={{
                                                        width: "100%",
                                                        borderRadius: "20px",
                                                        display: "flex",
                                                        flexDirection: matchesLG ? "column" : "row",
                                                        backgroundColor: "primary.light",
                                                        boxShadow:
                                                            "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
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
                                                        <HeadingSub white={x.title} red="" />
                                                        <Typography
                                                            component="div"
                                                            color="primary.contrastText"
                                                            sx={{
                                                                textAlign: "justify",
                                                                fontSize: matches ? "12px" : "14px",
                                                            }}>
                                                            {"Slot " + x.slot}
                                                        </Typography>
                                                        {
                                                            x.club && <Typography
                                                                component="div"
                                                                color="primary.contrastText"
                                                                sx={{
                                                                    textAlign: "justify",
                                                                    fontSize: matches ? "12px" : "14px",
                                                                }}>
                                                                {x.club}
                                                            </Typography>
                                                        }
                                                        {
                                                            x.clubs && x.clubs.map(e => <Typography
                                                                component="div"
                                                                color="primary.contrastText"
                                                                sx={{
                                                                    textAlign: "justify",
                                                                    fontSize: matches ? "12px" : "14px",
                                                                }}>
                                                                {e}
                                                            </Typography>)
                                                        }

                                                    </CardContent>

                                                </Card>
                                            </HashLink>

                                        }
                                    }

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
