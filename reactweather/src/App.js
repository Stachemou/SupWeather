import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './home';

class App extends React.Component {

  render(){
    return(
      <Router>
        <Switch>
        <Route exact path='/home' component={Home}></Route>
        </Switch>
    </Router>
    )
  }
}

export default App;
