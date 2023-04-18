// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyB8v1ts1AdhSuyCxIQLzO6-FyH-c1aIRvg",
  authDomain: "fir-guide-a675d.firebaseapp.com",
  projectId: "fir-guide-a675d",
  storageBucket: "fir-guide-a675d.appspot.com",
  messagingSenderId: "617357054190",
  appId: "1:617357054190:web:a375eb68732c3d6b9b63ff",
  measurementId: "G-J8VPPPZ878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);