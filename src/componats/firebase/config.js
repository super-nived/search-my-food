import firebase from "firebase";
import 'firebase/firestore'
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjW5LMG3deMsfjcen8FGcWulb4-2Lubn8",
  authDomain: "food-2ce3f.firebaseapp.com",
  projectId: "food-2ce3f",
  storageBucket: "food-2ce3f.appspot.com",
  messagingSenderId: "752616868298",
  appId: "1:752616868298:web:cbaee7b5ed6b0881112733"
};
export default firebase.initializeApp(firebaseConfig);