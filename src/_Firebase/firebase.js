import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCs9IXMQzHine0WM1wtFrTnd-oMWJnKJvI",
  authDomain: "my-time-buddy.firebaseapp.com",
  databaseURL: "https://my-time-buddy.firebaseio.com",
  projectId: "my-time-buddy",
  storageBucket: "my-time-buddy.appspot.com",
  messagingSenderId: "245275941958",
  appId: "1:245275941958:web:948e02286deb3496"
};

// Initialize and Export Firebase
export const fireDB = firebase.initializeApp(firebaseConfig);

// Create User
export const createUser = (email, password) => {
  fireDB.auth().createUserWithEmailAndPassword(email, password)
.then( () => console.log('Success') )
.catch( error => console.log(error) )
}

// Login User
export const loginUser = (email, password) => {
  fireDB.auth().signInWithEmailAndPassword(email, password)
  .then( ( singnedInUser ) => console.log(singnedInUser, 'Logged In') )
  .catch( error => console.log(error) )
}
