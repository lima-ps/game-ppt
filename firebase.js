import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkTMbRGChvyq96eqYSLoWS8qWmA8hWVWk",
  authDomain: "game-ppt-ab38d.firebaseapp.com",
  projectId: "game-ppt-ab38d",
  storageBucket: "game-ppt-ab38d.appspot.com",
  messagingSenderId: "920396854202",
  appId: "1:920396854202:web:36578bdc8378c8fe84e383"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)