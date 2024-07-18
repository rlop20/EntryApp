import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db, auth } from '../firebase';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { updateEmail, updatePassword, deleteUser } from 'firebase/auth';
import './UserProfile.css';

const UserProfile = () => {
  const { uid } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newDisplayName, setNewDisplayName] = useState('');
  const [unlockedCourses, setUnlockedCourses] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userDocRef = doc(db, 'users', uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser(userData);
          setUnlockedCourses(userData.unlockedCourses || []);
        } else {
          setError('No such document!');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    if (uid) {
      fetchUserProfile();
    }
  }, [uid]);

  const handleUpdateEmail = async () => {
    if (auth.currentUser) {
      try {
        await updateEmail(auth.currentUser, newEmail);
        await updateDoc(doc(db, 'users', uid), { email: newEmail });
        setUser({ ...user, email: newEmail });
        setNewEmail('');
        alert('Email updated successfully');
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleUpdatePassword = async () => {
    if (auth.currentUser) {
      try {
        await updatePassword(auth.currentUser, newPassword);
        setNewPassword('');
        alert('Password updated successfully');
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleUpdateDisplayName = async () => {
    if (auth.currentUser) {
      try {
        await updateDoc(doc(db, 'users', uid), { displayName: newDisplayName });
        setUser({ ...user, displayName: newDisplayName });
        setNewDisplayName('');
        alert('Username updated successfully');
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleDeleteAccount = async () => {
    if (auth.currentUser) {
      try {
        // Delete user document from Firestore
        await deleteDoc(doc(db, 'users', uid));
        // Delete user from Firebase Authentication
        await deleteUser(auth.currentUser);
        alert('Account deleted successfully');
        navigate('/signup');
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="user-profile">

<section className='unlocked-courses'>
            <h1></h1>
            <h1>Unlocked Courses</h1>
            {unlockedCourses.length > 0 ? (
              <ul>
                {unlockedCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            ) : (
              <p>No courses unlocked yet.</p>
            )}
          </section>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user ? (

        
        <div className="profile-details">
          <h1>Manage Your Account</h1>
          

          <p>{user.displayName}</p>
          <p>{user.email}</p>

          <div className="update-section">
            <h3>Update Email</h3>
            <input
              type="email"
              placeholder="New Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <button onClick={handleUpdateEmail}>Update Email</button>
          </div>

          <div className="update-section">
            <h3>Update Password</h3>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleUpdatePassword}>Update Password</button>
          </div>

          <div className="update-section">
            <h3>Update Username</h3>
            <input
              type="text"
              placeholder="New Username"
              value={newDisplayName}
              onChange={(e) => setNewDisplayName(e.target.value)}
            />
            <button onClick={handleUpdateDisplayName}>Update Username</button>
          </div>

          <div className="delete-section">
            <h3>Delete Account</h3>
            <button onClick={handleDeleteAccount}>Delete Account</button>
          </div>
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
