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
  window.alert("Online Setup Completed!");
  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "Adding Room Name"
    });
    localStorage.setItem("room_name" , room_name);
    window.location="letsChat_page.html";
}
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room Name: " + Room_names);
                row = "<div class='room_name' id= " + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_name + "</div><hr>";
                document.getElementById("output").innerHTML+=row;
                //End code
          });
    });
}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location="letsChat_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="letsChat.html";
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    if(keyPressed == 16 && keyPressed == 56){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="letsChat.html";
    }

    if(keyPressed == 13){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location="letsChat_page.html";
    }
}