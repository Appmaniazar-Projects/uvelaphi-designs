// App.js
import React from 'react';
// import PosterEditor from './MyEditor';
// import TaskListPro from './components/TaskListPro';
import MyEditor from './components/MyEditor';
import NavBar from './components/NavBar/NavBar';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Header from './components/Header/Header';
import Templates from './components/Templates/Templates';
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Header /> */}
      <Templates />
      {/* <MyEditor /> */}
    </div>
  );
}

export default App;

