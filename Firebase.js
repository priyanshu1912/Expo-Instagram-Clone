import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDlsKHkDhijM_j-zwG9L1SSphQKOOJSCJg",
  authDomain: "react-native-instagram-c-4bf9c.firebaseapp.com",
  projectId: "react-native-instagram-c-4bf9c",
  storageBucket: "react-native-instagram-c-4bf9c.appspot.com",
  messagingSenderId: "891215569059",
  appId: "1:891215569059:web:f81ef01c12cfbddd9ddf16"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)
export const storage = getStorage(app)