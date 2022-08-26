const cart = document.querySelector(".cart");
const empty = document.querySelector("#empty");

cart.addEventListener("click", () => {
  if (empty.style.opacity == "0") {
    empty.style.opacity = "100";
  } else {
    empty.style.opacity = "0";
  }
  // return false;
});

$("#plus").on("click", function () {
  var count = parseInt($(".count").text());
  $(".count").text(count + 1);
});

const hamburger = document.querySelector("#hamburger-1");

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("is-active")) {
    hamburger.classList.remove("is-active");
  } else {
    hamburger.classList.add("is-active");
  }
});
