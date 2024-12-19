import React from 'react';
import { Link } from 'react-router-dom';
import './list.css';

const List = () => {
  const courses = [
    { name: 'Computer Science', link: '/course1' },
    { name: 'Computer Science 110', link: '/course2' },

  ];

  return (
    <div className="main">
      <h1 className='course-list '>Available Courses</h1>
      <ul className='course-list'>
        {courses.map((course, index) => (
          <li className='course-list'key={index}>
            <Link className='course-link' to={course.link}>{course.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
