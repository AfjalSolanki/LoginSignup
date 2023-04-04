// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBgoYigC0-lYxIV5X0h0mbPlhJ_RszywAU',
  authDomain: 'loginsignup-a40f6.firebaseapp.com',
  projectId: 'loginsignup-a40f6',
  storageBucket: 'loginsignup-a40f6.appspot.com',
  messagingSenderId: '265241961439',
  appId: '1:265241961439:web:e66e3192536f662f4e9a6a',
  measurementId: 'G-70JQNWPMC6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
