  import * as firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyCXeD6uR1Ni75AbqmGw1ae9IhHslYynnPE",
    authDomain: "expensify-fc4a5.firebaseapp.com",
    databaseURL: "https://expensify-fc4a5.firebaseio.com",
    projectId: "expensify-fc4a5",
    storageBucket: "expensify-fc4a5.appspot.com",
    messagingSenderId: "63026013230",
    appId: "1:63026013230:web:1c821607c16549dc22abbf",
    measurementId: "G-B2Q3GTTTBV"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider ,database as default};
  // database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
  // })

  // firebase.database().ref().set({
  //   name: 'Rohit Gupta',
  //   age : 21,
  //   job : {
  //     company : 'Amazon',
  //     title : 'Software Developer'
  //   },
  //   location : {
  //     city : 'Delhi',
  //     country : 'India'
  //   },
  //   stressLevel : 8
  // });