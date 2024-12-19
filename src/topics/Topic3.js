import React from 'react';
import './topicCSS.css';
import useAuth from '../useAuth'; // Import the custom hook
import { db } from '../firebase'; // Import your Firestore instance
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'; // Import Firestore functions
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Topic3 = () => {
  const { currentUser } = useAuth(); // Use the custom hook to get the current user
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleFinish = async () => {
    if (currentUser) {
      try {
        const userDocRef = doc(db, 'users', currentUser.uid);
        await updateDoc(userDocRef, {
          unlockedCourses: arrayUnion('cs1.4'),
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
      <h1>What are programming languages?</h1>
      <p> 
      Programming Languages are languages that we can write our code with.
        Just like real languages, we must follow rules and grammar, which are defined. 
        For programming languages, these rules are referred to as the Syntax.
        As a beginner, choosing a language to program with can be overwhelming 
        because their exists a vast array to choose from. However, all programming
        languages can achieve the same thing. Choosing one comes down to the task at 
        hand or your personal preference. A main difference however comes down to
        'high level' and 'low level' languages. 
      </p>
      <button className="finish-button" onClick={handleFinish}>
        {currentUser ? 'Finish' : 'Log in to finish'}
      </button>
    </div>
  );
};

export default Topic3;
