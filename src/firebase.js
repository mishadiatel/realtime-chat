import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDzE2O4oWTFA0A1U83udXHCA_-c0GM6sAs",
    authDomain: "realtime-chat-40919.firebaseapp.com",
    projectId: "realtime-chat-40919",
    storageBucket: "realtime-chat-40919.appspot.com",
    messagingSenderId: "886715176045",
    appId: "1:886715176045:web:dd5af13e1f264450a5db64",
    measurementId: "G-W7QMG8B5K6"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();