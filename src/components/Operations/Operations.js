import React, { useState }from 'react';
import Modal from './Modalpopups'

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

  // async function createUserForm(){
  //   return(
      
  //   )
  // }

  async function handleButton() {
  //  const ret = createUserForm();
  setOperationcode(1);
  }

  if ( operationcode == 1) {
    return (
<form onSubmit={handleSubmit}>
                    <p> <label> user id: <input type="text" name="id" onChange={e => setId(e.target.value)} /> </label> </p>
                    <p> <label> username: <input type="text" name="name" onChange={e => setUserName(e.target.value)} /> </label> </p>
                    <p> <label> password: <input type="password" name="password" onChange={e => setPassword(e.target.value)} /> </label> </p>
                    <p> <label> email: <input type="text" name="email" onChange={e => setEmail(e.target.value)} /> </label> </p>
                    <p> <label> account type: <input type="text" name="accountType" onChange={e => setAccountType(e.target.value)} /> </label> </p>
                    <p> <input type="submit" value="Create User" /> </p>
                </form>
    )
  }

  if ( statusCode == 200) {

    return (
      <div>
      Your operations page. Click on buttons below.
      <form onClick={handleButton}>
          <p> <input type="submit" value="Add User" /> </p>
      </form>
      A new user was added to db succesfully!
      </div>   )
  }


  return(
    <div>
    Your operations page. Click on buttons below.
    <form onClick={handleButton}>
        <p> <input type="submit" value="Add User" /> </p>
    </form>
    </div>   
  );
}

export default Operations;