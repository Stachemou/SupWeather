import React from 'react';
import CityContainer from './city';

class Home extends React.Component {

  render(){
    return(
      <CityContainer user={this.props.user}/>
    )
  }
}

export default Home;