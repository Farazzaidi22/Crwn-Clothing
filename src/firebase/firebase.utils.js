import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {

    apiKey: "AIzaSyDMOw72fQNuWedsTZhsSdtqPglIQ10jB_s",
    authDomain: "crnw-db-d224c.firebaseapp.com",
    projectId: "crnw-db-d224c",
    storageBucket: "crnw-db-d224c.appspot.com",
    messagingSenderId: "477642902510",
    appId: "1:477642902510:web:aeec01f0eb60cc0b0f9cff",
    measurementId: "G-2LB5HV0PMR"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters( {prompt: 'select_account'} )

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase