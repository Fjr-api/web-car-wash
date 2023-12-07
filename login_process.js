// script.js

function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dummy validation (replace with actual authentication logic)
    if (username === "userlsp" && password === "smkn2bjm") {
        // alert("Login successful");
        window.location.href = "home.html";
    } else {
        alert("Login failed. Please check your username and password.");
    }
}
