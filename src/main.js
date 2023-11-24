import { createApp } from "vue";
import firebase from 'firebase';
import App from "./App.vue";
import router from "./router";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAH8tiMMzMOc0C_Be4I3OUMvcP6sjjT0IA",
  authDomain: "vueapp-f3b90.firebaseapp.com",
  projectId: "vueapp-f3b90",
  storageBucket: "vueapp-f3b90.appspot.com",
  messagingSenderId: "638193987764",
  appId: "1:638193987764:web:2fcdad09694d588da5a7e1",
  measurementId: "G-0DD9JW9TXY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
