import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AddCLubsInput, refetchGetClubsQuery, useAddCLubsMutation, useGetMeQuery, useGetMeSummerSchoolQuery } from '../../../generated/graphql'
import CustomBox, { CustomGridPage } from '../../Shared/CustomBox'
import Heading from '../../Shared/Heading'
import RegisterForm from './RegisterForm'
import content from "../../../Assets/Data/SummerSchool"
import Loading from '../../Shared/Dialog/Loading'
import SuccessDialog from '../../Shared/Dialog/SuccessDialog'
import ErrorDialog from '../../Shared/Dialog/ErrorDialog'

const Register = () => {
    const [errorMessage, setErrorMessage] = React.useState<string>();

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [initialVals, setInitialVals] = useState<{ id: string; slot: string; title: string }[]>();

    const { data, loading, error } = useGetMeSummerSchoolQuery()

    const [
        SSRegisterMutation,
        { data: registerData, loading: createLoading, error: createError },
    ] = useAddCLubsMutation();


    const getRegistered = () => {
        var registeredSessions = JSON.parse(JSON.stringify(data?.getMe.clubs ?? []));
        var registeredslots = data?.getMe.slots;
        var registered = [];
        for (var x of registeredSessions) {
            if (x.id == "product-design club" || x.id == "team-sahaay") x.slot = "C"
            x.slot = content.sessions.find((e) => e.id == x.id)?.slot
        }
        for (const item of registeredSessions) {
            const matchingItem = content.sessions.find(new_item => { return (new_item.id && new_item.id === item.id || new_item.id && item.id == "team-sahaay") && new_item.slot === item.slot && new_item.id != "programming-club" });
            if (matchingItem) {
                registered.push(matchingItem);
            }
        }

        return registered;
    }
    const getInitVals = () => {
        let state: any;

        if (searchParams) content.sessions.forEach(session => { if (searchParams.get('name')?.split('-').join(" ") == session.title) state = session })

        return state
    }

    const handleSubmit = async (submitData: AddCLubsInput) => {
        try {
            if (!submitData) setErrorMessage('Enter all the required fields')
            else {
                console.log(submitData)
                await SSRegisterMutation({
                    variables: {
                        addClubsInput: submitData
                    }
                })

            }
        } catch (error) {
            console.log(error)
        }
    }

    const submitCallBack = () => {
        if (registerData?.addCLubs.id) { navigate(`/summer-school/profile`); window.location.reload() }
    };

    useEffect(() => {
        if (error) setErrorMessage("Some Error Occurred");
        console.log(error)
        if (createError) setErrorMessage("Some Error Occurred");
        console.log(createError)
    }, [error, createError]);

    return (
        <CustomBox>
            <CustomGridPage>
                <Loading loading={!!loading || !!createLoading} />
                <ErrorDialog
                    message={errorMessage}
                    handleClose={() => setErrorMessage(undefined)}
                />
                {registerData?.addCLubs.id && (
                    <SuccessDialog
                        message={
                            "Successfully Registered"
                        }
                        callBack={submitCallBack}
                    />
                )}
                <Heading red='Register' white=''></Heading>
                <RegisterForm initialVals={getInitVals()} registered={getRegistered()} handleSubmit={handleSubmit} search={searchParams.get('name')?.split('-').join(" ")} />
            </CustomGridPage>
        </CustomBox>
    )
}

export default Register
