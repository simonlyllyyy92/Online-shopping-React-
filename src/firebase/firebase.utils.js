import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAHB7IPUKJ41BMS3Hzl34-AlcIQgDwciQo",
    authDomain: "crwn-db-9138d.firebaseapp.com",
    databaseURL: "https://crwn-db-9138d.firebaseio.com",
    projectId: "crwn-db-9138d",
    storageBucket: "crwn-db-9138d.appspot.com",
    messagingSenderId: "271999697971",
    appId: "1:271999697971:web:173f832628effcd4bb0f46",
    measurementId: "G-DKX82J8YL6"
  };

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if(!userAuth) {
    return 
  }
   const userRef = firestore.doc(`users/${userAuth.uid}`)

   const snapShot = await userRef.get()



  if(!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
          displayName,
          email, 
          createdAt,
          ...additionalData
      })
    }catch(error){
        console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase