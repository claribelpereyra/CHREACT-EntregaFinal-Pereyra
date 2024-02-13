import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJeG70257-CUgjhdDZA7XM8H5DIOdDbp8",
  authDomain: "kempes-libro.firebaseapp.com",
  projectId: "kempes-libro",
  storageBucket: "kempes-libro.appspot.com",
  messagingSenderId: "61173622532",
  appId: "1:61173622532:web:6469d853307332bb8ad251"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);