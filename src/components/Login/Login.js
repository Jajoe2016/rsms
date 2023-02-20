import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const token = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const data = await loginUser({ "username" : username, "password" : password });
    if (data.token) setToken(data.token);
    else setToken('-1');
    if (data.token != "-1") sessionStorage.setItem('tokenFromLocalStore', data.token);
  }

  return(
    <div className="App">
            <div className='App-body'>
                <p> Please Login </p>
                <form onSubmit={handleSubmit}>
                    <p> <label> username: <input type="text" name="name" onChange={e => setUserName(e.target.value)} /> </label> </p>
                    <p> </p>
                    <p> <label> password: <input type="password" name="name" onChange={e => setPassword(e.target.value)} /> </label> </p>
                    <p> <input type="submit" value="Login" /> </p>
                </form>
            </div>
        </div>
  )

}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }