import React from 'react';
import { ReactComponent as DisconnectIcon } from '../src/assets/power.svg';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends React.Component {
    state = {
        connect: true,
    }

    render(){
        if(this.props.user === null){
            return null;
      }
        return (
            <div className="bar">
                <span id="title">Supweather</span>
                <span>{this.props.user.name}</span>
                    <button>
                    <Link to={{pathname: `/logout`}}>
                        Disconnect
                    <DisconnectIcon/>
                    </Link>
                    </button>
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