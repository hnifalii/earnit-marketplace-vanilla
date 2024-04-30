function toggleArrow() {
  const arrow = document.getElementById("category-arrow");
  arrow.style.rotate = "180deg";
}

const loginPopup = document.getElementById("loginPopup");
const loginButton = document.getElementById("loginButton");
const closeButton = document.getElementById("closeLogin");

loginButton.addEventListener("click", function () {
  loginPopup.style.display = "block";
});

closeButton.addEventListener("click", function () {
  loginPopup.style.display = "none";
});

// window.addEventListener("click", function (event) {
//   if (event.target === loginPopup) {
//     loginPopup.style.display = "none";
//   }
// });
