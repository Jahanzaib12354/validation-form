const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(e){
  e.preventDefault();
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("confirmPassword").value;

  if(password !== confirm){ alert("Passwords do not match"); return; }
  if(password.length < 6){ alert("Password must be at least 6 characters"); return; }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Registration Successful!");
  window.location.href = "login.html";
});
