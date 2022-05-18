
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAWAzmkM-3mRzBTqeECl8RWMS9NCmMReg",
  authDomain: "aroma-cafe-d296d.firebaseapp.com",
  projectId: "aroma-cafe-d296d",
  storageBucket: "aroma-cafe-d296d.appspot.com",
  messagingSenderId: "173408933457",
  appId: "1:173408933457:web:a5d45db1fff62a0df54a70"
};

const app = initializeApp(firebaseConfig);
export const firestoreDB= getFirestore(app)