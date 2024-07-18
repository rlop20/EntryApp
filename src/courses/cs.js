import React from 'react';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa'; // Import a lock icon from react-icons
import './courses.css'; // Import the new courses.css file

const cs = () => {
  const classes = [
    { name: 'Computer Science 101', link: '/cs101' },
    { name: 'Computer Science 110', link: '/course2', locked: true },
  ];

  return (
    <div className='main'>
      <h1>Computer Science Courses</h1>

      <p> Unlock courses by meeting pre-requisites and creating an account.</p>
      <ul className='course-list'>
        {classes.map((course, index) => (
          <li className='course-list' key={index}>
            {course.locked ? (
              <span className='course-link-disabled' title="Requirements not met">
                {course.name} <FaLock />
              </span>
            ) : (
              <Link className='course-link' to={course.link}>
                {course.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default cs;
