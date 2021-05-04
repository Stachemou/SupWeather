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

function App() {
  const { token, setToken } = useToken();

  const { user, setUser } = useUser();

  return (
    <Router>
        <Switch>
          <Route exact path='/register'><Register /></Route>
          <Route exact path='/login'><Login setToken={setToken} setUser={setUser} /></Route>

        <Route exact path='/logout'><LogOut /></Route>
        <Route exact path='/'><NavBar user={user} /><Home user={user} token={token} /></Route>
        <Route exact path='/detail/:cityName' component={CityDetail}></Route>
      </Switch>
    </Router>
  )
}

export default App;
