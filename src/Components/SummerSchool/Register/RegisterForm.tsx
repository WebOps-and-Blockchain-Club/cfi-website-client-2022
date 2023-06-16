import { Button, Checkbox, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useGetClubsQuery } from '../../../generated/graphql';
import { CustomAutocomplete, CustomTextField } from '../../Shared/InputField';
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";


interface Props {
    handleSubmit: Function;
}
const RegisterForm = () => {
    const { data } = useGetClubsQuery();

    const onSubmit = () => {
        if (selectedClubs.length == 0) setErrorMessage("Select atleast one club to proceed");
        // props.handleSubmit();
    }

    const clubSlot = {
        "A": ["Club", "club1"],
        "B": ["club3", "club4", "club5"]
    } as { [key: string]: string[] };


    const isOtherClubsSelectedInSlot = (clubName: string, slot: string) => {
        const selectedSlots = selectedClubs.map(club => club.slot);
        return selectedSlots.includes(slot);
    };

    const onAutoCompleteChange = (event: any, value: any) => {
        let club = value[value.length - 1];

        if (value.length != 0 && isOtherClubsSelectedInSlot(club.name, club.slot) && value.length >= selectedClubs.length) value.pop()

        setSelectedClubs(value as any);

    }

    const [selectedClubs, setSelectedClubs] = useState<
        { id: string; name: string; slot: string }[]
    >([]);

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
                    />
                </Grid>
                {
                    data && <Grid item container gap={4}>
                        <CustomAutocomplete
                            id="club"
                            size="small"
                            aria-required
                            multiple
                            options={data.getClubs}
                            disableCloseOnSelect
                            getOptionLabel={(option: any) => option.name}
                            renderOption={(props, option, { selected }) => {
                                const club = option as any
                                const isDisabled = isOtherClubsSelectedInSlot(club.name, club.slot);
                                // console.log('here')
                                // console.log(selected && (isDisabled))
                                return <li {...props}>
                                    <Checkbox
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                        style={{ marginRight: 8 }}
                                        checked={selected && selectedClubs.includes(club)}
                                        disabled={!selectedClubs.includes(club) && isDisabled}
                                    />
                                    {club.name + " - " + "Slot " + club.slot}
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
function setErrorMessage(arg0: string) {
    throw new Error('Function not implemented.');
}

