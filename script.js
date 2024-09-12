function validatePassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Regular expression to check for at least one letter, one number, and the digit "8"
    var  passwordPattern= /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*()\-+.]).{6,20}$/;

    if (!passwordPattern.test(password)) {
         alert("Password must contain at least one letter, one number, and the digit '8'.");
        return false; // Prevent form submission
    }

    errorMessage.textContent = ""; // Clear any previous error message
    return true; // Allow form submission
}