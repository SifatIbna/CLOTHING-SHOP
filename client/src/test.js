import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firebase
  .collection("users")
  .doc("OaWN8CRCVWCZUqi5V7KE")
  .collection("cartItems")
  .doc("5c8BmIDF6rjYVV4zzAiQ");

// *another way to get documents in firestore
firebase.doc("/users/OaWN8CRCVWCZUqi5V7KE/cartItems/5c8BmIDF6rjYVV4zzAiQ");

//TODO Way to get collection
firebase.collection("/users/OaWN8CRCVWCZUqi5V7/cartItems");
