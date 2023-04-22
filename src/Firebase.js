import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdee0aAoPBF-BskKhK8o86bcMbmcMH2MA",
  authDomain: "disney-clone-5cd83.firebaseapp.com",
  projectId: "disney-clone-5cd83",
  storageBucket: "disney-clone-5cd83.appspot.com",
  messagingSenderId: "121634217860",
  appId: "1:121634217860:web:af29b80df9594ea76c07d1",
};

// init firebase app
initializeApp(firebaseConfig);
// init services
const db = getFirestore();
// collection ref
const colRef = collection(db, "movies");

export default colRef;
