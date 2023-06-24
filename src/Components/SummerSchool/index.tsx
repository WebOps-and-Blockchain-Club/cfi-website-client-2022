import CustomBox, { CustomGridPage, CustomGridSection } from '../Shared/CustomBox'
import Heading, { HeadingSub, HeadingSub1 } from '../Shared/Heading'
import content from "../../Assets/Data/SummerSchool"
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import useWindowSize from '../../Utils/windowSize'
import SessionCard from './SessionCard'
import { useNavigate, createSearchParams } from 'react-router-dom'

const SummerSchool = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const matches2 = useMediaQuery(theme.breakpoints.down("md"));
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
    const [width] = useWindowSize();
    const navigate = useNavigate()

    const onSubmit = (title: string) => {

        const nameQueryParam = title.split(" ").join('-');
        const searchParams = createSearchParams({ name: nameQueryParam }).toString();
        const destination = `register?${searchParams}`;

        navigate(destination);
    }
    return (

        <CustomBox>
            <CustomGridPage>
                <Heading white='Summer ' red='School'></Heading>

                <Grid item>
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
                        {content.sessions.map(session => <Grid item>
                            <SessionCard
                                heading={session.title1}
                                link={`/summer-school/session/${session.title.split(" ").join('-')}`}
                                description={session.description}
                                image={session.poster!}
                                onSubmit={onSubmit}
                            ></SessionCard>
                        </Grid>
                        )}
                    </Grid>
                </CustomGridSection>
            </CustomGridPage>
        </CustomBox >

    )
}

export default SummerSchool
