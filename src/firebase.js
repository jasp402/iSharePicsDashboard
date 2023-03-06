// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child } from 'firebase/database';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, serverTimestamp, doc, orderBy, limit, onSnapshot, query } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAZJGL2dJl-90k1SQtJYDXJMHJiGoS3r14',
  authDomain: 'testing-project-ba434.firebaseapp.com',
  databaseURL: 'https://testing-project-ba434.firebaseio.com',
  projectId: 'testing-project-ba434',
  storageBucket: 'testing-project-ba434.appspot.com',
  messagingSenderId: '708138584851',
  appId: '1:708138584851:web:816404469971fd2fdba8e6',
  measurementId: 'G-5XZTWKMFXB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
// init services
const db = getDatabase(app);

const storage = getFirestore(app);

const auth = getAuth();

export {
  storage,
  ref,
  set,
  get,
  child,
  db,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  doc,
  auth,
  orderBy,
  limit,
  onSnapshot,
  query,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
};
