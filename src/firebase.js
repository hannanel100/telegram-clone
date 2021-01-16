import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjzvTsQo2qQmpsW8GekQgfffqopDa3YRM",
  authDomain: "telegram-clone-7c83b.firebaseapp.com",
  projectId: "telegram-clone-7c83b",
  storageBucket: "telegram-clone-7c83b.appspot.com",
  messagingSenderId: "855148582226",
  appId: "1:855148582226:web:ebdbdadde2f305791b568b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
