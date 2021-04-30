import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './home';
import CityDetail from './cityDetail';

class App extends React.Component {

  render(){
    return(
      <Router>
        <Switch>
        <Route exact path='/home' component={Home}></Route>
        <Route exact path='/detail/:cityName' component={CityDetail}></Route>
        </Switch>
    </Router>
    )
  }

  
}

export default App;
