import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home/home'
import NavBar from './navbars/NavBar'
import VideoPlayer from './video/VideoPlayer';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home  title={"one"} />} />

          </Routes>
      </div>
    </Router>
  );
}

export default App;
