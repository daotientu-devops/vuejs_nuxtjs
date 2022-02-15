import {initializeApp, getApps} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDvkGdjP-RHUTy7Dxd3Vf8ZczYCQcoVd2c",
  authDomain: "fir-dev-73b1d.firebaseapp.com",
  databaseURL: "https://fir-dev-73b1d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-dev-73b1d",
  storageBucket: "fir-dev-73b1d.appspot.com",
  messagingSenderId: "1050520543520",
  appId: "1:1050520543520:web:031e224844b40758667745",
  measurementId: "G-HYJJPMK2PZ"
};
let firebaseApp;
const apps = getApps();
if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig)
} else {
  firebaseApp = apps[0]
}
const db = getFirestore(firebaseApp, {});
const auth = getAuth(firebaseApp);
export {db, auth}
