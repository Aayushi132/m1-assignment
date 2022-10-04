function onSelect() {
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var contact = document.getElementById("contact");
  var val = contact.options[contact.selectedIndex].value;

  if (val == "select") {
    email.style.display = "none";
    phone.style.display = "none";
  } else if (val == "email") {
    email.style.display = "block";
    phone.style.display = "none";
  } else {
    phone.style.display = "block";
    email.style.display = "none";
  }
}
