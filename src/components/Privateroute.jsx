import React from 'react';
import {Outlet,Navigate} from 'react-router-dom';

const Privateroute = () => {
    const loggedIn = true;
    if(loggedIn){
        return <Outlet/>
    }else{
        return(
            <Navigate to={'/login'} />
        )
    }


};

export default Privateroute;