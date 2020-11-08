import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// We need to somehow seed the database

// We need a config here
const config = {
  apiKey: "AIzaSyBYI10YzFHVowwu4dINQSvGihwSC0-beMg",
  authDomain: "netstream-app.firebaseapp.com",
  databaseURL: "https://netstream-app.firebaseio.com",
  projectId: "netstream-app",
  storageBucket: "netstream-app.appspot.com",
  messagingSenderId: "828415316870",
  appId: "1:828415316870:web:4757d7e7319e2cdfd95207",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
