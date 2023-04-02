
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjWpV99b42imO1ppuO-yOAg1kRSwADHMY",
  authDomain: "homework-nine-930c7.firebaseapp.com",
  projectId: "homework-nine-930c7",
  storageBucket: "homework-nine-930c7.appspot.com",
  messagingSenderId: "665946495404",
  appId: "1:665946495404:web:92834ca1a137b982504209",
  measurementId: "G-S2B1Q0PCKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbConnection = getFirestore(app);
const analytics = getAnalytics(app);

// if(user){
//   console.log("Signed in.");
// }else{
//   console.log("Not signed in.");
// }
// signInAnonymously(auth)
// .then(() => {
//   // Signed in..
//   console.log("Signed in");
// })
// .catch((error) => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
  
//   console.log("Not logged in." + errorMessage);
// });




// import UserObjectData from "./data/DB[Recipes]Table[User].json" assert {type: "json"};
import PageData from "./data/Pages.json" assert {type: "json"};
import PageManager from "./data/PageManager.js";
// import GalleryManager from "./GalleryManager.js";
import SPAManager from "./SPAManager.js";
import UserModel from "./models/UserModel.js";

var spa = new SPAManager(new UserModel(dbConnection), new PageManager(PageData));














































// import firebase from "firebase/app";
// import "firebase/auth";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   apiKey: "AIzaSyBjWpV99b42imO1ppuO-yOAg1kRSwADHMY",
//   authDomain: "homework-nine-930c7.firebaseapp.com",
//   projectId: "homework-nine-930c7",
//   storageBucket: "homework-nine-930c7.appspot.com",
//   messagingSenderId: "665946495404",
//   appId: "1:665946495404:web:92834ca1a137b982504209",
//   measurementId: "G-S2B1Q0PCKG"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// // Initialize Firebase Authentication and get a reference to the service
// const auth = firebase.auth();










// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBjWpV99b42imO1ppuO-yOAg1kRSwADHMY",
//   authDomain: "homework-nine-930c7.firebaseapp.com",
//   projectId: "homework-nine-930c7",
//   storageBucket: "homework-nine-930c7.appspot.com",
//   messagingSenderId: "665946495404",
//   appId: "1:665946495404:web:92834ca1a137b982504209",
//   measurementId: "G-S2B1Q0PCKG"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



// app.auth().signInAnonymously()
//   .then(() => {
//     // Signed in..
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     alert(errorMessage);
//     // ...
//   });



// import { getAuth, signInAnonymously } from "firebase/auth";

// const auth = getAuth();
// signInAnonymously(auth)
//   .then(() => {
//     // Signed in..
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ...
//   });


// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
// import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

// const firebaseApp = initializeApp({
//   // (insert your Firebase configuration here)
//   });

//   const auth = getAuth(firebaseApp);

//   onAuthStateChanged(auth, user => {
//     if (user) {
//       console.log('Logged in as ${user.email}' );
//     } else {
//       console.log('No user');
//     }
//   });



  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     var uid = user.uid;
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });