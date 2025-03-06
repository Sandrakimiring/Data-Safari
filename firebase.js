// Import Firebase modules
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";  
// import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";  
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Your Firebase configuration  
const firebaseConfig = {  
    apiKey: "AIzaSyDhxpGFyU8yq3XE3Fc3zyObsTXNx--u3uQ",  
    authDomain: "datasafari-7.firebaseapp.com",  
    projectId: "datasafari-7",  
    storageBucket: "datasafari-7.appspot.com",  
    messagingSenderId: "642918285264",  
    appId: "1:642918285264:web:2d8bfc24959bb891ff83d5"  
};  

// Initialize Firebase  
const app = initializeApp(firebaseConfig);  
const auth = getAuth(app);  
const provider = new GoogleAuthProvider();  

// Export authentication functions  
// export { auth, provider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export { app, auth, provider };