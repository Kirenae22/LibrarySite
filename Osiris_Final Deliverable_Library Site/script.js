function validateForm() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let city = document.getElementById("city");
    let zip = document.getElementById("zip");
    let email = document.getElementById("email");

    firstName.value = capitalize(firstName.value);
    lastName.value = capitalize(lastName.value);
    city.value = capitalize(city.value);

    let zipPattern = /^\d{5}$/;
    if (!zipPattern.test(zip.value)) {
        alert("Please enter a valid 5-digit ZIP code.");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address");
        return false;
    }
    alert("Form submitted successfully");
    return true;
}

function capitalize(text) {
   let firstLetter = text.charAt(0).toUpperCase();
   let restOfWord = text.slice(1).toLowerCase();
   let newWord = firstLetter + restOfWord;
   return newWord;
}