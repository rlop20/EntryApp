import React from 'react';
import './topicCSS.css';
import useAuth from '../useAuth'; // Import the custom hook
import { db } from '../firebase'; // Import your Firestore instance
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'; // Import Firestore functions
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Topic2 = () => {
  const { currentUser } = useAuth(); // Destructure currentUser from the useAuth hook
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleFinish = async () => {
    if (currentUser) {
      try {
        const userDocRef = doc(db, 'users', currentUser.uid);
        await updateDoc(userDocRef, {
          unlockedCourses: arrayUnion('cs1.3'),
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
      <h1>What is Programming?</h1>
      <p> 
        Programming is making your computer do something by creating a program.
        We program by using a programming language, using a text editor to write code
        called IDEs, and save/run the code. Programming and code go hand and hand, we program
        by writing code.
      </p>

      <button className="finish-button" onClick={handleFinish}>
        {currentUser ? 'Finish' : 'Log in to finish'}
      </button>
      
    </div>
  );
}

export default Topic2;
