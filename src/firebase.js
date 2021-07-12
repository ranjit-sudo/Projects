// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBeSp--tNZtdliPeCMwwGjA1Ti6f5Br45U",
  authDomain: "discord-clone-b4857.firebaseapp.com",
  projectId: "discord-clone-b4857",
  storageBucket: "discord-clone-b4857.appspot.com",
  messagingSenderId: "672776562399",
  appId: "1:672776562399:web:6d3d4d4c28f65aaf8d6b6a",
  measurementId: "G-ZQ31J5Q4Q4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
