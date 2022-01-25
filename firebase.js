import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBeHx_Sddx5xa4twK1dgIdwoisAJD_jaTE",
  authDomain: "pessoal-administradora-aa9a4.firebaseapp.com",
  projectId: "pessoal-administradora-aa9a4",
  storageBucket: "pessoal-administradora-aa9a4.appspot.com",
  messagingSenderId: "506803529635",
  appId: "1:506803529635:web:a04721ee71acc8505edc16",
  measurementId: "G-JPYDZJZ7LH",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const analytics = getAnalytics(app);

export { app, db };
