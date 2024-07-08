import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB2O0og4X1_Qs1sjW86irHx9Dj3fldUBbs",
    authDomain: "exploration-9ea73.firebaseapp.com",
    projectId: "exploration-9ea73",
    storageBucket: "exploration-9ea73.appspot.com",
    messagingSenderId: "570057711080",
    appId: "1:570057711080:web:cb5ee843c37d703aa1985d",
    measurementId: "G-FDT29N5HQ1"
  };
console.log(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);