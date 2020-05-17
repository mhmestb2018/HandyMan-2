var firebaseConfig = {
    apiKey: "AIzaSyCL2v8R6NdJIIXraLLrpIpISbn-xUv5pCo",
    authDomain: "handyman-1742c.firebaseapp.com",
    databaseURL: "https://handyman-1742c.firebaseio.com",
    projectId: "handyman-1742c",
    storageBucket: "handyman-1742c.appspot.com",
    messagingSenderId: "728193362142",
    appId: "1:728193362142:web:a7b38a519c2c106ae8ba4f",
    measurementId: "G-6DDTBN6137"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const database = firebase.firestore();
    function leave(){

    var name = document.getElementById('name').value;
    var mail = document.getElementById('mail').value; 
    var message = document.getElementById('message').value;
    alert(message);
    let data={
        name:name,
        message:message
    }
    alert(data.name);
    database.collection(message).doc(mail).set(data);
    console.log("hh");
}