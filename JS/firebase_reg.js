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

  const firestore = firebase.firestore();
  const email = document.getElementById("emailid");
  const pass = document.getElementById("pass");
  const cpass = document.getElementById("confirm_pass");
  const name = document.getElementById("name");
  const mob = document.getElementById("mob");
  const address = document.getElementById("address");
  const pin = document.getElementById("pin");

  const button = document.getElementById("reg_btn");

  button.addEventListener("click", e => {
      e.preventDefault();
      firestore.collection("Users").doc(email.value).set({
        name: name.value,
        email: email.value,
        password: pass.value,
        contact: Number(mob.value),
        address: address.value,
        pincode: Number(pin.value)
      })
      .then(() => {console.log("Succes sent");})
      .catch(error => {console.error(error);});
  })