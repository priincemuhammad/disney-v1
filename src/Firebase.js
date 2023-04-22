import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdee0aAoPBF-BskKhK8o86bcMbmcMH2MA",
  authDomain: "disney-clone-5cd83.firebaseapp.com",
  projectId: "disney-clone-5cd83",
  storageBucket: "disney-clone-5cd83.appspot.com",
  messagingSenderId: "121634217860",
  appId: "1:121634217860:web:af29b80df9594ea76c07d1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storege = firebase.storage();

export { auth, provider, storege };

export default db;
