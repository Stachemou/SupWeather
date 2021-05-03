import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Register extends React.Component {

  render(){
    return(
        <div>
        <h1>Register</h1>
        <form onSubmit={this.createAccount}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => this.setState({username: e.target.value})}/>
            </label>
            <label>
                <p>email</p>
                <input type="text" onChange={e => this.setState({email: e.target.value})}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => this.setState({password: e.target.value})}/>
            </label>
            <label>
                <p>Confirm password</p>
                <input type="password" onChange={e => this.setState({confirmPassword: e.target.value})}/>
            </label>
            <div>
            <Link to={{pathname: `/login`}}>Login</Link>
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