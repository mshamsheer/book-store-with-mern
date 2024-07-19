import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAimlYOZhbMRagfZnqfe7-QLb9ZtMl1me0",
  authDomain: "mern-book-255c0.firebaseapp.com",
  projectId: "mern-book-255c0",
  storageBucket: "mern-book-255c0.appspot.com",
  messagingSenderId: "21156175028",
  appId: "1:21156175028:web:1177cc8d5235d189b84be1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;