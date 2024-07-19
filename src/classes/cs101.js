import React from 'react';
import VideoBar from '../video/VideoBar';

const csc101class1 = () => {

  const topics = [
    { title: 'What is Computer Science?', thumbnail: '/topic1-1.jpg', link: '/topic1' },
    { title: 'What is programming?', thumbnail: '/topic1-2.jpg', link: '/topic2' },
    { title: 'Programming languages', thumbnail: '/topic1-3.png', link: '/topic3' },
    { title: 'IDEs', thumbnail: '/topic1-4.png', link: '/topic4' },
    { title: 'Programming Basics', thumbnail: '/topic1-6.png', link: '/topic6' },
  ];

  return (
    <div className='main'>
      <h1>Course: Computer Science 101</h1>
      <p> Complete the course to unlock Computer Science 110</p>
      <VideoBar videos={topics} title="Topics" />
    </div>
  );
}

export default csc101class1;
