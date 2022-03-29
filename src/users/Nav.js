import React from 'react';
import { UserContext } from './UserContext';
import { useContext } from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core'


const Nav = () => {
    const [users, setUsers] = useContext(UserContext);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       Number of Users: {users.length}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Nav