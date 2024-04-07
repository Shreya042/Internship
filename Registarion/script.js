function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validate username
    if (username.length < 5) {
      alert("Username must be at least 5 characters long");
      return false;
    }
  
    // Validate email
    if (!email.includes("@")) {
      alert("Invalid email address");
      return false;
    }
  
    // Validate password
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
    }

    // If all validations pass
    alert("Registration successful!");
    return true;
}
