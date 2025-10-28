let inputName = document.getElementById("name");
let inputPhone = document.getElementById("phone");
let placeholderName = document.getElementById("placeholder-name");
let placeholderPhone = document.getElementById("placeholder-phone");

inputName.addEventListener("focus", function() {
    placeholderName.style.display = "none";
});

inputName.addEventListener("blur", function() {
    if (inputName.value === "") {
        placeholderName.style.display = "block";
    }
});

inputPhone.addEventListener("focus", function() {
    placeholderPhone.style.display = "none";
});

inputPhone.addEventListener("blur", function() {
    if (inputPhone.value === "") {
        placeholderPhone.style.display = "block";
    }
});