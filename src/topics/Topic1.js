import React from 'react';
import './topicCSS.css';
import useAuth from '../useAuth'; // Import the custom hook
import { db } from '../firebase'; // Import your Firestore instance
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'; // Import Firestore functions
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Topic1 = () => {
  const currentUser = useAuth(); // Use the custom hook to get the current user
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleFinish = async () => {
    if (currentUser) {
      const userDocRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userDocRef, {
        unlockedCourses: arrayUnion('Computer Science 110')
      });
      alert('Class Completed!');
    } else {
      navigate('/signin'); // Redirect to signup page if not logged in
    }
  };

  return (
    <div className='main'>
      <h1>What is Computer Science?</h1>
      <p> 
        Computer Science is the study of computation, information, automation,
        programming, hardware, and so much more! This guide will be informal, that
        way it is not just another article, but more like your own tutor/mentor.
        When we think Computer Science, we think the degree. This is an accurate
        representation but it is worth noting that it is more than a degree or one 
        area of expertise. Computer Science is a door opener, you will learn how a 
        computer computes on the lowest level (machine code), all the way to learning
        how to program your own AI, using high level code (APIs, Python.)
      </p>
      <button className="finish-button" onClick={handleFinish}>
        {currentUser ? 'Finish' : 'Log in to finish'}
      </button>
    </div>
  );
};

export default Topic1;
