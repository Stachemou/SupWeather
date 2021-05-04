import React from 'react';
import { Redirect } from 'react-router';
import CityContainer from './city';

class Home extends React.Component {

  render(){
    if(!this.props.token){
      return <Redirect to={{pathname: '/login'}}/>;
    }


    return(
      <CityContainer user={this.props.user}/>
    )
  }
}

export default Home;