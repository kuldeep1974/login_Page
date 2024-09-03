document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation (replace with your own logic)
    if (username === "user" && password === "password") {
        alert("Login successful!");
        // Redirect to another page or perform other actions
    } else {
        document.getElementById('error-message').textContent = "Invalid username or password!";
    }
});
