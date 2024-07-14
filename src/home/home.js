import React from 'react';
import './home.css';
import VideoBar from '../video/VideoBar';

const Home = () => {
  const videos1 = [
    { title: 'What is Computer Science?', thumbnail: '/topic1-1.png' },
    { title: 'What is Programming?', thumbnail: '/topic1-2.png' },
    { title: 'What are Programming Languages?', thumbnail: '/topic1-3.png'  },
    { title: 'IDEs', thumbnail: '/topic1-4.png' },
    { title: 'Hello World!', thumbnail: '/topic1-5.png'  },
    { title: 'Programming Basics', thumbnail: '/topic1-6.png'  },
  ];

  const videos2 = [
    { title: 'Printing and Input', thumbnail: '/topic2-1.png' },
    { title: 'Variables', thumbnail: '/topic2-2.png' },
    { title: 'Strings', thumbnail: '/topic2-3.png' },
    { title: 'Math', thumbnail: '/topic2-4.png' },
    { title: 'Booleans', thumbnail: '/topic2-5.png' },
    { title: 'Guided Project 1', thumbnail: '/topic2-6.png' },
    { title: 'Program Flow', thumbnail: '/topic2-7.png' },
    { title: 'If-Statements', thumbnail: '/topic2-8.png' },
    { title: 'Loops', thumbnail: '/topic2-9.png' },
    { title: 'And / Or', thumbnail: '/topic2-10.png' },
    { title: 'If / Else', thumbnail: '/topic2-11.png' },
    { title: 'Nesting', thumbnail: '/topic2-12.png' },
    { title: 'Guided Project 2', thumbnail: '/topic2-13.png' },
  ];

  const videos3 = [
    { title: 'Functions', thumbnail: '/topic3-1.png' },
    { title: 'The Main Function', thumbnail: '/topic3-2.png' },
    { title: 'Parameters', thumbnail: '/topic3-3.png' },
    { title: 'Return Statement', thumbnail: '/topic3-4.png' },
    { title: 'Guided Project 1', thumbnail: '/topic3-5.png' },
  ];

  return (
    <div className='main'>
      <VideoBar videos={videos1} title="Computer Science 101" />
      <VideoBar videos={videos2} title="Computer Science 110" />
    </div>
  );
}

export default Home;
