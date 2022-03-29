import React from "react";
import './App.css';
import UsersList from "./users/UsersList";
import { UserProvider } from "./users/UserContext";
import Nav from "./users/Nav";
import AddUser from "./users/AddUser";

function Lists() {
    return(
        <UserProvider>
        <div className="App">
            <Nav />
            <AddUser />
            <UsersList />
        </div>
        </UserProvider>
    )
}

export default Lists;