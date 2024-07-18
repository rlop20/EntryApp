import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { collection, query, where, getDocs, setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import '../login/Login.css'; // Assuming this contains general styles for forms

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Check if username exists
      const usernameQuery = query(collection(db, 'users'), where('username', '==', username));
      const querySnapshot = await getDocs(usernameQuery);
      if (!querySnapshot.empty) {
        setError('Username already taken. Please choose another one.');
        return;
      }

      // Proceed with signup
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user profile to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        username: username,
        email: email
      });

      // Redirect to home page
      navigate('/'); // Change to the path of your home page

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="login-form" onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
