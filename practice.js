

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDySdGaG7t1N7efoGg60rtfoNiVkQ6ZpYY",
    authDomain: "kwitter-e20c1.firebaseapp.com",
    databaseURL: "https://kwitter-e20c1-default-rtdb.firebaseio.com",
    projectId: "kwitter-e20c1",
    storageBucket: "kwitter-e20c1.appspot.com",
    messagingSenderId: "29824321326",
    appId: "1:29824321326:web:84790ee472a7817f641cbf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {

    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        spotmike : "adding user"
    })


  }

