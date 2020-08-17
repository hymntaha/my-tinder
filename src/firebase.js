import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDuNv3bZEJCa8wZllne5Ayyvac5yryBGz0",
  authDomain: "my-tinder-89a31.firebaseapp.com",
  databaseURL: "https://my-tinder-89a31.firebaseio.com",
  projectId: "my-tinder-89a31",
  storageBucket: "my-tinder-89a31.appspot.com",
  messagingSenderId: "271712434294",
  appId: "1:271712434294:web:7ce1a0e432994b8119c757",
  measurementId: "G-XN13PC20LS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
