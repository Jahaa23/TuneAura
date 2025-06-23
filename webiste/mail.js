// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCXOJ28yGFCWC-zo2Af5u8cclflwfB3a0E",
    authDomain: "fir-c0fa6.firebaseapp.com",
    databaseURL: "https://fir-c0fa6-default-rtdb.firebaseio.com",
    projectId: "fir-c0fa6",
    storageBucket: "fir-c0fa6.appspot.com",
    messagingSenderId: "483480909737",
    appId: "1:483480909737:web:d2a4e705f72f9fee4b76b8"
  };

  
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  var database = firebase.database();
  
  // Sign up function
  function signUp(email, password, firstname, lastname) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        // Signed up successfully
        var user = userCredential.user;
        // Store additional user data in the database
        saveUserData(user.uid, email, firstname, lastname);
      })
      .catch(function (error) {
        // Handle errors
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorMessage);
      });
  }
  
  // Save user data to the database
  function saveUserData(userId, email, firstname, lastname) {
    database.ref('users/' + userId).set({
      email: email,
      firstname: firstname,
      lastname: lastname
    });
  }
  
  // Sign in function
  function signIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        // Signed in successfully
        var user = userCredential.user;
        console.log("Signed in as:", user.email);
      })
      .catch(function (error) {
        // Handle errors
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorMessage);
      });
  }
  
  // Sign out function
  function signOut() {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      console.log("Signed out");
    }).catch(function (error) {
      // An error happened.
      console.error(error);
    });
  }
  