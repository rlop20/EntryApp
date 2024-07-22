import React from 'react';
import './topicCSS.css';
import useAuth from '../useAuth'; // Import the custom hook
import { db } from '../firebase'; // Import your Firestore instance
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'; // Import Firestore functions
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Topic4 = () => {
  const { currentUser } = useAuth(); // Use the custom hook to get the current user
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleFinish = async () => {
    if (currentUser) {
      try {
        const userDocRef = doc(db, 'users', currentUser.uid);
        await updateDoc(userDocRef, {
          unlockedCourses: arrayUnion('cs1.5'),
        });
        alert('Class Completed!');
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    } else {
      navigate('/signin'); // Redirect to signup page if not logged in
    }
  };

  return (
    <div className='main'>
      <h1>IDEs</h1>
      <p> 

      IDEs (Integrated Development Environments) are powerful editors to write 
        code. We use these because you can more efficiently write your code. The IDE
        will let you know if you made typos or errors in your syntax. It does this
        by underlining or highlighting your mistakes. Most modern IDEs do this (VS CODE for example),
        but choosing one is up to you and the task at hand.

      </p>
      <button className="finish-button" onClick={handleFinish}>
        {currentUser ? 'Finish' : 'Log in to finish'}
      </button>
    </div>
  );
};

export default Topic4;
