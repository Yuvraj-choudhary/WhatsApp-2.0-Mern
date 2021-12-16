// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqNuenqelzez9icR3YqdewbaXckQTWSx4",
  authDomain: "whatsapp-mern-2-0.firebaseapp.com",
  projectId: "whatsapp-mern-2-0",
  storageBucket: "whatsapp-mern-2-0.appspot.com",
  messagingSenderId: "309004770594",
  appId: "1:309004770594:web:00bf207a48f51a4297197b",
  measurementId: "G-J1DQQDWPFL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
