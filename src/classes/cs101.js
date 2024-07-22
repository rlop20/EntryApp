import React, { useState, useEffect } from 'react';
import VideoBar from '../video/VideoBar';
import { getFirestore, doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import useAuth from '../useAuth'; // Import the custom hook

const Csc101Class1 = () => {
  const [topics, setTopics] = useState([
    { locked: false, title: 'What is Computer Science?', class: 'cs1.1', thumbnail: '/topic1-1.jpg', link: '/topic1' },
    { locked: true, title: 'What is programming?', class: 'cs1.2', thumbnail: '/topic1-2.jpg', link: '/topic2' },
    { locked: true, title: 'Programming languages', class: 'cs1.3', thumbnail: '/topic1-3.png', link: '/topic3' },
    { locked: true, title: 'IDEs', class: 'cs1.4', thumbnail: '/topic1-4.png', link: '/topic4' },
    { locked: true, title: 'Programming Basics', class: 'cs1.5', thumbnail: '/topic1-6.png', link: '/topic6' },
  ]);

  const { currentUser } = useAuth();
  const db = getFirestore();

  useEffect(() => {
    const fetchUnlockedCourses = async () => {
      if (currentUser) {
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const unlockedCourses = docSnap.data().unlockedCourses || [];
          setTopics(prevTopics => prevTopics.map(topic => ({
            ...topic,
            locked: !unlockedCourses.includes(topic.class) && topic.class !== 'csc1.1',
          })));
        }
      }
    };
    fetchUnlockedCourses();
  }, [currentUser, db]);

  const handleFinishClick = async () => {
    if (currentUser) {
      const docRef = doc(db, 'users', currentUser.uid);
      await updateDoc(docRef, {
        unlockedCourses: arrayUnion('cs1.1', 'cs1.2', 'cs1.3', 'cs1.4', 'cs1.5'),
      });
      setTopics(prevTopics => prevTopics.map(topic => ({
        ...topic,
        locked: false,
      })));
    }
  };

  return (
    <div className='main'>
      <h1>Course: Computer Science 101</h1>
      <p>Complete the course to unlock Computer Science 110</p>
      <VideoBar videos={topics} title="Topics" />
    </div>
  );
}

export default Csc101Class1;
