document.addEventListener("DOMContentLoaded", function (event) {
    // declare field variables
    let newOrExistingField = document.querySelector("#newOrExistingField");
    let newUserField = document.querySelector("#newUserField");
    let existingUserField = document.querySelector("#existingUserField");

    // disable the new user field and the existing user field
    newUserField.disabled = true;
    existingUserField.disabled = true;



});

// function called when "click for new user" is clicked
function newUserClicked(){
    // disables the first field and enables the new user field
    newOrExistingField.disabled = true;
    newUserField.disabled = false;
}

// function called when "click for existing user" is clicked
function existingUserClicked(){
    // disables the first field and enables the existing user field
    newOrExistingField.disabled = true;
    existingUserField.disabled = false;
}

// function called when "sign up" is clicked
function submitNewUser(){
    // declare all the fields into it's own variable
    let userName = document.querySelector("#newUserName").value;
    let password = document.querySelector("#newPassword").value;
    let city = document.querySelector("#newCity").value;
    let state = document.querySelector("#newState").value;

    // save variables into local storage
    localStorage.setItem("userName", userName);
    localStorage.setItem("password", password);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);

    // alert user upon successful login
    alert(`Welcome ${userName}!`);
}

// function is called when "login" is clicked
function submitExistingUser(){
    // declare variables for user input username and password
    let userInputUserName = document.querySelector("#oldUserName").value;
    let userInputPassword = document.querySelector("#oldPassword").value;

    // fetch the stored username and password from local storage
    let currentUserName = localStorage.getItem("userName");
    let currentPassword = localStorage.getItem("password");

    // alert user if username and password is invalid if values don't match
    // or if values do match, welcome the user.
    if (userInputPassword === currentPassword && userInputUserName === currentUserName){
        alert(`Welcome back ${currentUserName}!`);
    } else {
        alert("Invalid username or password!");
    }
}