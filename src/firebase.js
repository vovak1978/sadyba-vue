import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB4e3RwoYTgIDD92uQIHA9cqNc0NFciUok",
    authDomain: "saduba-da840.firebaseapp.com",
    databaseURL: "https://saduba-da840.firebaseio.com",
    projectId: "saduba-da840",
    storageBucket: "saduba-da840.appspot.com",
    messagingSenderId: "1524506075",
    appId: "1:1524506075:web:8d43d553bf201ad9be5bfe"
};

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.firestore();



