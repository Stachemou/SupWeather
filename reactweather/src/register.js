import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Register extends React.Component {

  render(){
    return(
        <div>
        <h1>Register</h1>
        <form>
            <label>
                <p>Username</p>
                <input type="text" />
            </label>
            <label>
                <p>email</p>
                <input type="text" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            <label>
                <p>Confirm password</p>
                <input type="password" />
            </label>
            <div>
            <Link to={{pathname: `/`}}>Login</Link>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
    )
  }
}

export default Register;