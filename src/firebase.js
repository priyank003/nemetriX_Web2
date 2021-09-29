import firebase from "firebase";

import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-mDBtKhwc4Sl1sq3T_S1kYc-Ek4yqQt0",
  authDomain: "placement-app-5408d.firebaseapp.com",
  databaseURL: "https://placement-app-5408d-default-rtdb.firebaseio.com",
  projectId: "placement-app-5408d",
  storageBucket: "placement-app-5408d.appspot.com",
  messagingSenderId: "243904588991",
  appId: "1:243904588991:web:842384577f5588e1522a0a",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

//Calling the function (You can call it normally then)

export { storage, firebase as default };
