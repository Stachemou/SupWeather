import React from 'react';
import CityContainer from './city';

class Home extends React.Component {

  render(){
    if(this.props.user === null){
      return null;
}
    return(
      <CityContainer user={this.props.user}/>
    )
  }
}

export default Home;