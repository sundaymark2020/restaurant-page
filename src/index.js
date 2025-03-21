import './style.css'
import { getHome } from './home'
import { getMenu } from './menu';
import {getContact} from './contact'

const restaurantPage = function() {
    const header = document.getElementById('content');
     header.appendChild(getHome());
     
    const btns = document.querySelectorAll('#btn');
    btns.forEach(function (button) {
        button.addEventListener('click',function (e) {
        if (e.target.getAttribute('data-btn') === 'home') {
            header.replaceChildren(getHome()); 
        }else if(e.target.getAttribute('data-btn')=== 'menu'){
            header.replaceChildren(getMenu())
        }else if (e.target.getAttribute('data-btn')=== 'contact'){
            header.replaceChildren(getContact());
        }

            
        })
        
        
    })
    
}




restaurantPage();

