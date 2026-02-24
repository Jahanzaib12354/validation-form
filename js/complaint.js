document.addEventListener("DOMContentLoaded", function() {

  // Auto Fill Name & Email
  document.getElementById("full-name").value = localStorage.getItem("userName") || "";
  document.getElementById("email").value = localStorage.getItem("userEmail") || "";

});


// Category Data
const categoryData = {

  electronics: {
    products: ["Mobile", "Laptop", "Headphones", "Camera"],
    issues: ["Not Working", "Damaged", "Battery Issue", "Screen Problem"]
  },

  clothes: {
    products: ["Shirt", "Pant", "Jacket", "Shoes"],
    issues: ["Wrong Size", "Color Fade", "Damaged Cloth", "Stitching Issue"]
  },

  food: {
    products: ["Pizza", "Burger", "Cake", "Juice"],
    issues: ["Expired", "Bad Taste", "Wrong Item", "Packaging Issue"]
  }

};

const category1 = document.getElementById("category1");
const category2 = document.getElementById("category2");
const category3 = document.getElementById("category3");


// Category 1 Change
category1.addEventListener("change", function() {

  const selected = this.value;

  category2.innerHTML = '<option value="">Select Product</option>';
  category3.innerHTML = '<option value="">Select Issue</option>';

  if(selected !== "") {
    categoryData[selected].products.forEach(function(product) {
      const option = document.createElement("option");
      option.textContent = product;
      option.value = product;
      category2.appendChild(option);
    });
  }

});


// Category 2 Change
category2.addEventListener("change", function() {

  const selected = category1.value;

  category3.innerHTML = '<option value="">Select Issue</option>';

  if(selected !== "") {
    categoryData[selected].issues.forEach(function(issue) {
      const option = document.createElement("option");
      option.textContent = issue;
      option.value = issue;
      category3.appendChild(option);
    });
  }

});


// Submit Form
document.getElementById("complaintForm").addEventListener("submit", function(e){

  e.preventDefault();

  const qty = document.getElementById("quantity").value;
  const description = document.getElementById("complaint-description").value;
  const solution = document.querySelector('input[name="solution"]:checked');

  if(qty === "" ||
     description === "" ||
     category1.value === "" ||
     category2.value === "" ||
     category3.value === "" ||
     !solution){

    alert("Please fill all fields!");
    return;
  }

  alert("Complaint Submitted Successfully!");
  this.reset();

});