// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzytMdTjhrOQ87aYTxovT9NHm__j2Yueg",
    authDomain: "ayd-e-commerce-8dd6a.firebaseapp.com",
    projectId: "ayd-e-commerce-8dd6a",
    storageBucket: "ayd-e-commerce-8dd6a.firebasestorage.app",
    messagingSenderId: "703315223711",
    appId: "1:703315223711:web:a2e149119ed0262dba6eaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);