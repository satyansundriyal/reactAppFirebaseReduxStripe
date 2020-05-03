import firebase from 'firebase/app';
import  'firebase/firestore';
import  'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyBnx_nTAEc3U2k-x6ar2c54mlQ4V-1gJts",
   authDomain: "satyan-46992.firebaseapp.com",
   databaseURL: "https://satyan-46992.firebaseio.com",
   projectId: "satyan-46992",
   storageBucket: "satyan-46992.appspot.com",
   messagingSenderId: "123298600020",
   appId: "1:123298600020:web:8097dd5450d0f4076809c1",
   measurementId: "G-E7FRVRGZG4"
 };
 export const createUserProfileDocument=async (userAuth,additionalData)=>{
   if (!userAuth) return ;

   const userRef=   firesetore.doc(`/user/${userAuth.uid}`);
 const snapShot=await userRef.get();
 console.log(snapShot);

  if (!snapShot.exists)
  {
     const{displayName,email}=userAuth;

     const createAt=new Date();
      try { 
              await userRef.set({
              displayName:displayName,
              email:email,
              createAt:createAt,
              ...additionalData

                    }) 
     
      }
      catch(error)
      {
        console.log("Error Creqting user :"+error);

      }

  }
  return userRef;
 }
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
 export const auths=firebase.auth();
 export const firesetore=firebase.firestore();
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=> auths.signInWithPopup(provider);  
  export default firebase;