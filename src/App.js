import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import ForgotPassword from './Components/ForgotPassword/ForgotPassoword'; 
import Home from './Components/Home/Home2';
import Users from './Components/User/User';
import Account from './Components/Account/Account';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Attendance from './Components/Attendance/Attendance'
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Import PrimeReact theme
import 'primereact/resources/primereact.min.css';                  // PrimeReact core styles
import { useSelector } from 'react-redux';

const App = () => {
  const demoState= useSelector(state => state.DemoState);
  useEffect(() => {
    let change = document.querySelector(".classChange");
    if(demoState.themechange){
    change.classList.add("toggleMode")
  } else{
    change.classList.remove("toggleMode")
  } 
  }, [demoState]);
  return (
    <div className="classChange">
    <PrimeReactProvider>
    <Router>
      <Routes> 
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/account" element={<Account />} />
        <Route path="/attendance" element={<Attendance />} />
            </Routes>
    </Router>
    </PrimeReactProvider>
    </div>
  );
};

export default App;
