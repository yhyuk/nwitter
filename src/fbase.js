import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4BgxJS_lWaHUORmy5H_iJsdic4zIuvNc",
  authDomain: "nwitter-a5038.firebaseapp.com",
  projectId: "nwitter-a5038",
  storageBucket: "nwitter-a5038.appspot.com",
  messagingSenderId: "1002905485371",
  appId: "1:1002905485371:web:9bbda9e0449c1f41859c1e",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
