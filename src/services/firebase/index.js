// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //Esto conecta con el servicio de firebase
import { getFirestore } from 'firebase/firestore' //Esto me conecta a mi base de datos
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app) // Conecta la base de datos a nuestro servicio de firebase