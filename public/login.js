  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA63dlXe5a7FsuRYemjhz_pNgFfcN3HJ9M",
    authDomain: "fbaseauthenticationmustafa.firebaseapp.com",
    projectId: "fbaseauthenticationmustafa",
    storageBucket: "fbaseauthenticationmustafa.appspot.com",
    messagingSenderId: "1075492492910",
    appId: "1:1075492492910:web:31e15ed4e9937b1632787f",
    measurementId: "G-V99KLB45XV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app); 
  const auth = getAuth();


var emailLogin = document.getElementById('email');
var passLogin = document.getElementById('pass');

window.login = function(e){
   e.preventDefault();

   var model = {
    email : emailLogin.value,
    password : passLogin.value,
   };


signInWithEmailAndPassword(auth, model.email, model.password)
  .then(function(success){
   console.log(success.user.uid);
   window.location.replace('index.html'); 
  })
  .catch(function(error){
    console.log(error);
  });
   console.log(model);
}
