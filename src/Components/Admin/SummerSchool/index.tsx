import React, { useContext, useEffect, useState } from 'react'
import CustomBox, { CustomGridPage } from '../../Shared/CustomBox'
import { useGetRegisteredUsersQuery, useGetRegistrationCountQuery } from '../../../generated/graphql';
import { FormControl, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { CustomAutocomplete } from '../../Shared/InputField';
import content from "../../../Assets/Data/SummerSchool"
import AuthContext from '../../../Utils/context';
import Paper from '@mui/material/Paper';
import ErrorDialog from '../../Shared/Dialog/ErrorDialog';
import Loading from '../../Shared/Dialog/Loading';
import Heading, { HeadingSub } from '../../Shared/Heading';


const SummerSchoolAdmin = () => {
    const { state } = useContext(AuthContext)!;
    const getSlots = () => {
        let slots = [];

        for (var x of content.sessions) {
            if ((x.email && x.email == state.user?.email) || (x.emails && x.emails.includes(state.user?.email))) slots.push(x.slot)
        }
        if (slots.length == 0) return ["A", "B", "C", "D", "E", "F1", "F2"]
        return slots
    }
    const [slot, setSlot] = useState<string>(getSlots()[0])
    const [errorMessage, setErrorMessage] = useState<string>()

    const onChange = (event: any, value: any) => {
        setSlot(value)
    }

    const { data, loading, error, refetch } = useGetRegisteredUsersQuery({
        variables: {
            slot: slot
        }
    })

    const { data: count, error: countError, loading: countLoading } = useGetRegistrationCountQuery()

    useEffect(() => {
        const fetchData = async () => {
            try {
                await refetch();
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [slot])

    useEffect(() => {
        if (error && slot) setErrorMessage("Some Error Occurred");
        if (countError) setErrorMessage("Some Error Occurred");
    }, [error]);
    return (
        <CustomBox>
            <CustomGridPage>
                <Loading loading={!!loading || !!countLoading} />
                <ErrorDialog
                    message={errorMessage}
                    handleClose={() => setErrorMessage(undefined)}
                />
                <Heading white='' red="Registrations"></Heading>
                <Grid container paddingTop={"1rem"} justifyContent={"space-between"}>
                    <FormControl>
                        <CustomAutocomplete
                            id="slot-select"
                            renderInput={(params) => (
                                <TextField {...params} label="Select Slot" />
                            )}
                            sx={{ minWidth: "170px", justifyContent: "center", margin: "1rem", marginLeft: "0" }}
                            multiple={false}
                            value={slot}
                            options={getSlots()}
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
                    <Grid item alignSelf={"center"} ><HeadingSub white="Overall Registrations - " red={`${count?.getRegistrationCount ?? ""}`} ></HeadingSub></Grid>


                    <TableContainer>
                        <Table sx={{
                            minWidth: 650, "& .MuiTableCell-root": {
                                borderBottom: "1px solid red"
                            }
                        }} aria-label="simple table" stickyHeader>
                            <TableHead>
                                <TableRow sx={{
                                    "& .MuiTableCell-root": {
                                        borderBottom: "none"
                                    }
                                }}>
                                    <TableCell> S.No.</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>{"Smail (if from IITM)"}</TableCell>
                                    <TableCell>Phone</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data &&
                                    data?.getRegisteredUsers.map((user, index) => <TableRow
                                        key={`${index + 1}`}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" sx={{ color: "white" }}>{`${index + 1}`}</TableCell>
                                        <TableCell component="th" scope="row" sx={{ color: "white" }}>{user.name}</TableCell>
                                        <TableCell component="th" scope="row" sx={{ color: "white" }}>{user.email}</TableCell>
                                        <TableCell component="th" scope="row" sx={{ color: "white" }}>{user.smail}</TableCell>
                                        <TableCell component="th" scope="row" sx={{ color: "white" }}>{user.contact}</TableCell>

                                    </TableRow>

                                    )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                {
                    (!data || data.getRegisteredUsers.length == 0) &&
                    <Typography
                        variant="h5"
                        color="red"
                        sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova",
                            justifySelf: "center",
                            padding: "2rem"
                        }}
                    >
                        No data found
                    </Typography>


                }
            </CustomGridPage >
        </CustomBox>


    )
}

export default SummerSchoolAdmin
