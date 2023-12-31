import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCiwT-Cjcb58oTYjzmqVEQaPuMDfe-pVPU", // Add API Key
  databaseURL: "https://ukara-387923-default-rtdb.firebaseio.com" // Add databaseURL
};

firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
