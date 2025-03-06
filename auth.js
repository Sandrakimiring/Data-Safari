import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
}from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { app } from "./firebase.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Function to handle sign-up
function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          console.log("User signed up:", userCredential.user);
          alert("Sign-up successful! You can now log in.");
      })
      .catch((error) => {
          console.error("Sign-up error:", error.message);
          alert("Sign-up failed: " + error.message);
      });
}

// Function to handle login
function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          console.log("User logged in:", userCredential.user);
          alert("Login successful!");
          window.location.href = "dashboard.html"; // Redirect after login
      })
      .catch((error) => {
          console.error("Login error:", error.message);
          alert("Login failed: " + error.message);
      });
}

// Function for Google login
function googleLogin() {
  signInWithPopup(auth, provider)
      .then((result) => {
          console.log("Google login successful:", result.user);
          alert("Google login successful!");
          window.location.href = "dashboard.html";
      })
      .catch((error) => {
          console.error("Google login error:", error.message);
          alert("Google login failed: " + error.message);
      });
}

export { signUp, login, googleLogin };
