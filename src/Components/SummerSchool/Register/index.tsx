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


    const getInitVals = () => {
        let registeredSessions = data?.getMe.clubs ?? [];

        let state: { id: any; slot: any; title: string }[] = []
        // for collabs
        for (const item of registeredSessions) {
            for (const session of content.sessions) {
                if (session.ids && session.slot == item.slot) session.ids.forEach(id => state.push({ id: id, slot: item.slot, title: session.title }))
            }
        }

        for (const item of registeredSessions) {
            const matchingItem = content.sessions.find(new_item => { return new_item.id && new_item.id === item.id && new_item.slot === item.slot });
            if (matchingItem) {
                const { id, slot, title } = matchingItem;
                state.push({ id, slot, title });
            }
        }
        if (searchParams) content.sessions.forEach(session => { if (searchParams.get.name == session.title) state.push({ id: session.id, slot: session.slot, title: session.title }) })
        console.log(state)
        return state
    }

    const handleSubmit = async (submitData: AddCLubsInput) => {
        try {
            if (!submitData) setErrorMessage('Enter all the required fields')
            else {
                console.log(submitData)
                console.log(new Date())
                await SSRegisterMutation({
                    variables: {
                        addClubsInput: submitData
                    }
                })
                console.log(new Date())
            }
        } catch (error) {
            console.log(error)
        }
    }

    const submitCallBack = () => {
        if (registerData?.addCLubs.id) navigate(`/summer-school/profile`);
    };

    useEffect(() => {
        if (error) setErrorMessage("Some Error Occurred");
        if (createError) setErrorMessage("Some Error Occurred");
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
                <RegisterForm initialVals={getInitVals()} handleSubmit={handleSubmit} />
            </CustomGridPage>
        </CustomBox>
    )
}

export default Register
