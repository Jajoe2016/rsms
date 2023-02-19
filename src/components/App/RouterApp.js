import React, { useState } from 'react';
import { BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import Dashboard  from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';

function RouterApp() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  // if (token === "-1"){
  //   return (<div> <p> Error while Logging in </p> {Login} setToken={setToken} </div>)
  // }

  return (  
    <Router>
           <div>
            <ul>
              <li>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/Preferences">Preferences</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/Dashboard' element={< Dashboard />}></Route>
                 <Route exact path='/Preferences' element={< Preferences />}></Route>
          </Routes>
          </div>
       </Router>
  );
}
export default RouterApp;