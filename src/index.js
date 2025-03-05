import './style.css'
import { Home } from './home'

const restaurantPage = function() {
    const header = document.getElementById('content');
    header.appendChild(Home());
    
    
}

restaurantPage();

