import firebase from 'firebase';

try {
	var config = {
	  apiKey: "AIzaSyBHX44HfTnVVcTBfHA0H52RGmht6drqJbc",
	  authDomain: "barlow-react-todo.firebaseapp.com",
	  databaseURL: "https://barlow-react-todo.firebaseio.com",
	  storageBucket: "barlow-react-todo.appspot.com",
	  messagingSenderId: "19937638559"
	};
	firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;