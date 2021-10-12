import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const fbConfig = {
  apiKey: "AIzaSyCkFj8WUI_IDV--Ol07EIV8JUAekEHrKVE",
  authDomain: "marioplan-e0345.firebaseapp.com",
  databaseURL: "https://marioplan-e0345-default-rtdb.firebaseio.com",
  projectId: "marioplan-e0345",
  storageBucket: "marioplan-e0345.appspot.com",
  messagingSenderId: "822718664062",
  appId: "1:822718664062:web:f2dc9fedc81d2b72c5772f",
  measurementId: "G-J647Q5ZDRR"
};

const app = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true})
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

//Sign in with Google

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
//Sisgn in with email and password

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//Sign up with email and password

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//password reset

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const logout = () => {
  auth.signOut();
};

export {
  fbConfig,
  firebase,
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
