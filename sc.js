// Check if password and confirm password are the same
document.querySelector('.signup-form').addEventListener('submit', function (e) {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  if (password !== confirmPassword) {
    e.preventDefault();
    alert("Passwords do not match!");
  }
});




function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}


// Function to preview the image
function previewImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function() {
    const imgElement = document.getElementById("profile-img");
    imgElement.src = reader.result; // Set the src to the uploaded image
  };

  if (file) {
    reader.readAsDataURL(file); // Read the image as a Data URL
  }
}



function setLanguage(language) {
  alert(`Language switched to: ${language}`);
  // Placeholder for actual language switching logic
}
