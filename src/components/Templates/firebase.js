// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'; // If you're using Firestore


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMDMueFyKy8CZEnUT-UgFpWJ_wJYVRySo",
  authDomain: "uvelaphi-designs.firebaseapp.com",
  projectId: "uvelaphi-designs",
  storageBucket: "uvelaphi-designs.appspot.com",
  messagingSenderId: "407368206430",
  appId: "1:407368206430:web:6df77e45b3881f5b620ccf",
  measurementId: "G-38MR0Q3L8W"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;