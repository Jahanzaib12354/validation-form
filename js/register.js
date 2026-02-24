const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(e){
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("confirmPassword").value;
  const department = document.getElementById("department").value;
  const rollNumber = document.getElementById("rollNumber").value;

  // Password validation
  if(password !== confirm){
    alert("Passwords do not match. Please check and re-enter.");
    return;
  }

  if(password.length < 6){
    alert("Password must be at least 6 characters.");
    return;
  }

  // Save data in localStorage
  localStorage.setItem("userName", username);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);
  localStorage.setItem("userDepartment", department);
  localStorage.setItem("userRollNumber", rollNumber);

  alert("Registration Successful!");
  window.location.href = "login.html";
});