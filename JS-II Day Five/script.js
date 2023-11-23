const registrationForm = document.getElementById('registrationForm');
const statusMessage = document.getElementById('status');

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Form data
    const formData = new FormData(registrationForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('keyBox1');
    const reconfirmpassword = formData.get('keyBox1');


    let res = isValidPassword(password, reconfirmpassword);
    console.log(res);
    if (!res.valid) {
        statusMessage.innerHTML = res.message;
        return;
    } else {
        // Validate email format
        if (!isValidEmail(email)) {
            statusMessage.innerHTML = 'Please enter a valid email address.';
            return;
        } else {
            // Display success message
            statusMessage.innerHTML = `Thank you, ${name}! Your message has been sent.`;

            // Clear form fields
            registrationForm.reset();
        }
    }

});

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPassword(keyBox1, keyBox2) {
    if (keyBox1.length < 4) {
        return {
            valid: false,
            message: "Password length should be at least 5 characters"
        }
    } else if (keyBox1.length > 20) {
        return {
            valid: false,
            message: "Password length should be less than 18 characters"
        }
    } else if (keyBox1 !== keyBox2) {
        return {
            valid: false,
            message: "Please re-confirm passwords"
        }
    } else {
        return {
            valid: true,
            message: ""
        }
    }
}