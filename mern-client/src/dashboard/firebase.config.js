import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "Enter your api key",
  authDomain: "Enter your authDomain",
  projectId: "Enter your project id",
  storageBucket: "Enter your storageBucket",
  messagingSenderId: "Enter your messagingSenderId",
  appId: "Enter your appId"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;