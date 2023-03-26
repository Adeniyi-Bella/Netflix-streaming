// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCi1ldhYMsqFWNGoeuBOUlhhjzi42NDG6E",
    authDomain: "netflix-clone-yt-fa1f1.firebaseapp.com",
    projectId: "netflix-clone-yt-fa1f1",
    storageBucket: "netflix-clone-yt-fa1f1.appspot.com",
    messagingSenderId: "316365839468",
    appId: "1:316365839468:web:619edc2b4829b24e934c49"
  };

// Initialize Firebase
// Initialize Firebase
// This is to prevent the app from initializing multiple times
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }