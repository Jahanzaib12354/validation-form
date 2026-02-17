const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if(email === localStorage.getItem("userEmail") && password === localStorage.getItem("userPassword")){
    alert("Login Successful!");
    window.location.href = "complaint.html";
  } else {
    alert("Invalid Email or Password");
  }
});
