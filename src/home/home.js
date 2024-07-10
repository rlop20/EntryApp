import react from 'react';
import './home.css'
import VideoBar from '../video/VideoBar'

const Home = () => {
    const videos = [
      { title: 'Video 1', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 2', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 3', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 4', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 5', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 6', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 7', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 8', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 9', thumbnail: 'https://via.placeholder.com/200x300' },    
      { title: 'Video 10', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 11', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 12', thumbnail: 'https://via.placeholder.com/200x300' },    
    ];

  return(
    <div className='main'>
        
        <VideoBar videos={videos}/>
    </div>
  );
}

export default Home;