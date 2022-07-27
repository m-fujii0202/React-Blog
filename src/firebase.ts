import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmzEaJXh7BNqTdKbbmdtowMsncezFq9DQ",
  authDomain: "blog-6ad14.firebaseapp.com",
  projectId: "blog-6ad14",
  storageBucket: "blog-6ad14.appspot.com",
  messagingSenderId: "1067965800899",
  appId: "1:1067965800899:web:22e0481c9e8c7f36fd5d76"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };