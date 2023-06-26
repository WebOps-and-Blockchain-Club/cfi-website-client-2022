import { Button, Card, CardContent, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDeregisterMutation, useGetMeSummerSchoolQuery } from '../../../generated/graphql'
import useWindowSize from '../../../Utils/windowSize'
import MediaCard from '../../Community/MediaCard'
import CustomBox, { CustomGridPage, CustomGridSection } from '../../Shared/CustomBox'
import ErrorDialog from '../../Shared/Dialog/ErrorDialog'
import Loading from '../../Shared/Dialog/Loading'
import Heading, { HeadingSub, HeadingSub1 } from '../../Shared/Heading'
import content from "../../../Assets/Data/SummerSchool"
import { HashLink } from 'react-router-hash-link'
import SuccessDialog from '../../Shared/Dialog/SuccessDialog'
import { useNavigate } from 'react-router-dom'
import { link } from '../../../Assets/Data/utils'

const Profile = () => {
    const { data, loading, error } = useGetMeSummerSchoolQuery();
    const theme = useTheme()
    const [errorMessage, setErrorMessage] = React.useState<string>();
    const [width] = useWindowSize();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
    const matches2 = useMediaQuery(theme.breakpoints.down("md"))
    const navigate = useNavigate()

    const [done, setDone] = useState(false)

    const [
        DeRegisterMutation,
        { data: deregisterData, loading: createLoading, error: createError },
    ] = useDeregisterMutation();

    const onSubmit = async (slot: string, clubIds: string[] | undefined) => {
        console.log(clubIds)
        console.log(slot)
        await DeRegisterMutation({
            variables: {
                dereristerInp: {
                    clubIds: clubIds ?? [],
                    slot: slot
                }
            }
        })
    }

    const submitCallBack = () => {
        window.location.reload()
    }


    useEffect(() => {
        if (error) setErrorMessage("Some Error Occurred");
        if (createError) setErrorMessage(createError.message)
    }, [error]);

    return (
        <CustomBox>
            <CustomGridPage>
                <Loading loading={!!loading} />
                <ErrorDialog
                    message={errorMessage}
                    handleClose={() => setErrorMessage(undefined)}
                />
                {deregisterData && <SuccessDialog
                    message={
                        "Successfully Deregistered"
                    }
                    callBack={submitCallBack}
                />}

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
                                    let slots = data.getMe.slots;
                                    let a = content.sessions.filter(e => { console.log(e.id); return ((e.id && e.id == club.id) || (e.ids && e.ids.includes(club.id))) });
                                    let x = a[0]
                                    console.log(x)
                                    if (club.id != "team-sahaay" && !(club.id == "programming-club" && !slots?.includes("F1")))
                                        return <Grid item>
                                            <Card
                                                sx={{
                                                    maxWidth: "25rem",
                                                    borderRadius: "20px",
                                                    display: "flex",
                                                    backgroundColor: "primary.light",
                                                    boxShadow:
                                                        "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
                                                    flexDirection: "column",
                                                    margin: 'auto',
                                                }}
                                            >
                                                <HashLink to={`/summer-school/session/${x.title.split(" ").join('-')}`} style={{ textDecoration: "none" }}>
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
                                                </HashLink>
                                                {
                                                    x.links?.map(e => {
                                                        return <Typography
                                                            component="a"
                                                            target='_blank'
                                                            href={e.link}
                                                            color="red"
                                                            sx={{
                                                                textAlign: "center",
                                                                fontSize: matches ? "16px" : "20px",
                                                            }}>
                                                            {e.name}
                                                        </Typography>
                                                    })
                                                }
                                                <Button
                                                    sx={{
                                                        padding: "5px 20px",
                                                        marginTop: "15px",
                                                        marginBottom: "15px",
                                                        marginLeft: "auto",
                                                        marginRight: "auto",
                                                        width: "fit-content",
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
                                                    onClick={() => onSubmit(x.slot, x.club ? [x.id] : x.ids)}
                                                >
                                                    DEREGISTER
                                                </Button>
                                            </Card>

                                        </Grid>
                                })}
                                {
                                    data.getMe?.slots?.includes("F2") && <Grid item>
                                        <Card
                                            sx={{
                                                maxWidth: "25rem",
                                                borderRadius: "20px",
                                                display: "flex",
                                                backgroundColor: "primary.light",
                                                boxShadow:
                                                    "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
                                                flexDirection: "column",
                                                margin: 'auto',
                                            }}
                                        >
                                            <HashLink to={`/summer-school/session/${content.sessions[12].title.split(" ").join('-')}`} style={{ textDecoration: "none" }}>
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

                                                    <HeadingSub1 white={content.sessions[12].title1.split('##')[0]} red={content.sessions[12].title1.split('##')[1]} size="h6" />

                                                    <Typography
                                                        component="div"
                                                        color="primary.contrastText"
                                                        sx={{
                                                            textAlign: "center",
                                                            fontSize: matches ? "16px" : "20px",
                                                        }}>
                                                        {"Slot " + content.sessions[12].slot}
                                                    </Typography>
                                                    <Typography
                                                        component="div"
                                                        color="primary.contrastText"
                                                        sx={{
                                                            textAlign: "center",
                                                            fontSize: matches ? "16px" : "20px",
                                                        }}>
                                                        {"Slot " + content.sessions[12].time}
                                                    </Typography>
                                                    {
                                                        content.sessions[12].club && <Typography
                                                            component="div"
                                                            color="primary.contrastText"
                                                            sx={{
                                                                textAlign: "center",
                                                                fontSize: matches ? "16px" : "20px",
                                                            }}>
                                                            {content.sessions[12].club}
                                                        </Typography>
                                                    }

                                                </CardContent>
                                            </HashLink>
                                            {
                                                content.sessions[12].links?.map(e => {
                                                    return <Typography
                                                        component="a"
                                                        target='_blank'
                                                        href={e.link}
                                                        color="red"
                                                        sx={{
                                                            textAlign: "center",
                                                            fontSize: matches ? "16px" : "20px",
                                                        }}>
                                                        {e.name}
                                                    </Typography>
                                                })
                                            }
                                            <Button
                                                sx={{
                                                    padding: "5px 20px",
                                                    marginTop: "15px",
                                                    marginBottom: "15px",
                                                    marginLeft: "auto",
                                                    marginRight: "auto",
                                                    width: "fit-content",
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
                                                onClick={() => onSubmit(content.sessions[12].slot, [content.sessions[12].id!])}
                                            >
                                                DEREGISTER
                                            </Button>
                                        </Card>

                                    </Grid>

                                }


                            </Grid>
                        </Grid>
                    </>
                }

            </CustomGridPage>
        </CustomBox >
    )
}

export default Profile
