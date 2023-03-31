
/* <script type="module"> */
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
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
  const analytics = getAnalytics(app);

  import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js";

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    // Signed in..
    console.log("Signed in");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    console.log("Not logged in." + errorMessage);
  });
// </script>