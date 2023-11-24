
function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener('DOMContentLoaded', function() {
  var submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', submitForm);
});

function submitForm() {
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
  alert("Message sent, but there is no database to save it");
}