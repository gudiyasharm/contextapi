import React, { useContext } from 'react';
import { LoginContext } from './LoginContext';

const Login = () => {
    const {setUserName, setShowUserName, setFname, setLname} = useContext(LoginContext);
  return (
    <div style={{marginTop:'50px'}}>
        <input type="text" 
        placeholder='Enter Fistname'
        onChange={(e) => {setFname(e.target.value)}}
        /> <br />

        <input type="text" 
        placeholder='Enter Lastname'
        onChange={(e) => {setLname(e.target.value)}}
        /> <br />

        <input type="text" 
        placeholder='Enter Username'
        onChange={(e) => {setUserName(e.target.value)}}
        /> <br />
        
        <button type='submit' onClick={() =>{setShowUserName(true)}}>Submit</button>
    </div>
  )
}

export default Login