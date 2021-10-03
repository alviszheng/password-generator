// Define list of variables
var enter;
var confirmNum;
var confirmChar;
var confirmUppercase;
var confirmLowercase;
var options;
// Password variable array 
character = ["", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase conversion
space = [];
var toUpper = function (x) {
    return x.toUpperCase();
};
alpha2 = alpha.map(toUpper);

// Write password to the #password input
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    password = generatePassword();
    document.getElementById("password").placeholder = password;
});

//Function to generate password
function generatePassword() {
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // User input validation
        enter = parseInt(prompt("You must choose between 8 and 128"));
    } else {
        confirmNum = confirm("Will this contain numbers?");
        confirmChar = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };
    // Neither of the 4 options are chosen
    if (!confirmChar && !confirmNum && !confirmUppercase && !confirmLowercase) {
        options = alert("You must choose a criteria!");

    }
    // All 4 options are chosen
    else if (confirmChar && confirmNum && confirmUppercase && confirmLowercase) {

        options = character.concat(number, alpha, alpha2);
    }
    // 3 options are chosen
    else if (confirmChar && confirmNum && confirmUppercase) {
        options = character.concat(number, alpha2);
    }
    else if (confirmChar && confirmNum && confirmLowercase) {
        options = character.concat(number, alpha);
    }
    else if (confirmChar && confirmLowercase && confirmUppercase) {
        options = character.concat(alpha, alpha2);
    }
    else if (confirmNum && confirmLowercase && confirmUppercase) {
        options = number.concat(alpha, alpha2);
    }
    // 2 options are chosen
    else if (confirmChar && confirmNum) {
        options = character.concat(number);

    } else if (confirmChar && confirmLowercase) {
        options = character.concat(alpha);

    } else if (confirmChar && confirmUppercase) {
        options = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNum) {
        options = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        options = alpha.concat(alpha2);

    } else if (confirmNum && confirmUppercase) {
        options = number.concat(alpha2);
    }
    // Only 1 option is chosen
    else if (confirmChar) {
        options = character;
    }
    else if (confirmNum) {
        options = number;
    }
    else if (confirmLowercase) {
        options = alpha;
    }
    else if (confirmUppercase) {
        options = space.concat(alpha2);
    };

    // Random selections for all variables to generate password
    var password = [];

    for (var i = 0; i < enter; i++) {
        var getoptions = options[Math.floor(Math.random() * options.length)];
        password.push(getoptions);
    }
    var password = password.join("");
    UserInput(password);
    return password;
}
// Put the password into textbox
function UserInput(password) {
    document.getElementById("password").textContent = password;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});
