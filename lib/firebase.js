// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzce9H2y0LvVKL-58SNNRfM-q_rjM72T4",
  authDomain: "as-saadah-cc843.firebaseapp.com",
  projectId: "as-saadah-cc843",
  storageBucket: "as-saadah-cc843.firebasestorage.app",
  messagingSenderId: "188262397195",
  appId: "1:188262397195:web:a3d6495394e84a13a71e0e",
  measurementId: "G-F5JPCZPGZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { db, collection, addDoc, storage, ref, uploadString, getDownloadURL };