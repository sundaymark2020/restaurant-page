import vegetable from './images/vegetable-soup.jpg';


const getMenu = function () {
  const menuDiv = document.createElement("div");
  const menuHeading = document.createElement("h1");
  menuHeading.textContent = "MENU";
  menuHeading.classList.add("menuDiv");
  menuDiv.appendChild(menuHeading);

  const vegetableSoup = document.createElement('h1')
  vegetableSoup.textContent = 'Vegetable Soup';
  menuDiv.appendChild(vegetableSoup);

  const img1 = document.createElement('img');
  img1.src = vegetable;
  menuDiv.appendChild(img1);
  img1.classList.add('img1');

  return menuDiv
};

export { getMenu };
