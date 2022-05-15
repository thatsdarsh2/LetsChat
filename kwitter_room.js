
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDvg376u6dGKqQmw2qqDDcQMMXTLOnMoEU",
      authDomain: "kwiet-972c8.firebaseapp.com",
      databaseURL: "https://kwiet-972c8-default-rtdb.firebaseio.com",
      projectId: "kwiet-972c8",
      storageBucket: "kwiet-972c8.appspot.com",
      messagingSenderId: "1020532675347",
      appId: "1:1020532675347:web:95fd03ecd5adf7415300e6"
    };
    user_name = localStorage.getItem("user_name")
    document.getElementById("da_Username").innerHTML = "Welcome " + user_name + "!";
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room names: " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}

getData();


      


function addRoom(){
      RoomName = document.getElementById("roomName").value;
      firebase.database().ref("/").child(RoomName).update({
            purpose : "Adding Room Name"
      });

      localStorage.setItem("Room_Name", RoomName);
      window.location = "kwitter_page.html"
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html"
}

function Logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room Name")
      window.location = "index.html"

}