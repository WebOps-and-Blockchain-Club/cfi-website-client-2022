import { Grid } from '@mui/material'
import WhatsAppIcon from "../../Assets/Icons/Social/whatsapp1.png";

interface Props {
    phone: string;
    matches: boolean;
}

const WhatsappBtn = (props: Props) => {
    return (
        <div>
            <Grid item>
                <a
                    href={`https://wa.me/+91${props.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={props.phone}
                >
                    <img
                        src={WhatsAppIcon}
                        style={{ height: props.matches ? "30px" : "35px" }}
                        alt="WhatsApp"
                    />
                </a>
            </Grid>
        </div>
    )
}

export default WhatsappBtn
