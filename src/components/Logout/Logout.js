import React, { useState } from 'react';
import './Logout.css';
import PropTypes from 'prop-types';


export default function Logout({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const token = useState();
  setToken(undefined)
   sessionStorage.removeItem('tokenFromLocalStore');

  return(
    <div className="App">
            <div className='App-body'>
                <p> Succesfully Loggged out </p>
            </div>
        </div>
  )

}
Logout.propTypes = {
    setToken: PropTypes.func.isRequired
  }