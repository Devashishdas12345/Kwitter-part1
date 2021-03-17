<script>
  var firebaseConfig = {
    apiKey: "AIzaSyAWq8T3Zf5GS9oDH919NMiGfCDiOe4gMIU",
    authDomain: "kwitter-6a525.firebaseapp.com",
    projectId: "kwitter-6a525",
    storageBucket: "kwitter-6a525.appspot.com",
    messagingSenderId: "673375534762",
    appId: "1:673375534762:web:bcada9bd6e32e8b1f7dad3"
  };
  firebase.initializeApp(firebaseConfig);
</script>




var x = localStorage.getItem("User name");
document.getElementById("user_name").innerHTML = " Welcome " + x;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });
      });
}
getData();

function addRoom() {
      if (document.getElementById("room_name").value == "") {
            document.getElementById("Warn2").innerHTML = "Please enter the room name in the text input given below";
      }

      else {
            var x = document.getElementById("room_name").value;
            localStorage.setItem("Room name" , x);
      }
}
