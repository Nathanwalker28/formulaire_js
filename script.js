//recuperation input par id 
var nameInput = document.getElementById("name_input");
var firstnameInput = document.getElementById("firstname_input");
var ageInput = document.getElementById("age_input");
var dateOfBirthInput = document.getElementById("date_of_birth_input");
var adressInput = document.getElementById("adress_input");
var telInput = document.getElementById("tel_input");

//elements html  
var nameShow = document.getElementById("name_show");
var firstnameShow = document.getElementById("firstname_show");
var ageShow = document.getElementById("age_show");
var dateOfBirthShow = document.getElementById("date_of_birth_show");
var adressShow = document.getElementById("adress_show");
var telShow = document.getElementById("tel_show");

nameInput.onkeyup = function() {
    var nameValue = this.value;
    nameShow.innerText = nameValue;
}

firstnameInput.onkeyup = function() {
    var firstnameValue = this.value;
    firstnameShow.innerText = firstnameValue;
}

ageInput.onkeyup = function() {
    var ageValue = this.value;
    ageShow.innerText = ageValue;
}

dateOfBirthInput.onkeyup = function() {
    var dateOfBirthValue = this.value;
    dateOfBirthShow.innerText = dateOfBirthValue;
}

adressInput.onkeyup = function() {
    var adressValue= this.value;
    adressShow.innerText = adressValue;
}

telInput.onkeyup = function() {
    var telValue = this.value;
    telShow.innerText = telValue;
}