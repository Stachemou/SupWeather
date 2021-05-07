import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './home';
import CityDetail from './cityDetail';
import Login from './login';
import LogOut from './logOut';
import Register from './register';
import NavBar from './navBar';

import useToken from './useToken';
import useUser from './useUser';

import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./theme";
import  {useDarkMode} from "./useDarkMode"
import Toggle from "./toggler"

function App() {
  const { token, setToken } = useToken();

  const { user, setUser } = useUser();


  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <div className={localStorage.getItem('theme')=== 'light'? 'App-body': 'App-body-dark'}>
      <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <Router>
          <Switch>
            <Route exact path='/register'><Register /></Route>
            <Route exact path='/login'><Login setToken={setToken} setUser={setUser} /></Route>

          <Route exact path='/logout'><LogOut /></Route>
          <Route exact path='/'><NavBar user={user} /><Home user={user} token={token}/></Route>
          <Route exact path='/detail/:cityName' component={CityDetail}></Route>
        </Switch>
      </Router>
      </>
      </ThemeProvider>
    </div>
  )
}

export default App;
