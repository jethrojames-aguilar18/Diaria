// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuJiYI_t8AhBfKb0mWz6-poN5lmEd2_2o",
  authDomain: "diaria-bdc0f.firebaseapp.com",
  projectId: "diaria-bdc0f",
  storageBucket: "diaria-bdc0f.appspot.com",
  messagingSenderId: "583921431977",
  appId: "1:583921431977:web:164810adadd54bc83980b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Login
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User logged in:", userCredential.user);
            window.location.href = "home.html";
        })
        .catch((error) => {
            console.error("Error logging in:", error.code, error.message);
            alert(error.message);
        });
}

// Handle Signup
function handleSignup(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User signed up:", userCredential.user);
            window.location.href = "login.html";
        })
        .catch((error) => {
            console.error("Error during signup:", error.code, error.message);
            alert(error.message);
        });
}

// Attach event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login');
    const signupButton = document.getElementById('signup');
    
    if (loginButton) {
        // Remove any existing event listener before adding a new one
        loginButton.removeEventListener("click", handleLogin);
        loginButton.addEventListener("click", handleLogin);
    }

    if (signupButton) {
        // Remove any existing event listener before adding a new one
        signupButton.removeEventListener("click", handleSignup);
        signupButton.addEventListener("click", handleSignup);
    }

    // Set the current date in the calendar input
    const today = new Date().toISOString().split('T')[0];
    const journalDateInput = document.getElementById('journal-date');
    if (journalDateInput) {
        journalDateInput.value = today;
    }
});

