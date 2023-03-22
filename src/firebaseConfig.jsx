// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm8iHQzWC3u7z91pyPnee8Zg09rtHvEwI",
  authDomain: "frank-it.firebaseapp.com",
  projectId: "frank-it",
  storageBucket: "frank-it.appspot.com",
  messagingSenderId: "205427409674",
  appId: "1:205427409674:web:5328cba32dd4e68643b0f3",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
