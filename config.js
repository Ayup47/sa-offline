import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXHKoQ2ynbAoNs6JMjv1BHpNK_Rzj9Dnc",
  authDomain: "attendenceapp-182c9.firebaseapp.com",
  databaseURL: "https://attendenceapp-182c9-default-rtdb.firebaseio.com",
  projectId: "attendenceapp-182c9",
  storageBucket: "attendenceapp-182c9.appspot.com",
  messagingSenderId: "690199560398",
  appId: "1:690199560398:web:c8494f9f9b0ffed262509f",
  measurementId: "G-TX6PWLHV5H"
};
//initialize your database
firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  