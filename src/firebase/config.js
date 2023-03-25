// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvpNOVLCi9FpHQWSCfx4QAYHKnMxXV2u4",
  authDomain: "react-route-protection.firebaseapp.com",
  projectId: "react-route-protection",
  storageBucket: "react-route-protection.appspot.com",
  messagingSenderId: "868663885845",
  appId: "1:868663885845:web:4eb72844f39a21051a0e1c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();

export { projectAuth };
