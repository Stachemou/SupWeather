import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Route, Router } from "react-router";
import CityContainer from './city';

class App extends React.Component {

  render(){
    return(
      <Router>
    <Route>
      path={'/Home'}
      render={(props) => 
                    <CityContainer {...props} />
            }
    </Route>
    </Router>
    )
  }
}

export default App;
