import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa'; // Import a lock icon from react-icons
import './courses.css'; // Import the new courses.css file
import useAuth from '../useAuth'; // Import the custom hook
import { db } from '../firebase'; // Import your Firestore instance
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions

const Cs = () => {
  const { currentUser, loading } = useAuth(); // Use the custom hook to get the current user
  const [unlockedCourses, setUnlockedCourses] = useState([]);

  useEffect(() => {
    const fetchUnlockedCourses = async () => {
      if (currentUser) {
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const data = userDoc.data().unlockedCourses || [];
            console.log("Fetched unlocked courses:", data); // Debugging log
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

  // Temporarily set locked to false for testing
  const classes = [
    { name: 'Computer Science 101', link: '/cs101', locked: false },
    { name: 'Computer Science 110', link: '/wip', locked: !unlockedCourses.includes('cs110') }, // Check if 'cs110' is in unlockedCourses
  ];

  console.log("Current user:", currentUser); // Debugging log
  console.log("Unlocked courses state:", unlockedCourses); // Debugging log
  console.log("Class states:", classes); // Debugging log

  return (
    <div className='main'>
      <h1>Computer Science Courses</h1>
      <p>Unlock courses by meeting pre-requisites and creating an account.</p>
      <ul className='course-list'>
        {classes.map((course, index) => (
          <li className='course-item' key={index}>
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

export default Cs;
