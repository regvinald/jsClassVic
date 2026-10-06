
// defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm() {
    // retrieving the values of form elements
    let name = document.contactForm.name.value;
    let email = document.contactForm.email.value;
    let mobile = document.contactForm.mobile.value;
    let country = document.contactForm.country.value;
    let gender = document.contactForm.gender.value;
    let hobbies = [];
    let checkboxes = document.getElementsByName("hobbies[]");
    for(let i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }
    // defining error variables with a default value
    let nameErr = emailErr = countryErr = mobileErr = genderErr = true;

    // validate name
    if(name === "") {
        printError("nameErr", "please enter your name");
    } else{
        // regular expression for name
        let regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false) {
            printError("nameErr", "please enter a valid name");
        } else{
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // validate email address
    if(email === "") {
        printError("emailErr", "please enter your email address");
    } else{
        // regular expression for email
        let regex = /^\s+@\s+\.\s+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "please enter a valid email address");
        } else{
            printError("emailErr", "");
            nameErr = false;
        }
    }

    // validate mobile number
    if(mobile === "") {
        printError("mobileErr", "please enter your mobile number");
    } else{
        let regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "please enter a valid 10 digit mobile number");
        } else{
            printError("mobilErr", "");
            mobileErr = false;
        }
    }

    // validate country
    if(country === "select") {
        printError("countryErr", "please enter your country");
        } else{
            printError("countryErr", "");
            countryErr = false;
        }

        // validate gender
        if(gender === "") {
        printError("genderErr", "please enter your gender");
        } else{
            printError("genderErr", "");
            genderErr = false;
        }
        // prevent the form from being submitted if there are any errors
        if((nameErr||emailErr||mobileErr||countryErr||genderErr) === true) {
            return false;
        } else{
            // creating a string from input data for preview
            let dataPreview = "you've entered the following details: \n" +
            "Full Name:" + name +"\n" +
            "Email address:" + email +"\n" +
            "Mobile Number:" + mobile +"\n" +
            "country:" + country +"\n" +
            "Gender:" + gender +"\n" ;
        if(hobbies.length) {
            dataPreview += "Hobbies:" + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
        }
    
};

