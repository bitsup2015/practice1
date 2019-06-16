import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD8mWlS7seD4HQ8DAtcNLRfAeHXeSjm2b0",
    authDomain: "practicedb-ebea9.firebaseapp.com",
    databaseURL: "https://practicedb-ebea9.firebaseio.com",
    projectId: "practicedb-ebea9",
    storageBucket: "practicedb-ebea9.appspot.com",
    messagingSenderId: "637220433502",
    appId: "1:637220433502:web:94d1cb5c9b754245"
}

firebase.initializeApp(config);
export default firebase;
