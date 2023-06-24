import React from 'react'
import { LoginType, UserRole } from '../../generated/graphql';
import Auth from '../Auth';

const SummerSchoolAuth = () => {
    return (
        <Auth
            roles={[UserRole.User]}
            isSmailOnly={false}
            loginType={LoginType.Summerschool}
        />
    );
}

export default SummerSchoolAuth
