let firstNameEle = document.getElementById("fname");
let lastNameEle = document.getElementById("lname");
let countryEle = document.getElementById("country");
let phoneNoEle = document.getElementById("phone-no");
let stateEle = document.getElementById("state");
let cityEle = document.getElementById("city");
let villageEle = document.getElementById("village");


window.addEventListener("load", () => {
    if (localStorage.getItem("userInfo")) {
        let userObj = JSON.parse(localStorage.getItem("userInfo"));
        displayUserInfo(userObj);
    }
    else {
        let firstNameValue = prompt("Enter your first name");
        let lastNameValue = prompt("Enter your last name");
        let countryValue = prompt("Enter your country");
        let phoneNoValue = prompt("Enter your phone number");
        let stateValue = prompt("Enter your state");
        let cityValue = prompt("Enter your city");
        let villageValue = prompt("Enter your village");

        let userObj = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            country: countryValue,
            phoneNo: phoneNoValue,
            state: stateValue,
            city: cityValue,
            village: villageValue
        };

        localStorage.setItem("userInfo", JSON.stringify(userObj));
        displayUserInfo(userObj);
    }
})

function displayUserInfo(userObj) {
    firstNameEle.innerText = userObj.firstName;
    lastNameEle.innerText = userObj.lastName;
    countryEle.innerText = userObj.country;
    phoneNoEle.innerText = userObj.phoneNo;
    stateEle.innerText = userObj.state;
    cityEle.innerText = userObj.city;
    villageEle.innerText = userObj.village;
}