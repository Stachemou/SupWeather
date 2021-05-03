import React from 'react';
import { Redirect } from 'react-router';

export default function LogOut() {
    return(
        <Redirect to={{pathname: '/login'}}/>
    )
}
