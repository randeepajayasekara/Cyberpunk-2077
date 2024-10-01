import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB2oXE86krVJtk_n68qsxBeHMT-3q2IcxQ",
  authDomain: "cyberpunk-2077-c73f2.firebaseapp.com",
  projectId: "cyberpunk-2077-c73f2",
  storageBucket: "cyberpunk-2077-c73f2.appspot.com",
  messagingSenderId: "378498304140",
  appId: "1:378498304140:web:997af517669001f1b6d3a9",
  measurementId: "G-4W8MT29VDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);