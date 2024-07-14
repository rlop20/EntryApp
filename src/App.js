import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import NavBar from './navbars/NavBar';
import Topic1 from './topics/Topic1';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic1" element={<Topic1 />} />
      </Routes>
    </Router>
  );
}

export default App;
