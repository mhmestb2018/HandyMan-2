var firebaseConfig = {
    apiKey: "AIzaSyD5NICRak4C2AaylY6vcoj1pmk6iHzAZ60",
    authDomain: "test-d328f.firebaseapp.com",
    databaseURL: "https://test-d328f.firebaseio.com",
    projectId: "test-d328f",
    storageBucket: "test-d328f.appspot.com",
    messagingSenderId: "81074058867",
    appId: "1:81074058867:web:f8be89a1d6ff2b1b475c06",
    measurementId: "G-VY8YDWCT1B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const firestore = firebase.firestore();
  const email = document.getElementById("email");
  const pass = document.getElementById("password");
  const login = document.getElementById("logd");

  console.log(pass.value);
  login.addEventListener("click", e => {
      e.preventDefault();
      firestore.collection("Users").doc(email.value).set({
          id: email.value,
          password: pass.value
      })
      .then(() => {console.log("Succes sent");})
      .catch(error => {console.error(error);});
  })


  