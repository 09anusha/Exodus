const buttonShowMore = document.querySelector(".button .show-more");
const buttonShowLess = document.querySelector(".button .show-less");
const button = document.querySelector(".button");
const arrowIcon = document.querySelector(".button .fa-solid");
const less = document.getElementById("less");
const more = document.getElementById("more");

button.addEventListener("click", () => {
  const defaultValue = {
    element: arrowIcon,
    currentIcon: "fa-arrow-down",
    newIcon: "fa-arrow-up",
  };

  if (less.style.display === "none") {
    showButton(buttonShowLess, false);
    showButton(buttonShowMore);
    less.style.display = "inline";
    more.style.display = "none";
    changeIcon(defaultValue);
  } else {
    showButton(buttonShowLess);
    showButton(buttonShowMore, false);
    less.style.display = "none";
    more.style.display = "inline";
    defaultValue.currentIcon = "fa-arrow-down";
    defaultValue.newIcon = "fa-arrow-up";
    changeIcon(defaultValue);
  }
});

function showButton(button, visible = true) {
  !visible
    ? button.classList.add("dis_none")
    : button.classList.remove("dis_none");
}

function changeIcon(value) {
  const { element, currentIcon, newIcon } = value;

  if (less.style.display === "none") {
    element.classList.add(newIcon);
  } else {
    element.classList.remove(newIcon);
  }
}
