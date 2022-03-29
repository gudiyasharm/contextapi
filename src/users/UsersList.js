import React, {  useContext } from 'react';
import User from './User';
import { UserContext } from './UserContext';

const UsersList = () => {
    const [users, setUsers] = useContext(UserContext);
  return (
    <div>
      {users.map(use =>(
        <User name={use.name} city={use.city} key={use.id}/>
      ))}
    </div>
  )
}

export default UsersList