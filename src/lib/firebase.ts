import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config (this is SAFE to keep in frontend)
const firebaseConfig = {
  apiKey: "AIzaSyCr0H1W6WDbc05ZFCU4FwZhGJgOkPuIuKs",
  authDomain: "login-ce091.firebaseapp.com",
  projectId: "login-ce091",
  storageBucket: "login-ce091.appspot.com",
  messagingSenderId: "1067526370679",
  appId: "1:1067526370679:web:210ed0584eac0586981d72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ EXPORT AUTH (THIS IS WHAT LOGIN NEEDS)
export const auth = getAuth(app);
