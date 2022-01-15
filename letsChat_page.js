/// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDXYF3oMtOe5QnPJ_6pE7K8rgu_Ru7iQ-o",
    authDomain: "lets-chat-app-8d3a5.firebaseapp.com",
    databaseURL: "https://lets-chat-app-8d3a5-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-8d3a5",
    storageBucket: "lets-chat-app-8d3a5.appspot.com",
    messagingSenderId: "1015274757081",
    appId: "1:1015274757081:web:1f976522a79d254a0097c8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("input_msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg, 
            like:0
      });
      document.getElementById("input_msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
