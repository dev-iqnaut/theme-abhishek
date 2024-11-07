import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const config={
//     apiKey:import.meta.env.VITE_apiKey,
//     authDomain:import.meta.env.VITE_authDomain,
//     projectId:import.meta.env.VITE_projectId,
//     storageBucket:import.meta.env.VITE_storageBucket,
//      messagingSenderId:import.meta.env.VITE_messagingSenderId,
//      appId:import.meta.env.VITE_appId,
//     measurementId:import.meta.VITE_measurementId,
// }
// console.log(config);

const firebaseConfig = {
    apiKey: "AIzaSyBzH0v6igVadt8Fy9KXGpmZ5TxN7kMZn04",
    authDomain: "testing-king-f4bc5.firebaseapp.com",
    projectId: "testing-king-f4bc5",
    storageBucket: "testing-king-f4bc5.appspot.com",
    messagingSenderId: "401822606909",
    appId: "1:401822606909:web:9ce11aae80adffea95ec54",
    measurementId: "G-8RPW8JHC9Z"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };