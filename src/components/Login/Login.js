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

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  return(
    <div className="App">
            <body className='App-body'>
                <p> Please Login </p>
                <form onSubmit={handleSubmit} action="" method="POST">
                    <p> <label> username: <input type="text" name="name onChange={e => setUserName(e.target.value)}" /> </label> </p>
                    <p> </p>
                    <p> <label> password: <input type="password" name="name onChange={e => setPassword(e.target.value)}" /> </label> </p>
                    <p> <input type="submit" value="Submit" /> </p>
                </form>
            </body>
        </div>
  )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }