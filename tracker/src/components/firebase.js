// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyClj1kai16dl6jDa6ebXnUsDKhDer49p98",
  authDomain: "expensetracker-f4ebf.firebaseapp.com",
  databaseURL: "https://expensetracker-f4ebf-default-rtdb.firebaseio.com",
  projectId: "expensetracker-f4ebf",
  storageBucket: "expensetracker-f4ebf.firebasestorage.app",
  messagingSenderId: "601186917124",
  appId: "1:601186917124:web:46d459bccef1de68548e51"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore(app)
export default app;