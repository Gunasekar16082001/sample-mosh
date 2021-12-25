import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDp9Y_-e-7mkUmKehsULo1WA2xdxad0hAs",
  authDomain: "react-fire-a755d.firebaseapp.com",
  projectId: "react-fire-a755d",
  storageBucket: "react-fire-a755d.appspot.com",
  messagingSenderId: "1071238735166",
  appId: "1:1071238735166:web:3311415753cc5371adf86f",
  measurementId: "G-6JQXNX4Q8L"
};

const app = initializeApp(firebaseConfig);

 export const auth =getAuth(app)
