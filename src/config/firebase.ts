import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDTNU55CiT0CePtyVRIRApBO85cLrwYto",
  authDomain: "heladerascarniceria.firebaseapp.com",
  databaseURL: "https://heladerascarniceria-default-rtdb.firebaseio.com",
  projectId: "heladerascarniceria",
  storageBucket: "heladerascarniceria.appspot.com",
  messagingSenderId: "156081350057",
  appId: "1:156081350057:web:f3d86c4213a78daf5f50b8"
};

const app = initializeApp(firebaseConfig);

export default app;