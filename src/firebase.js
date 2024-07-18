// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDUDVRkjk3oLyOJjy1uYq_P-eOoaEw27cM",
    authDomain: "entry-b67eb.firebaseapp.com",
    databaseURL: "https://entry-b67eb-default-rtdb.firebaseio.com",
    projectId: "entry-b67eb",
    storageBucket: "entry-b67eb.appspot.com",
    messagingSenderId: "1077601925555",
    appId: "1:1077601925555:web:f6daf29a2eade8d883f3c6",
    measurementId: "G-5W7RFF4PF4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
