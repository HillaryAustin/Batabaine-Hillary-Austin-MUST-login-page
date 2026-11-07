// script.js - simple behaviour for the MUST student portal login/registration page.

document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.querySelector("#login form");
  var registerForm = document.querySelector("#register form");
  var pass = document.getElementById("pass");
  var confirmPass = document.getElementById("confirm");

  // 1. "Show password" checkbox ------------------------------------------
  // Adds a checkbox above the options row of each form. It reveals or hides
  // every password box inside that form.
  document.querySelectorAll("form").forEach(function (form) {
    var passwordBoxes = form.querySelectorAll('input[type="password"]');
    if (passwordBoxes.length === 0) return;

    var wrapper = document.createElement("div");
    wrapper.className = "field";
    wrapper.innerHTML =
      '<label class="check"><input type="checkbox"> Show password</label>';

    var toggle = wrapper.querySelector("input");
    toggle.addEventListener("change", function () {
      passwordBoxes.forEach(function (box) {
        box.type = toggle.checked ? "text" : "password";
      });
    });

    var options = form.querySelector(".options");
    form.insertBefore(wrapper, options);
  });

  // 2. Confirm-password check on the registration form -------------------
  // setCustomValidity makes the browser show a message and block submission
  // until both password boxes match.
  function checkPasswordsMatch() {
    if (confirmPass.value !== pass.value) {
      confirmPass.setCustomValidity("Passwords do not match.");
    } else {
      confirmPass.setCustomValidity("");
    }
  }

  if (pass && confirmPass) {
    pass.addEventListener("input", checkPasswordsMatch);
    confirmPass.addEventListener("input", checkPasswordsMatch);
  }

  // 3. Tidy up the registration number --------------------------------------
  // Removes stray spaces and converts to capitals (e.g. 2026/bse/001/ps ->
  // 2026/BSE/001/PS) when the user leaves the box.
  var regNo = document.getElementById("regno");
  if (regNo) {
    regNo.addEventListener("blur", function () {
      regNo.value = regNo.value.replace(/\s+/g, "").toUpperCase();
    });
  }

  // 4. Form submission (demo only) ---------------------------------------
  // There is no server yet, so we stop the page from reloading and show a
  // message instead. Delete these handlers once the form posts to a backend.
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var user = document.getElementById("user").value.trim();
      alert("Login form submitted for: " + user + "\n(No server connected yet.)");
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var firstName = document.getElementById("first").value.trim();
      alert("Thank you, " + firstName + "! Your account form was submitted.\n(No server connected yet.)");
      registerForm.reset();
      window.location.hash = "#login"; // send them back to the login panel
    });
  }
});