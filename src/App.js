import logo from './logo.svg';
import './App.css';
import Home from './home/home'
import NavBar from './navbars/NavBar'
import VideoPlayer from './video/VideoPlayer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home /> 
      <VideoPlayer />
    </div>
  );
}

export default App;
