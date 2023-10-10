import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrOnhzwznjt0LQgOdU8gDHasfjaTXhU8M",
  authDomain: "fir-app-30992.firebaseapp.com",
  projectId: "fir-app-30992",
  storageBucket: "fir-app-30992.appspot.com",
  messagingSenderId: "970435606070",
  appId: "1:970435606070:web:4f3a3a2a61917ad8164a97",
  measurementId: "G-K0ZQH4JLQN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);