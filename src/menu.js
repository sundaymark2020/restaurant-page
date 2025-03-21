import vegetable from './images/vegetable-soup.jpg';
import jellofrice from './images/jellof-rice.jpg';
import bean from './images/beans.jpg';


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
  //jellof rice section

  const jellof = document.createElement('h1');
  jellof.textContent = 'Jellof-Rice';
  menuDiv.appendChild(jellof);

  const img2 = document.createElement('img');
  img2.src = jellofrice;
  img2.classList.add('img2')
  menuDiv.appendChild(img2);

  //beans section
  const beans = document.createElement('h1');
  beans.textContent = 'Beans';
  menuDiv.appendChild(beans);

  const img3 = document.createElement('img');
  img3.src = bean;
  menuDiv.appendChild(img3);
  img3.classList.add('img3');
  

  return menuDiv
};

export { getMenu };
