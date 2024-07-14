import React from 'react';
import './home.css';
import VideoBar from '../video/VideoBar';

const Home = () => {
    const videos1 = [
        { title: 'Video 1', thumbnail: 'https://via.placeholder.com/200x300' },
        { title: 'Video 2', thumbnail: 'https://via.placeholder.com/200x300' },
        { title: 'Video 3', thumbnail: 'https://via.placeholder.com/200x300' },
        { title: 'Video 4', thumbnail: 'https://via.placeholder.com/200x300' },
        { title: 'Video 5', thumbnail: 'https://via.placeholder.com/200x300' },
        { title: 'Video 6', thumbnail: 'https://via.placeholder.com/200x300' },
    ];

    const videos2 = [
      { title: 'Video 1', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 2', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 3', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 4', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 5', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 6', thumbnail: 'https://via.placeholder.com/200x300' },
    ];

    const videos3 = [
      { title: 'Video 1', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 2', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 3', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 4', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 5', thumbnail: 'https://via.placeholder.com/200x300' },
      { title: 'Video 6', thumbnail: 'https://via.placeholder.com/200x300' },
    ];

    return (
        <div className='main'>
            <VideoBar videos={videos1} title="Computer Science 101" />
            <VideoBar videos={videos2} title="Computer Science 110" />
            <VideoBar videos={videos3} title="Computer Science 120" />
            <VideoBar videos={videos3} title="LinkedIn Optimization I" />
        </div>
    );
}

export default Home;
