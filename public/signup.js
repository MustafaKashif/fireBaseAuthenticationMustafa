    // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

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

var firstName = document.getElementById('fname');
var lastName = document.getElementById('lname');
var email = document.getElementById('email');
var pass = document.getElementById('pass');

window.signup = function(e){
  e.preventDefault();

  var model = {
    firstname : firstName.value,
    lastname : lastName.value,
    email : email.value,
    password : pass.value,
  };

createUserWithEmailAndPassword(auth, model.email, model.password)
  .then(function(success) {
    // Signed in 
    console.log(success.user.uid);
    window.location.href = "login.html";
    // ...
  })
  .catch(function(error) {
console.log(err); 
  });
  console.log(model);
}