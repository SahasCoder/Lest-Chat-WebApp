

function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("User Name" , user_name);
    window.alert("Name has been Stored! Login Completed!");
    window.location="main_page.html";
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    if(keyPressed == 13){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("User Name" , user_name);
    window.alert("Name has been Stored! Login Completed!");
    window.location="main_page.html";
    }
}