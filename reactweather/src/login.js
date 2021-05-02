import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

async function loginUser(params){
    return axios.post('http://localhost:3002/authentification/login', params ).catch( error => {
        console.log(error);
      } );
}

export default function Login({ setToken }) {
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          name,
          password
        });
        console.log(token);
        setToken(token);
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