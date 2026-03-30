document.getElementById("submitBtn").addEventListener("click", function data() {
  const name = document.getElementById("userName").value.trim();
  const color = document.getElementById("color").value.trim();
  const genderInput = document.querySelector('input[name="gender"]:checked');

  if (!name || !color || !genderInput) {
    alert("Please fill in all fields and select gender.");
    return;
  }

  const gender = genderInput.value;
  setCookie("userName", name);
  setCookie("gender", gender);
  setCookie("color", color);
  setCookie("visits", 1);

  location.href = "profile.html";
});
