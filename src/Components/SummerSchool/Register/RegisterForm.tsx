import { Button, Checkbox, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { AddCLubsInput } from '../../../generated/graphql';
import { CustomAutocomplete, CustomTextField } from '../../Shared/InputField';
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import content from "../../../Assets/Data/SummerSchool"


interface Props {
    handleSubmit: Function;
    initialVals: { id: string; slot: string; title: string }[] | undefined
}
const RegisterForm = (props: Props) => {
    const data = content.sessions;

    // const [input, setInput] = useState<Partial<AddCLubsInput>>();

    const [name, setName] = useState<string>();
    const [contact, setContact] = useState<string>();

    const [error, setError] = useState<string>();

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (selectedClubs.length == 0) setError("Select atleast one club to proceed");
        let slots = selectedClubs.map(club => club.slot).join(" ")
        let clubIds = selectedClubs.map(club => club.id)
        let final_inp = { name, contact, slots, clubIds }
        props.handleSubmit(
            final_inp
        );
    }


    const isOtherClubsSelectedInSlot = (slot: string) => {
        const selectedSlots = selectedClubs.map(club => club.slot);
        return selectedSlots.includes(slot);
    };

    const onAutoCompleteChange = (event: any, value: any) => {
        let club = value[value.length - 1];

        if (value.length != 0 && isOtherClubsSelectedInSlot(club.slot) && value.length >= selectedClubs.length) value.pop()

        setSelectedClubs(value as any);
    }

    const [selectedClubs, setSelectedClubs] = useState<
        { id: string; slot: string; title: string }[]
    >([]);

    useEffect(() => {
        console.log(props.initialVals)
        if (props.initialVals) {
            setSelectedClubs(props.initialVals);
        }
    }, [props.initialVals]);

    return (
        <form style={{ width: "100%", paddingTop: "2rem" }}>
            <Grid
                container
                bgcolor={"primary.light"}
                borderRadius={"20px"}
                p={4}
                gap={4}
                justifyContent="center"
                boxShadow="5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);"
            >
                <Grid item container gap={4}>
                    <CustomTextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        value={name}
                    />
                </Grid>
                <Grid item container gap={4}>
                    <CustomTextField
                        id="phone"
                        label="Phone No."
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        value={contact}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact(e.target.value)}
                    />
                </Grid>
                {
                    data && <Grid item container gap={4}>
                        <CustomAutocomplete
                            id="club"
                            size="small"
                            aria-required
                            multiple
                            options={data}
                            disableCloseOnSelect
                            getOptionLabel={(option: any) => option.title}
                            renderOption={(props, option, { selected }) => {
                                const session = option as any
                                const isDisabled = isOtherClubsSelectedInSlot(session.slot);
                                if (selectedClubs.includes(session)) selected = true;
                                return <li {...props}>
                                    <Checkbox
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                        style={{ marginRight: 8 }}
                                        checked={selected && selectedClubs.includes(session)}
                                        disabled={!selectedClubs.includes(session) && isDisabled}
                                    />
                                    <p style={{ margin: "0" }} className={!selectedClubs.includes(session) && isDisabled ? "disabled" : ""}>{"Slot " + session.slot + " - " + session.title} </p>
                                </li>
                            }
                            }
                            style={{ width: "100%" }}
                            renderInput={(params) => (
                                <TextField {...params} label="Select Club" />
                            )}
                            value={selectedClubs}
                            onChange={onAutoCompleteChange}
                        />
                    </Grid>
                }

                <Button
                    sx={{
                        padding: "5px 20px",
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
                    onClick={onSubmit}
                >
                    SUBMIT
                </Button>

            </Grid>

        </form>
    );
}

export default RegisterForm

