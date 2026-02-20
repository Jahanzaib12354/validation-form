// complaint.js
document.addEventListener("DOMContentLoaded", function() {
  // ✅ Get registered data from localStorage
  const registeredName = localStorage.getItem("userName");
  const registeredEmail = localStorage.getItem("userEmail");

  // ✅ Fill the complaint form fields
  document.getElementById("full-name").value = registeredName || "";
  document.getElementById("email").value = registeredEmail || "";

  const complaintForm = document.getElementById("complaintForm");
  complaintForm.addEventListener("submit", function(e){
    e.preventDefault();

    // You can also save complaint in localStorage or backend here
    alert("Complaint Submitted Successfully!");
    this.reset();

    // Re-fill name/email after reset
    document.getElementById("full-name").value = registeredName || "";
    document.getElementById("email").value = registeredEmail || "";
  });
});