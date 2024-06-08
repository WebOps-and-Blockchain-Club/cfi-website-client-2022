import { Button, Checkbox, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { AddCLubsInput } from '../../../generated/graphql';
import { CustomAutocomplete, CustomTextField } from '../../Shared/InputField';
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import content from "../../../Assets/Data/SummerSchool"
import ErrorDialog from '../../Shared/Dialog/ErrorDialog';
import { useNavigate } from 'react-router-dom';


interface Props {
    handleSubmit: Function;
    initialVals?: any
    registered?: any[]
    search?: string
}
const RegisterForm = ({ handleSubmit, initialVals, search, registered }: Props) => {
    const data = content.sessions;
    const navigate = useNavigate()

    const [name, setName] = useState<string>();
    const [contact, setContact] = useState<string>();
    const [college, setCollege] = useState<string>();
    const [smail, setSmail] = useState<string | undefined>();


    const [error, setError] = useState<string>();

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (selectedClubs.length == 0) setError("Select atleast one club to proceed");
        else {
            let slots = selectedClubs.map(club => club.slot).join(" ")

            let clubIds: string[] = []
            for (var x of selectedClubs) {
                if (x.ids) clubIds.push(...x.ids)
                if (x.id && !clubIds.includes(x.id)) clubIds.push(x.id)
            }

            let final_inp = { name, contact, college, smail, slots, clubIds }
            handleSubmit(
                final_inp
            );
        }

    }

    const isSlotRegistered = (slot: string) => {

        for (var x of (registered ?? [])) {
            if (slot == x.slot) return true;
        }
        return false
    }
    const isFourSummerSchoolSelected = () => {
        if (registered == undefined) return false
        if (registered?.length >= 4) {
            setError("You can only register for 4 clubs")
            return true
        }
        return false
    }



    const isOtherClubsSelectedInSlot = (slot: string) => {
        const selectedSlots = selectedClubs.map(club => club.slot);
        return selectedSlots.includes(slot);
    };

    const onAutoCompleteChange = (event: any, value: any) => {
        if (value.length > 4) {
            setError('You cannot select more than 4 sessions');
            return;
        }

        let club = value[value.length - 1];
        if (value.length != 0 && ((isFourSummerSchoolSelected() || isOtherClubsSelectedInSlot(club.slot) || isSlotRegistered(club.slot)) && value.length >= selectedClubs.length && !selectedClubs.includes(club)) || registered?.includes(club)) value.pop()

        setSelectedClubs(value as any);
    }

    const [selectedClubs, setSelectedClubs] = useState<
        { id: string; ids?: string[]; slot: string; title: string }[]
    >([]);

    useEffect(() => {
        var initList = []
        if (initialVals) {
            if (!registered?.includes(initialVals) && !isSlotRegistered(initialVals.slot)) initList.push(initialVals)
            else {
                setError('You cannot register for this due to a slot clash'); navigate("/summer-school/register", { replace: true });

            }
        }
        setSelectedClubs(initList);
    }, [initialVals]);

    useEffect(() => {
        if (registered && registered.length > 4) {
            setError('You cannot register for more than 4 sessions');
            navigate("/summer-school/register", { replace: true });
        }
    }, [registered, navigate]);

    return (
        <form style={{ width: "100%", paddingTop: "2rem" }}>
            {
                error && <ErrorDialog
                    message={error}
                    handleClose={() => setError(undefined)}
                />
            }
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
                        label="Mobile No."
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        value={contact}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact(e.target.value)}
                    />
                </Grid>
                <Grid item container gap={4}>
                    <CustomTextField
                        id="college"
                        label="College Name"
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCollege(e.target.value)}
                        value={college}
                    />
                </Grid>
                <Grid item container gap={4}>
                    <CustomTextField
                        id="smail"
                        label="Email (Smail ID if from IITM)"
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        value={smail}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSmail(e.target.value)}
                    />
                    <Grid item container gap={2}>
                        <Typography variant="caption" color="white">
                            Only Select 4 or less Session
                        </Typography>

                    </Grid>
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
                                const isDisabled = selectedClubs.length >= 4 || isOtherClubsSelectedInSlot(session.slot) || registered?.includes(session) || isSlotRegistered(session.slot) || isFourSummerSchoolSelected();

                                if (selectedClubs.includes(session)) selected = true;
                                var checked = selected

                                return <li {...props}>
                                    <Checkbox
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                        style={{ marginRight: 8 }}
                                        checked={selected && isDisabled && !registered?.includes(session)}
                                        disabled={(!selectedClubs.includes(session) && isDisabled) || registered?.includes(session)}
                                    />
                                    <p style={{ margin: "0" }} className={(!selectedClubs.includes(session) && isDisabled) || registered?.includes(session) ? "disabled" : ""}>{"Slot " + session.slot + ` ( ${session.time} ) ` + " - " + session.title + " by "} <b>{(session.club ?? session.clubs.join(" and "))}</b>  </p>
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

