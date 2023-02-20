import React, { useState } from 'react';
import { BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import Dashboard  from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Operations from '../Operations/Operations'
import Login from '../Login/Login';
import './App.css';
// import Logout from '../Logout/Logout';

function RouterApp() {
  const [token, setToken] = useState();
  const tokenFromLocalStore =  sessionStorage.getItem('tokenFromLocalStore');
  console.log(`from router token: `,token);
  console.log(`from router  sessionStorage`,  sessionStorage);
  console.log(`from router: tokenFromLocalStore`,tokenFromLocalStore);

  function handleLogout() {
    setToken('-2');
     sessionStorage.removeItem('tokenFromLocalStore');
  }

  if (!tokenFromLocalStore) {
    if(token === undefined) {
      return ( <div>
        <Login setToken={setToken} />
        <div className='App-small-body'>
        </div>
        </div>)
    }
    if (token === "-1"){
        return (
         <div>
       <Login setToken={setToken} />
       <div className='App-small-body'>
       <p> Login Error</p>
       </div>
       </div>)
    }
    if (token === "-2"){
      return (
       <div>
     <Login setToken={setToken} />
     <div className='App-small-body'>
     <p> Log out succesful</p>
     </div>
     </div>)
  }
  }
  
  return (  
    <Router>
           <div className='App-body'>
            <ul className='links'>
                <Link to="/Dashboard"><a> Dashboard </a> </Link>
                <Link to="/Preferences"><a> Preferences </a></Link>
                <Link to="/Operations"><a> Operations </a></Link>
            </ul>
           <Routes>
                 <Route exact path='/Dashboard' element={< Dashboard />}></Route>
                 <Route exact path='/Preferences' element={< Preferences />}></Route>
                 <Route exact path='/Operations' element={< Operations />}></Route>
          </Routes>
          <form onSubmit={handleLogout}>
                    <p> <input type="submit" value="Logout" /> </p>
                </form>
          </div>
       </Router>
  );
}
export default RouterApp;