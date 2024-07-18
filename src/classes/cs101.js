import React from 'react';
import VideoBar from '../video/VideoBar';

const csc101class1 = () => {

  const topics = [
    { title: 'What is Computer Science?', thumbnail: '/topic1-1.jpg', link: '/topic1' },
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
