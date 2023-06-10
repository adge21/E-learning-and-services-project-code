import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './About'
import Courses from './Courses'
import Services from './Services'
import Home from './Home'
import Navigation from './Navigation'
import Login from './Login'
import Signup from './Signup'
import Singlecourse from './Singlecourse'
import {GlobalProvider, GlobalContext} from "./context/GlobalState"
import ChatBotButton from './ChatBotButton'

function App() {
  return (
    <>
    <GlobalProvider>
    <Navigation/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/login" element={<LoginPrivateRoute><Login/></LoginPrivateRoute>}/>
      <Route exact path="/courses" element={<Courses/>}/>
      <Route exact path="/course/:id" element={<PrivateRoute><Singlecourse/></PrivateRoute>}/>
      <Route exact path="/services" element={<Services/>}/>
      <Route exact path="/signin" element={<LoginPrivateRoute><Signup/></LoginPrivateRoute>}/>
    </Routes>
    </GlobalProvider>
    <ChatBotButton />
    </>
  )
}

export default App;
function PrivateRoute({ children }) {
  const getToken = localStorage.getItem("isloggedin");
  let redirectURL = "/login";
  return  getToken ? children : <Navigate to={redirectURL} />;
}

function LoginPrivateRoute({ children }) {
  const getToken = localStorage.getItem("isloggedin");
  let redirectURL = "/";
  return  getToken ? <Navigate to={redirectURL} /> : children;
}