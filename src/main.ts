// Import the functions you need from the SDKs you need
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/js/bootstrap.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdo-7cXPcmyA_vhfhdSRNwpBPWwg5mDmI",
  authDomain: "curso-luiscocoenriquez-vue.firebaseapp.com",
  projectId: "curso-luiscocoenriquez-vue",
  storageBucket: "curso-luiscocoenriquez-vue.appspot.com",
  messagingSenderId: "820764835397",
  appId: "1:820764835397:web:206935a8527ae16382ad2c",
  measurementId: "G-4K1J8C3MWK",
};

// Initialize Firebase
initializeApp(firebaseConfig);
createApp(App).use(router).mount("#app");
