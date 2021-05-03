import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

async function loginUser(params){
    return axios.post('http://localhost:3002/authentification/login', params ).catch( error => {
        console.log(error);
      } );
}

export default function Login({ setToken, setUser }) {
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          name,
          password
        });
        if(token !== undefined){
            setToken(token.data.token);
            setUser(token.data.user);
        }
      }

      
        return (
            <div>
                <h1>Connection</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Username</p>
                        <input type="text" onChange={e => setName(e.target.value)}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <Link to={{pathname: `/register`}}>Register</Link>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>

        )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }