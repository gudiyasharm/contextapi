import { Button, TextField } from '@material-ui/core'
import React, { useState, useContext } from 'react'
import { UserContext } from './UserContext';

const AddUser = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [users, setUsers] = useContext(UserContext)

    const updateName = (e) =>{
        setName(e.target.value);
    };

    const updateCity = (e) =>{
        setCity(e.target.value)
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUsers(preUsers => [...preUsers, {name: name, city: city}]);
    }

    return (
        <div style={{marginTop:'30px'}}>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Enter Name" variant="outlined" value={name} onChange={updateName} />
                <TextField id="outlined-basic" label="Enter City" variant="outlined" value={city} onChange={updateCity}/>
                <Button variant='contained' type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default AddUser;