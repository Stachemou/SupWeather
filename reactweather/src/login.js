import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import './log.css';

async function loginUser(params){
    return axios.post('http://localhost:3002/authentification/login', params ).catch( error => {
        console.log(error);
      } );
}

export default function Login({ setToken, setUser }) {
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          name,
          password
        });
        if(token !== undefined){
            setToken(token.data.token);
            setUser(token.data.user);
            setRedirect(true);
        }
      }

      if(redirect){
          return <Redirect to={{pathname: '/'}}/>;
      }
        return (
            <div className="logContainer">
                <h1>Supweather</h1>
                <h3>Connection</h3>
                <form onSubmit={handleSubmit}>
                    <div className="logInput">
                        <label>
                            <span>Username</span><br/>
                            <input type="text" onChange={e => setName(e.target.value)}/>
                        </label>
                    </div>
                    <div className="logInput">
                        <label>
                            <span>Password</span><br/>
                            <input type="password" onChange={e => setPassword(e.target.value)}/>
                        </label>
                        <br/>
                        <Link to={{pathname: `/register`}}>Register</Link>
                    </div>
                    <div className="submitButton">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>

        )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }