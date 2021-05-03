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
import Register from './register';

import useToken from './useToken';
import useUser from './useUser';

function App() {
  const { token, setToken } = useToken();

  const { user, setUser } = useUser();

  if(!token) {
    return <Login setToken={setToken} setUser={setUser} />
  }
    return(
      <Router>
        <Switch>
        <Route exact path='/register'><Register/></Route>
        <Route exact path='/'>
          {token ? <Redirect to="/home" /> : <Redirect to="/" /> }
          </Route>
        <Route exact path='/home'><Home user={user}/></Route>
        <Route exact path='/detail/:cityName' component={CityDetail}></Route>
        </Switch>
    </Router>
    )
}

export default App;
