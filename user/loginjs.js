function shownavitems() {
    if(document.getElementById("navitems").style.display==="none"){
        document.getElementById("navitems").style.display = "block"; 
    }
    else {
        document.getElementById("navitems").style.display = "none"; 
    }
     
}

function loginuser(){
    var email = document.getElementById("email").value;
    var email = document.getElementById("email").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      window.alert("signed in ")
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage)
    });
}