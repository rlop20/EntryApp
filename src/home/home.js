import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import VideoBar from '../video/VideoBar';

const Home = () => {

  const cscourses = [
    { title: 'Computer Science', thumbnail: '/topic1-1.jpg', link: '/cs' },
  ];

  const linkedinCourses = [
    { title: 'Intro to LinkedIn', thumbnail: '/topic1-1.jpg', link: '/wip' },
  ];


  return (
    <div className='main'>
      <div className='content'>
      <h1> Welcome to Entry</h1>
      <h1> A hub for entry-level tech skills.</h1>
      <h1> Take courses, level-up, all for free.</h1>
      <h1> Now get in there!</h1>
      </div>
      <p> 
        <b> To access Entry, create an account to keep track of your
        progress and unlock courses. </b> 
      </p>
      <Link to="/signin">
      <button className="sign-up-button">Sign up for free</button>
      </Link>
    </div>
  );
}

export default Home;
