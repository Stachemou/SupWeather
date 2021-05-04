import React from 'react';
import { Redirect } from 'react-router';

export default function LogOut() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    return <Redirect to={{pathname: '/login'}}/>

}
