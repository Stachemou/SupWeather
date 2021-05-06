import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './log.css';

class Register extends React.Component {

  render(){
    return(
        <div className="logContainer">
        <h1>Supweather</h1>
        <h3>Register</h3>
        <form onSubmit={this.createAccount}>
            <div className="logInput">
              <label>
                  <span>Username</span><br/>
                  <input type="text" onChange={e => this.setState({username: e.target.value})}/>
              </label>
            </div>
            <div className="logInput">
              <label>
                  <span>Email address</span><br/>
                  <input type="text" onChange={e => this.setState({email: e.target.value})}/>
              </label>
            </div>
            <div className="logInput">
              <label>
                  <span>Password</span><br/>
                  <input type="password" onChange={e => this.setState({password: e.target.value})}/>
              </label>
            </div>
            <div className="logInput">
              <label>
                  <span>Confirm password</span><br/>
                  <input type="password" onChange={e => this.setState({confirmPassword: e.target.value})}/>
              </label>
              <br/>
              <Link to={{pathname: `/login`}}>Login</Link>
            </div>
            <div className="submitButton">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
    )
  }

  createAccount= async (event)=>{
    event.preventDefault();
    console.log(this.state.password);
    console.log(this.state.confirmPassword);
    if(this.state.password === this.state.confirmPassword){
        const params = { name: this.state.username, email: this.state.email, password: this.state.password };
        console.log(params);
        axios.post('http://localhost:3002/authentification/register', params ).then((res) => {
            console.log(res);
          }).catch(function (res) {
            console.log(res);
          });
    }
  }
}

export default Register;