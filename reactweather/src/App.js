import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './home';
import CityDetail from './cityDetail';
import Login from './login';
import Register from './register';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

    return(
      <Router>
        <Switch>
        <Route exact path='/'><Login setToken={setToken}/></Route>
        <Route exact path='/register'><Register/></Route>
        <Route exact path='/home'><Home setToken={setToken}/></Route>
        <Route exact path='/detail/:cityName'><CityDetail setToken={setToken}/></Route>
        </Switch>
    </Router>
    )
}

export default App;
