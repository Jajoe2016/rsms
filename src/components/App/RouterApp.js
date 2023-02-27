import React, { useState } from 'react';
import { BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import Dashboard  from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Operations from '../Operations/Operations'
import Login from '../Login/Login';
import './App.css';
import OutlinedCard from './card';
// import Logout from '../Logout/Logout';

//ui imports
import Button from '@mui/material/Button';
import { FormControl, FormLabel, ThemeProvider } from '@mui/material';
import theme from '../../theme';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


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

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!tokenFromLocalStore) {
    if(token === undefined) {
      return ( <div>
        <Login setToken={setToken} />
        </div>)
    }
    if (token === "-1"){
        return (
         <div>
       <Login setToken={setToken} />
       <div className='App-small-body'> 
       <p> Login Error. Invalid username or password</p>
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
  
  const oldRouter =  <Router>
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
 <ThemeProvider theme={theme}>
<Button variant="contained" sx={{mb: 6}} type="submit">Logout</Button>
</ThemeProvider>
       </form>
 </div>
  </Router>

const newRouter = 
  <div>
    <ThemeProvider theme={theme}>
      <Button id="basic-button" variant="contained" sx={{mb: 6}} aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}
      onClick={handleClick} > Dashboard </Button>
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button',}}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </ThemeProvider>
    <OutlinedCard />
  </div>

  return (  
    oldRouter
  );
}
export default RouterApp;