import React, { useState }from 'react';
import Modal from './Modalpopups'

//ui imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel, ThemeProvider, Stack } from '@mui/material';
import theme from '../../theme';

async function createUser(userData){

  return fetch('http://localhost:3001/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(data => data.json())
  
}
function Operations() {
  const [id, setId] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [accountType, setAccountType] = useState();
  const [operationcode, setOperationcode] = useState();
  const [statusCode, setStatusCode] = useState();

  async function handleSubmit() {
    const data = await createUser({ "id": id, "username" : username, "password" : password, "email": email, "type" : accountType });
    setStatusCode(data.code);
  }

  async function handleButton() {
  //  const ret = createUserForm();
  setOperationcode(1);
  }

  if ( operationcode == 1) {
    return (
      <form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <FormControl>
            <TextField name="id" label='user id' required sx={{mb: 2}} variant='filled' size='small' type='string' color='neutral' onChange={e => setId(e.target.value)}></TextField>
            <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
              <TextField name="name" label='username' required sx={{mb: 1}} variant='filled' size='small' type='string' color='neutral' onChange={e => setUserName(e.target.value)}></TextField>
              <TextField name="password" label='password' required sx={{mb: 1}} variant='filled' size='small' type='password' color='neutral' onChange={e => setPassword(e.target.value)}></TextField>
            </Stack>
            <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
              <TextField name="email" label='email' required sx={{mb: 1}} variant='filled' size='small' type='email' color='neutral' onChange={e => setEmail(e.target.value)}></TextField>
              <TextField name="accountType" label='account type' required sx={{mb: 1}} variant='filled' size='small' type='string' color='neutral'onChange={e => setAccountType(e.target.value)}></TextField>
            </Stack>
            <TextField name="dob" label="Date of Birth" required sx={{mb: 1}} variant='outlined' size='medium' type="date" color='neutral' />
            <Button variant="contained" sx={{mb: 3}} color='neutral' type="submit">Create User</Button>
          </FormControl>
        </ThemeProvider>
      </form>
    )
  }

  if ( statusCode == 200) {
    return (
      <div>
        Your operations page. Click on buttons below.
          <form onClick={handleButton}>
            <ThemeProvider theme={theme}>
              <Button variant="contained" sx={{mb: 3}} color='neutral' type="submit">Add User</Button>
              <Button variant="contained" sx={{mb: 3}} color='neutral' type="submit">Remove User</Button>
              <Button variant="contained" sx={{mb: 3}} color='neutral' type="submit">Add School Cordinator User</Button>
            </ThemeProvider>
          </form>
        <div className='App-small-body'> Operation was succesful! </div>
      </div>   )
  }

  return(
    <div>
    Your operations page. Click on buttons below.
    <form onClick={handleButton}>
    <ThemeProvider theme={theme}>
    <Button variant="contained" sx={{mb: 3}} color='neutral' type="submit">Add User</Button>
    <Button variant="contained" sx={{mb: 3}} color='neutral' type="submit">Remove User</Button>
    <Button variant="contained" sx={{mb: 3}} color='neutral' type="submit">Add School Cordinator User</Button>
    </ThemeProvider>
    </form>
    </div>   
  );
}

export default Operations;