document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Display form data
    var submittedData = "Name: " + name + "<br>Email: " + email + "<br>Password: " + password;
    document.getElementById("submittedData").innerHTML = submittedData;
  });
  