var firebaseConfig = {
	apiKey: 'AIzaSyDRxrXTSD6MOMTREYFJ4vBmWt4R-pVKVnw',
	authDomain: 'clone-two-dfed7.firebaseapp.com',
	projectId: 'clone-two-dfed7',
	storageBucket: 'clone-two-dfed7.appspot.com',
	messagingSenderId: '542105453493',
	appId: '1:542105453493:web:18b5c7e432eb67766f0ffc',
	measurementId: 'G-7CB3D6P3TJ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();
