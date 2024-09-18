// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYRaPL9BOh-RV0_K61C-rsF7zld9blEMQ",
  authDomain: "reactauth-2c0c5.firebaseapp.com",
  projectId: "reactauth-2c0c5",
  storageBucket: "reactauth-2c0c5.appspot.com",
  messagingSenderId: "570891633098",
  appId: "1:570891633098:web:0ebc4dff287f4de14f4f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export  {app, auth};