import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD0MrIcpCehoOUyON0PgRqT7jv8kvHKUjA",
    authDomain: "worlds-shopping.firebaseapp.com",
    databaseURL: "https://worlds-shopping-default-rtdb.firebaseio.com",
    projectId: "worlds-shopping",
    storageBucket: "worlds-shopping.firebasestorage.app",
    messagingSenderId: "499576282570",
    appId: "1:499576282570:web:c1c4ca3309f13413784333",
    measurementId: "G-EZ8ZEDN2ZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

export default db;
