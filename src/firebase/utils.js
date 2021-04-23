import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from "./config";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUserProfile = async (userAuth, additionalData) => {
  //Takes the userAuth object, and checks if user exists in the users collection in the firebase db.
  if (!userAuth) return;
  const { uid } = userAuth;
  const userRef = firestore.doc("users/${uid}");
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    //seeing if user exists
    const { displayName, email } = userAuth;
    const timestamp = new Date();

    try {
      //If user doesn't exist, we register them/create a new document in the users collection,
      //and we store the information.
      await userRef.set({
        displayName,
        email,
        createdDate: timestamp,
        ...additionalData,
      });
    } catch (err) {
      //console.log(err);
    }
  }
  return userRef; //Regardless, we return the userRef document that we can use to store the user's
  //information in the the local state of the application to sign them in.
};
