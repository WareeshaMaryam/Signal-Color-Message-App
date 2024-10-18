function result() {
    let color = prompt("Enter the color of traffic signal?");
    let message = document.getElementById("message");
    let error = document.getElementById("error");

    if (color == "") {
        alert  (`Please enter traffic signal color`);
    } else if (color == "red" || color == "RED" || color == "Red") {
      alert("Must Stop.");
    } else if (color == "yellow" || color == "YELLOW" || color == "Yellow") {
       alert("Ready to Move.");
    } else if (color == "green" || color == "GREEN" || color == "Green") {
        alert("Move now.");
    }  else {
        alert ("Please enter a right color of road traffic signal.");
    }
}

