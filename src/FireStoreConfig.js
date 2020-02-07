import firebase from 'firebase/app';

import 'firebase/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyCnQrP0TIudEFM1UvBtvrWg5f-KErcEuHM",
    authDomain: "retoeveriscodechallenge.firebaseapp.com",
    databaseURL: "https://retoeveriscodechallenge.firebaseio.com",
    projectId: "retoeveriscodechallenge",
    storageBucket: "retoeveriscodechallenge.appspot.com",
    messagingSenderId: "448709001308",
    appId: "1:448709001308:web:b0b60d19da9fea3fbb6699",
    measurementId: "G-FZ71HF58VK"
});


let db = firebase.firestore();
db.settings({timestampsInSnapshots:true});


export default db;