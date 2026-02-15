const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

function login() {
  const email = prompt("Email:");
  const pass = prompt("Password:");
  auth.signInWithEmailAndPassword(email, pass)
    // .then(userCredential => {
    //   alert("Login successful!");
    //   // Redirect to home page or dashboard
    //   window.location.href = "index.html";
    // })
    .catch(error => alert(error.message));
}
