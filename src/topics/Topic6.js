import React from 'react';
import './topicCSS.css';
import useAuth from '../useAuth'; // Import the custom hook
import { db } from '../firebase'; // Import your Firestore instance
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'; // Import Firestore functions
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Topic6 = () => {
  const { currentUser } = useAuth(); // Use the custom hook to get the current user
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleFinish = async () => {
    if (currentUser) {
      try {
        const userDocRef = doc(db, 'users', currentUser.uid);
        await updateDoc(userDocRef, {
          unlockedCourses: arrayUnion('cs2.1', 'cs110'),
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
      <h1>What is Computer Science?</h1>
      <h1>Programming Basics</h1>
      <p> 
        To be an expert at programming, one must master these basics.
      </p>

      <p>
        <ul>
          <li>print statments</li>
          <li>input/output</li>
          <li>using variables</li>
          <li>types</li>
          <li>functions</li>
          <li>imports</li>
          <li>and much more...</li>
        </ul>
      </p>

      <p>

        Dont worry, we will go through all of them and more in Computer Science 110! 
      </p>

      <button className="finish-button" onClick={handleFinish}>
        {currentUser ? 'Finish' : 'Log in to finish'}
      </button>
    </div>
  );
};

export default Topic6;
