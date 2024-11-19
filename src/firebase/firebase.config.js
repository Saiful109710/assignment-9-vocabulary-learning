// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLxbDl6oQ0kjJYjpPq8jVVZbtP4iNwbSA",
  authDomain: "vocabulary-learning-584ae.firebaseapp.com",
  projectId: "vocabulary-learning-584ae",
  storageBucket: "vocabulary-learning-584ae.firebasestorage.app",
  messagingSenderId: "446003561808",
  appId: "1:446003561808:web:013dacf4034eaecef7d855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth

