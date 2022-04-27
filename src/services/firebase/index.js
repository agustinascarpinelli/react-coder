
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA1qIat76QmMLA9g6BBIGhE9WLAUF9QWQ4",
  authDomain: "ecommerce-react-dadfc.firebaseapp.com",
  projectId: "ecommerce-react-dadfc",
  storageBucket: "ecommerce-react-dadfc.appspot.com",
  messagingSenderId: "733618496655",
  appId: "1:733618496655:web:39462b8ecf76df2303bcfa"
};

const app = initializeApp(firebaseConfig);
export const firestoreDB=getFirestore(app)