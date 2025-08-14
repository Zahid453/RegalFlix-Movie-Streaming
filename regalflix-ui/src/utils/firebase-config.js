import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCY_afjw7Cpqofm-fn-cq14Y6xKh0jgvDA",
    authDomain: "regalflix-59831.firebaseapp.com",
    projectId: "regalflix-59831",
    storageBucket: "regalflix-59831.appspot.com",
    messagingSenderId: "225195393118",
    appId: "1:225195393118:web:e7d17de91193d395d3b4cf",
    measurementId: "G-Z61E3QVPZW"
  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);