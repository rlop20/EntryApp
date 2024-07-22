// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import NavBar from './navbars/NavBar';
import Topic1 from './topics/Topic1';
import Topic2 from './topics/Topic2';
import Topic3 from './topics/Topic3';
import Topic4 from './topics/Topic4';
import Topic5 from './topics/Topic5';
import Topic6 from './topics/Topic6';
import WIP from './topics/wip';
import Footer from './footer/footer';
import GoogleAd from './GoogleAd';
import Login from './login/login';
import SignUp from './signup/signup'; 
import SignIn from './signin/signin'; 
import UserProfile from './profiles/UserProfile';
import List from './list/List';
import CS101 from './classes/cs101'
import CS from './courses/cs'
import Layout from './backButton/Layout';
import Start from './start/Start'
import Privacy from './footer/Privacy'
import Code from './footer/CodeOfConduct'
import Terms from './footer/Terms'
import Copyright from './footer/Copyright'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/topic1" element={<Topic1 />} />
        <Route path="/topic2" element={<Topic2 />} />
        <Route path="/topic3" element={<Topic3 />} />
        <Route path="/topic4" element={<Topic4 />} />
        <Route path="/topic5" element={<Topic5 />} />
        <Route path="/topic6" element={<Topic6 />} />
        <Route path="/wip" element={<WIP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/list" element={<List />} />
        <Route path="/cs" element={<CS />} />
        <Route path="/cs101" element={<CS101 />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/code-of-conduct" element={<Code />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/copyright-policy" element={<Copyright />} />
        <Route path="/profile/:uid" element={<UserProfile />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
