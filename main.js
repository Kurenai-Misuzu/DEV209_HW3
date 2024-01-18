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
