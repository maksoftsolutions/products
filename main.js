// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyA-ZMnJFq2B3EzQHAvszZsEi4PDkykq0do",
  authDomain: "maksoftsolutions-9dbf9.firebaseapp.com",
  databaseURL: "https://maksoftsolutions-9dbf9-default-rtdb.firebaseio.com",
  projectId: "maksoftsolutions-9dbf9",
  storageBucket: "maksoftsolutions-9dbf9.appspot.com",
  messagingSenderId: "477531095837",
  appId: "1:477531095837:web:fb502ff56a099b4dc457f4",


    

  };

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var phone = getInputVal('phone');
  var email = getInputVal('email')

  // Save message
  saveMessage(name, phone, email);

  // Show alert
alert("Proceed To Payment Page")
  // Clear form
  document.getElementById('contactForm').reset();
  window.location.assign("pay.html")
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, phone, email){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone:phone,
    email:email,
  });
}