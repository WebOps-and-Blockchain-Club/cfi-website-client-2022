import { Grid } from "@mui/material"
import CustomBox, { CustomGridPage } from "../../Shared/CustomBox"
import Heading from "../../Shared/Heading"
import faqs from "../../../Assets/Data/Faq"
import MediaCard from "../../Community/MediaCard"


const Faqs = () => {
    return (
        <CustomBox>
            <CustomGridPage>
                <Heading white="SIP " red="FAQS" />
                <Grid
                    container
                    mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
                    rowGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
                    style={{

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",
                    }}
                >
                    {faqs.map((faq) => (
                        <MediaCard data={{ title: faq.question, description: faq.answer, colImages: faq.images }} textAlign="left" />
                    ))}
                </Grid>
            </CustomGridPage>
        </CustomBox>

    )
}

export default Faqs
