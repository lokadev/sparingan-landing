import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
// import Match from './components/Match';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPass from './components/ForgotPass';
import EditProfile from './components/EditProfile';
import FormMatch from './components/FormMatch';

const App = () => {
  let detailUser = localStorage.getItem('idUser')

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} exact />
          {/* <Route path='/pertandingan' element={<Match />} /> */}
          {/* <Route path='/pertandingan/redirect/' element={<MatchRedirect />} /> */}
          <Route path='/login' element={detailUser ? <Navigate to='/' /> : <Login />} />
          <Route path='/register' element={detailUser ? <Navigate to='/' /> : <Register />} />
          <Route path='/forgot' element={<ForgotPass />} />
          <Route path='/profile' element={<EditProfile />} />
          <Route path='/form-match' element={<FormMatch />} />
          {/* <Route component={Error}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
