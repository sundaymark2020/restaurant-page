import './style.css'
import { Home } from './home'
import { menu } from './menu';

const restaurantPage = function() {
    const header = document.getElementById('content');
     header.appendChild(Home());
    header.appendChild(menu());

    const btns = document.querySelectorAll('#btn');
    btns.forEach(function (button) {
        button.addEventListener('click',function (e) {
            header.innerHTML = ''
        if (e.target.textContent === 'home') {
            header.appendChild(Home()); 
        }else if(e.target.textContent === 'menu'){
            header.appendChild(menu())
        }
            
        })
        
        
    })
    
}

restaurantPage();

