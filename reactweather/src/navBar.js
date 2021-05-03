import React from 'react';
import { Redirect } from 'react-router';
import { ReactComponent as DisconnectIcon } from '../src/assets/power.svg';

class NavBar extends React.Component {
    state = {
        connect: true,
    }

    render(){
        if(this.props.user === null){
            return null;
      }
      if(!this.state.connect){
        return <Redirect to={{pathname: '/logout'}}/>
      }
        return (
            <div>
                <h1>{this.props.user.name}</h1>
                <button onClick={this.disconnect}>
                    <DisconnectIcon/>
                </button>
            </div>

        )
    }

    disconnect= async (event)=>{
        event.preventDefault();
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        this.setState({connect: false})
    }

}


export default NavBar;