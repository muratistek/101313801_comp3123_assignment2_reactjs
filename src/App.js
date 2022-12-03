import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EmployeeDetails from './components/EmployeeDetails';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/SignUp';
import React, { useState, useEffect } from 'react'


function App() {
  const [checkSignUp, setCheckSignUp] = useState(false)

  let email = localStorage.getItem('email')
  let username = localStorage.getItem('username')

  useEffect(() => {
    if (checkSignUp) {
      email = localStorage.getItem('email')
      username = localStorage.getItem('username')
    }
  }, [checkSignUp])

  const useLoginStatus = () => {
    if (email || username) {
      return true
    }
    return false
  }

  const RequireAuth = ({ children }) => {
    const userIsLogged = useLoginStatus();

    if (!userIsLogged) {
      return <Login />;
    }
    return children;
  };

  return (
    <>
      {email || username ?
        <nav className="navbar navbar-light bg-primary">
          <div className="container-fluid">
            <a href='/' className="navbar-brand">Employee Management App</a>
            <div className="d-flex w-auto">
              {email && <p className='alignStatus'>{email}</p>}
              {username && <p className='alignStatus'>{username}</p>}
              <Logout />
            </div>
          </div>
        </nav>
        : ""}
      <BrowserRouter>
        <Routes>
          {!email && !username ? <Route path='/' element={<Login />} /> : <Route path='/' element={<EmployeeList />} />}
          {!email && !username ? <Route path='/signup' element={<SignUp setCheckSignUp={setCheckSignUp} />} /> : <Route path='/' element={<EmployeeList />} />}
          <Route path='/employeeList' element={
            <RequireAuth><EmployeeList /></RequireAuth>} />
          <Route path='/addEmployee' element={<RequireAuth><AddEmployee /></RequireAuth>} />
          <Route path='/viewEmployee/:empid' element={<RequireAuth><EmployeeDetails /></RequireAuth>} />
          <Route path='/addEmployee/:empid' element={<RequireAuth><AddEmployee /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
