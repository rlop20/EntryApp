import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './start.css';
import useAuth from '../useAuth';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { FaLock } from 'react-icons/fa';

const Start = () => {
  const { currentUser, loading } = useAuth();
  const [unlockedCourses, setUnlockedCourses] = useState([]);

  useEffect(() => {
    const fetchUnlockedCourses = async () => {
      if (currentUser) {
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const data = userDoc.data().unlockedCourses || [];
            console.log("Fetched unlocked courses:", data);
            setUnlockedCourses(data);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching document:", error);
        }
      }
    };
    fetchUnlockedCourses();
  }, [currentUser]);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching user data
  }

  const courses = [
    { id: 1, title: 'Computer Science 101', icon: '💻', link: '/cs101', locked: false },
    { id: 2, title: 'Computer Science 110', icon: '🔒', link: '/wip', locked: !unlockedCourses.includes('cs110') },
  ];

  const linkedIn = [
    { id: 1, title: 'LinkedIn', icon: '💻', link: '/wip', locked: false },
    { id: 2, title: 'Resume Optimizaition', icon: '🔒', link: '/wip', locked: !unlockedCourses.includes('linkedIn') },
  ];

  const handleCourseClick = (course) => {
    if (course.locked) {
      alert('Pre-requisites not met!');
    }
  };

  return (
    <div className="start">
      <h1>Courses Available:</h1>

      <h2>Computer Science</h2>
      <div className="course-list">
        {courses.map(course => (
          course.locked ? (
            <div key={course.id} className="course-item" onClick={() => handleCourseClick(course)}>
              <div className="course-icon">{course.icon}</div>
              <div className="course-title">{course.title}</div>
              <div className="course-arrow">
                <FaLock />
              </div>
            </div>
          ) : (
            <Link to={course.link} key={course.id} className="course-item-link">
              <div className="course-item">
                <div className="course-icon">{course.icon}</div>
                <div className="course-title">{course.title}</div>
                <div className="course-arrow">➔</div>
              </div>
            </Link>
          )
        ))}
      </div>

      <h2>Professionalism: LinkedIn & Resume Optimization</h2>
      <div className="course-list">
        {linkedIn.map(course => (
          course.locked ? (
            <div key={course.id} className="course-item" onClick={() => handleCourseClick(course)}>
              <div className="course-icon">{course.icon}</div>
              <div className="course-title">{course.title}</div>
              <div className="course-arrow">
                <FaLock />
              </div>
            </div>
          ) : (
            <Link to={course.link} key={course.id} className="course-item-link">
              <div className="course-item">
                <div className="course-icon">{course.icon}</div>
                <div className="course-title">{course.title}</div>
                <div className="course-arrow">➔</div>
              </div>
            </Link>
          )
        ))}
      </div>
    </div>
  );
}

export default Start;
