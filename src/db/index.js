import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBkBNsu4cSTvwNJ90RkqfcU55FBqZq25LY",
    authDomain: "waffle-house-78483.firebaseapp.com",
    projectId: "waffle-house-78483",
    storageBucket: "waffle-house-78483.appspot.com",
    messagingSenderId: "571058775293",
    appId: "1:571058775293:web:f33298819aedc3a3560a94",
    measurementId: "G-N2T7CMQ5XW"
})

export function getFirebase() {
    return app;
}

export function getFirestore () {
    return firebase.firestore(app);
}

