// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_He1bJT7IYp0-mAC3XqFOyiQY7-39Ysk",
  authDomain: "mailbox-a2e2c.firebaseapp.com",
  projectId: "mailbox-a2e2c",
  storageBucket: "mailbox-a2e2c.appspot.com",
  messagingSenderId: "884992662154",
  appId: "1:884992662154:web:f80731cfe2914d9af8eb73",
  measurementId: "G-9X71ME46GL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
