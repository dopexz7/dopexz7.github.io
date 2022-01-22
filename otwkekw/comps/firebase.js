import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import { getAnalytics } from "firebase/analytics";

const App = firebase.initializeApp({
    apiKey: "AIzaSyCPGqmziPBIQahzwiDg9w95w0qzKDlpH3k",
    authDomain: "npotw-production.firebaseapp.com",
    databaseURL: "https://npotw-production-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "npotw-production",
    storageBucket: "npotw-production.appspot.com",
    messagingSenderId: "938102620349",
    appId: "1:938102620349:web:63c556beb2e8f3486cb7d4",
    measurementId: "G-NS4D0MNEQV"
})

// const analytics = getAnalytics(app);

export const auth = App.auth();
// export const projectStorage = firebase.storage(); 
// export const projectFirestore = firebase.firestore();
// export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default App