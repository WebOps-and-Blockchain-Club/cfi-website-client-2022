import CustomBox, { CustomGridPage, CustomGridSection } from '../Shared/CustomBox'
import Heading, { HeadingSub, HeadingSub1 } from '../Shared/Heading'
import content from "../../Assets/Data/SummerSchool"
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import useWindowSize from '../../Utils/windowSize'
import SessionCard from './SessionCard'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CustomAutocomplete, CustomInputLabel, CustomSelect } from '../Shared/InputField'
import AuthContext from '../../Utils/context'
import ErrorDialog from '../Shared/Dialog/ErrorDialog'
import { UserRole } from '../../generated/graphql'

const SummerSchool = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const matches2 = useMediaQuery(theme.breakpoints.down("md"));
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
    const [width] = useWindowSize();
    const navigate = useNavigate()
    const { state } = useContext(AuthContext)!;
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const [slot, setSlot] = useState<string | null>(null);
    const onSubmit = (title: string) => {
        if (state?.user?.role === UserRole.User) {
            const nameQueryParam = title.split(" ").join('-');
            const searchParams = createSearchParams({ name: nameQueryParam.trim() }).toString();
            const destination = `register?${searchParams}`;

            navigate(destination);
        }
        else setErrorMessage("Login to Continue");

    }

    const onChange = (event: any, value: any) => {
        console.log(value);
        setSlot(value)
    }
    return (

        <CustomBox>
            <CustomGridPage>
                {errorMessage && (
                    <ErrorDialog
                        message={errorMessage}
                        handleClose={() => setErrorMessage(undefined)}
                    />
                )}
                <Heading white='Summer ' red='School'></Heading>

                <Grid item>
                    <Typography
                        variant={matches2 ? (matches ? "subtitle1" : "h6") : "h5"}
                        style={{
                            color: "#BAD7E9",
                            fontFamily: "Proxima Nova",
                            paddingTop: "2rem"
                        }}
                        textAlign="center"
                    >
                        <b>{content.time}</b>
                    </Typography>
                    <Typography
                        variant={matches2 ? (matches ? "subtitle1" : "h6") : "h5"}
                        style={{
                            color: "#d6d6d6",
                            fontFamily: "Proxima Nova",
                            paddingTop: "2rem"
                        }}
                        textAlign="center"
                        dangerouslySetInnerHTML={{ __html: content.description }}
                    >
                    </Typography>

                </Grid>


                <CustomGridSection>
                    <Heading white='All The ' red='Sessions' ></Heading>
                    <Grid item paddingTop={"1rem"}>
                        <FormControl>
                            <CustomAutocomplete

                                id="slot-select"
                                renderInput={(params) => (
                                    <TextField {...params} label="Filter By Slot" />
                                )}
                                sx={{ minWidth: "170px", justifyContent: "center" }}
                                multiple={false}
                                value={slot}
                                options={["A", "B", "C", "D", "E", "F"]}
                                getOptionLabel={(option: any) => option}
                                renderOption={(props, option, { selected }) => {
                                    return <li {...props} style={{ textAlign: "center" }}>
                                        <p style={{ height: "5px" }}>    {(option as any)}</p>
                                    </li>

                                }
                                }
                                onChange={onChange}
                            />

                        </FormControl>
                    </Grid>

                    <Grid
                        item
                        display="grid"
                        gridTemplateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                        container
                        mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
                        justifyContent={"center"}
                        rowGap={{
                            xs: 3,
                            sm: 4,
                            md: 5,
                            lg: width >= 1500 ? 10 : 6,
                        }}
                        sx={{ height: "100%", padding: 0 }}
                        columnGap={{ xs: 3, sm: 4, md: 5, lg: 10 }}
                    >
                        {
                            content.sessions.map(session => {
                                if (slot == null || session.slot.includes(slot.toUpperCase())) return <Grid item>
                                    <SessionCard
                                        heading={session.title1}
                                        link={`/summer-school/session/${session.title.split(" ").join('-')}`}
                                        description={session.description}
                                        image={session.poster!}
                                        onSubmit={onSubmit}
                                        clubs={session.club ? [session.club] : session.clubs}
                                    ></SessionCard>
                                </Grid>
                            }

                            )}
                    </Grid>
                </CustomGridSection>
            </CustomGridPage>
        </CustomBox >

    )
}

export default SummerSchool
