import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [users, setUsers] = useState([
        {
            name: 'Jhon',
            city: 'New York',
            id: 1265
        },

        {
            name: 'Bob',
            city: 'Los Angeles',
            id: 1268
        },

        {
            name: 'Jhon',
            city: 'Chicago',
            id: 1268
        },
    ]);
    return (
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
}