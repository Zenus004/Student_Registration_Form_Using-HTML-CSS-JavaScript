function validateAndSubmit() {
    if (validateForm()) {
        document.getElementById("student-form").submit();
        alert("Your form has been submitted successfully!");
    }
}

function validateForm() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var course = document.getElementById("course").value;
    var residentialType = document.querySelectorAll('input[name="residential-type"]:checked');

    if (firstName.trim() == "" || lastName.trim() == "" || dob.trim() == "" || !gender || course == "Select") {
        alert("All fields are required!");
        return false;
    }

    if (firstName.trim() == "") {
        alert("First name is required.");
        return false;
    }

    if (lastName.trim() == "") {
        alert("Last name is required.");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (dob.trim() == "") {
        alert("Date of birth is required.");
        return false;
    }

    var dobDate = new Date(dob);
    var currentDate = new Date();
    if (dobDate >= currentDate) {
        alert("Please enter a valid date of birth.");
        return false;
    }

    if (!gender) {
        alert("Gender is required.");
        return false;
    }

    if (residentialType.length === 0) {
        alert("Please select at least one residential type.");
        return false;
    }

    if (course === "Select") {
        alert("Please select a course.");
        return false;
    }  

    return true;
}