const getMenu = function () {
  const menuDiv = document.createElement("div");
  const menuHeading = document.createElement("h1");
  menuHeading.textContent = "Menu";
  menuHeading.classList.add("menuDiv");
  menuDiv.appendChild(menuHeading);
  return menuDiv
};

export { getMenu };
