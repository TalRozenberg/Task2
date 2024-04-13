// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs8T5jUuOhlv2X734VjDniS3n-bNcYQ0U",
  authDomain: "task-2-f4bc3.firebaseapp.com",
  projectId: "task-2-f4bc3",
  storageBucket: "task-2-f4bc3.appspot.com",
  messagingSenderId: "209943179021",
  appId: "1:209943179021:web:d8f6848a969e52bde54a44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let db = getFirestore(app); 