// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //Esto conecta con el servicio de firebase
import { getFirestore } from 'firebase/firestore' //Esto me conecta a mi base de datos
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqZRYXz3_PzB7LMiTGHicbFBPCPSntn28",
  authDomain: "eccomerce-f4ec0.firebaseapp.com",
  projectId: "eccomerce-f4ec0",
  storageBucket: "eccomerce-f4ec0.appspot.com",
  messagingSenderId: "715978003784",
  appId: "1:715978003784:web:317a5781819876513d4f7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app) // Conecta la base de datos a nuestro servicio de firebase