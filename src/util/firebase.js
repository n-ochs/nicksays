import firebase from 'firebase';
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: "nicksays-c3f63",
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
};

firebase.initializeApp(firebaseConfig);

export default firebase;