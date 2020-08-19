import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC2EhKrW-dIonFTSAzui-pLD3DupLYv-ys",
    authDomain: "chat-90a02.firebaseapp.com",
    databaseURL: "https://chat-90a02.firebaseio.com",
    projectId: "chat-90a02",
    storageBucket: "chat-90a02.appspot.com",
    messagingSenderId: "268455406161",
    appId: "1:268455406161:web:4315739280c963be356670",
    measurementId: "G-M0CV6RJ9E5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider }
export default db;