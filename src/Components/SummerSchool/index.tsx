import CustomBox, { CustomGridPage } from '../Shared/CustomBox'
import Heading from '../Shared/Heading'
import content from "../../Assets/Data/SummerSchool"
import { Typography, useMediaQuery, useTheme } from '@mui/material'

const SummerSchool = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const matches2 = useMediaQuery(theme.breakpoints.down("md"));
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
    return (

        <CustomBox>
            <CustomGridPage>
                <Heading white='Summer ' red='School'></Heading>
                <Typography
                    variant={matches2 ? (matches ? "subtitle1" : "h6") : "h5"}
                    style={{
                        color: "#d6d6d6",
                        fontFamily: "Proxima Nova",
                        paddingTop: "2rem"
                    }}
                    textAlign={matches ? "center" : "start"}
                    dangerouslySetInnerHTML={{ __html: content.description }}
                >

                </Typography>
            </CustomGridPage>
        </CustomBox>

    )
}

export default SummerSchool
