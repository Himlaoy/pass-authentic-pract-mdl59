// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFKxQgyBY2yVZg5w6fTkiChK3QZu-GQpk",
  authDomain: "pass-authen-prac.firebaseapp.com",
  projectId: "pass-authen-prac",
  storageBucket: "pass-authen-prac.appspot.com",
  messagingSenderId: "667411866499",
  appId: "1:667411866499:web:c3ea243145d535fd81ccb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;