/// A function to check whetehr the parameter including special character
///
/// Parameter: String
/// Return: Boolean
function hasSpChar(str) {
    var spChar = /[!@#$%^&*(),.?":{}|<>]/;
    return spChar.test(str);
}

/// A function to check whetehr the parameter including capital letter
///
/// Parameter: String
/// Return: Matched value or null
function hasCap(str) {
    return str.match(/[A-Z]/);
}

/// A function to check whetehr the parameter is a good password
///
/// Parameter: String
/// Return: String
function CheckPassword() {
    var pwd = document.getElementById("password").value;
    if (pwd.length< 6) {
        document.getElementById("result").innerHTML = "The password is too short! At least 6 characters!"
    }

    else if (hasSpChar(pwd) == false) {
        document.getElementById("result").innerHTML = "The password is too simple! Should including special characters!"
    }

    else if (hasCap(pwd) == null) {
        document.getElementById("result").innerHTML = "The password is too simple! Should including capital letter!"
    }


    else {
        document.getElementById("result").innerHTML = "Great Password!"
    }
}


