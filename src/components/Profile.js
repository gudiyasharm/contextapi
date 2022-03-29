import React from 'react';
import { useContext } from 'react';
import { LoginContext } from './LoginContext';

const Profile = () => {
    const {userName, fName, lName} = useContext(LoginContext);
  return (
    <div>
        <h1>Profile</h1>
        <h2>First Name: {fName}</h2>
        <h2>Last Name: {lName}</h2>
        <h2>Username: {userName}</h2>
        
    </div>
  )
}

export default Profile