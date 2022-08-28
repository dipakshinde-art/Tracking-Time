import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyDZKR72NlT-THF-IchfD_zO7RlvIGptlv0",
  authDomain: "trakertime.firebaseapp.com",
  projectId: "trakertime",
  storageBucket: "trakertime.appspot.com",
  messagingSenderId: "101029570510",
  appId: "1:101029570510:web:c8718632d7ffac18d72d9f",
  measurementId: "G-RQL0MKMLFW"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider()
const storage = getStorage()
export { auth, provider, storage }
export default db;