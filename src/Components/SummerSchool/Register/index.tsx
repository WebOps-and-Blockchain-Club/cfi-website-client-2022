import React from 'react'
import CustomBox, { CustomGridPage } from '../../Shared/CustomBox'
import Heading from '../../Shared/Heading'
import RegisterForm from './RegisterForm'

const Register = () => {
    return (
        <CustomBox>
            <CustomGridPage>
                <Heading red='Register' white=''></Heading>
                <RegisterForm />
            </CustomGridPage>
        </CustomBox>
    )
}

export default Register
