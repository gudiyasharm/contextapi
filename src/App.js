import { useState } from 'react';
import './App.css';
import Login from './components/Login'
import Profile from './components/Profile';
import {LoginContext} from './components/LoginContext'

function App() {
  const [showUserName, setShowUserName] = useState(false);
  const [fName, setFname] = useState('')
  const [lName, setLname] = useState('')
  const [userName, setUserName] = useState('')

  return (
    <div className="App">
      <LoginContext.Provider value={{setLname, lName, userName, setUserName, setShowUserName, fName, setFname}}>
      {showUserName ? <Profile/> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
