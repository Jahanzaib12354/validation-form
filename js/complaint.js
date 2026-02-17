const complaintForm = document.getElementById("complaintForm");
complaintForm.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Complaint Submitted Successfully!");
  this.reset();
});