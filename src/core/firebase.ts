/*
 * Import the functions you need from the SDKs you need
 * Required for side-effects
 */
import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

/*
 * TODO: Add SDKs for Firebase products that you want to use
 * https://firebase.google.com/docs/web/setup#available-libraries
 */

/*
 * Your web app's Firebase configuration
 * For Firebase JS SDK v7.20.0 and later, measurementId is optional
 */
const firebaseConfig = {
    "apiKey": "AIzaSyBG6KDBfkPmTSONUl2vjR3nCNQeXaHPZJE",
    "authDomain": "saver-ef91d.firebaseapp.com",
    "projectId": "saver-ef91d",
    "storageBucket": "saver-ef91d.appspot.com",
    "messagingSenderId": "426282194888",
    "appId": "1:426282194888:web:bcf1586d01136ecccb52fd",
    "measurementId": "G-88QD28BT09",
  },
  firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

export const signIn = () => signInAnonymously(firebaseAuth);
export const db = getFirestore(firebaseApp);

export const currenciesCollection = "currencies_collection";
