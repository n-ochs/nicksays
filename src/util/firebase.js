import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCqIPqh4adzcel4XsNQO7bZ23_fyFb4J_U",
    authDomain: "nicksays-c3f63.firebaseapp.com",
    projectId: "nicksays-c3f63",
    storageBucket: "nicksays-c3f63.appspot.com",
    messagingSenderId: "298839006994",
    appId: "1:298839006994:web:ef16023eddfe45a2551dcb"
};

firebase.initializeApp(firebaseConfig);

export default firebase;