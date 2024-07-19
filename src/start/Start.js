import React from 'react';
import { Link } from 'react-router-dom';
import './start.css';

const courses = [
  { id: 1, title: 'Computer Science 101', icon: '💻', link: '/cs101' },
];

const Start = () => {
  return (
    <div className="start">
      <h1>Courses Available:</h1>
      <div className="course-list">
        {courses.map(course => (
          <Link to={course.link} key={course.id} className="course-item-link">
            <div className="course-item">
              <div className="course-icon">{course.icon}</div>
              <div className="course-title">{course.title}</div>
              <div className="course-arrow">➔</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Start;
