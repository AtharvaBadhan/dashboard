import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import ForgotPassword from './Components/ForgotPassword/ForgotPassoword'; 
import Home from './Components/Home/Home2';
import Users from './Components/User/User';
import Message from './Components/Message/Message';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/messages" element={<Message />} />
      </Routes>
    </Router>
  );
};

export default App;
