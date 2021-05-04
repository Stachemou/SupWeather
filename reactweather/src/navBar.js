import React from 'react';
import { ReactComponent as DisconnectIcon } from '../src/assets/power.svg';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    state = {
        connect: true,
    }

    render(){
        if(this.props.user === null){
            return null;
      }
        return (
            <div>
                <h1>{this.props.user.name}</h1>
                <Link to={{pathname: `/logout`}}>
                <DisconnectIcon/>
                </Link>
            </div>

        )
    }

    disconnect= async (event)=>{
        event.preventDefault();
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
    }

}


export default NavBar;