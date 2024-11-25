// Function to navigate to a specific page
function navigateTo(page) {
    // Open the specified page
    window.location.href = page;
}

// Event listeners for buttons
document.addEventListener("DOMContentLoaded", () => {
    // Login page - Register button
    const registerButton = document.getElementById("register-btn");
    if (registerButton) {
        registerButton.addEventListener("click", () => navigateTo("registration.html"));
    }

    // Registration page - Login button
    const loginButton = document.getElementById("login-btn");
    if (loginButton) {
        loginButton.addEventListener("click", () => navigateTo("login.html"));
    }
});
