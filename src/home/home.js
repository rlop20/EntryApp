import React from 'react';
import './home.css';
import VideoBar from '../video/VideoBar';

const Home = () => {

  const cscourses = [
    { title: 'Computer Science', thumbnail: '/topic1-1.jpg', link: '/cs' },
    
  ];

  const linkedinCourses = [
    { title: 'Intro to LinkedIn', thumbnail: '/topic1-1.jpg', link: '/wip' },
  ];

  const videos1 = [
    { title: 'What is Computer Science?', thumbnail: '/topic1-1.jpg', link: '/topic1' },
    { title: 'What is Programming?', thumbnail: '/topic1-2.jpg', link: '/topic2' },
    { title: 'What are Programming Languages?', thumbnail: '/topic1-3.png', link: '/topic3' },
    { title: 'IDEs', thumbnail: '/topic1-4.png', link: '/topic4' },
    { title: 'Hello World!', thumbnail: '/topic1-5.png', link: '/topic5' },
    { title: 'Programming Basics', thumbnail: '/topic1-6.png', link: '/topic6' },
  ];

  const videos2 = [
    { title: 'Printing and Input', thumbnail: '/topic2-1.jpg', link: '/wip' },
    { title: 'Variables', thumbnail: '/topic2-2.png', link: '/wip' },
    { title: 'Strings', thumbnail: '/topic2-3.jpg', link: '/wip' },
    { title: 'Math', thumbnail: '/topic2-4.png', link: '/wip' },
    { title: 'Booleans', thumbnail: '/topic2-5.png', link: '/wip' },
    { title: 'Guided Project 1', thumbnail: '/topic2-6.png', link: '/wip' },
  ];

  const videos3 = [
    { title: 'Functions', thumbnail: '/topic3-1.png', link: '/topic13' },
    { title: 'The Main Function', thumbnail: '/topic3-2.png', link: '/topic14' },
    { title: 'Parameters', thumbnail: '/topic3-3.png', link: '/topic15' },
    { title: 'Return Statement', thumbnail: '/topic3-4.png', link: '/topic16' },
    { title: 'Guided Project 1', thumbnail: '/topic3-5.png', link: '/topic17' },
  ];

  return (
    <div className='main'>
      <h1></h1>
      <h1></h1>
      <h1> Welcome to Entry. </h1>
      <h1> Learn Entry Level Skills for the Tech Industry. </h1>
      <h1> Unlock Computer Science Skills, LinkedIn & Resume Skills, IT/Networking Skills, & many more. </h1>

      <VideoBar videos={cscourses} title="Courses" />
    </div>
  );
}

export default Home;
