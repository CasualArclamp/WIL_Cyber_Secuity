function CheckPassword() {
    var pwd = document.getElementById("password").value;
    if (pwd.length < 6) {
        document.getElementById("result").innerHTML = "The password is too short!"
    }

    else {
        document.getElementById("result").innerHTML = "Graet Password!"
    }
}
