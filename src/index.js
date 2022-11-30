import './css/main.css';
import './css/form.css';
import { renderBase, renderPage } from './Pages';
import Homepage from './Homepage';
import Menu from './Menu';
import Contact from './Contact';

document.addEventListener('DOMContentLoaded', () => {
    renderBase();
    const allPages = [Homepage, Menu, Contact];
    const links = document.querySelectorAll('.nav-link');

    links.forEach((link, i) => link.addEventListener('click', () => {
        renderPage(allPages[i], link.textContent);
        document.querySelector('.selected')?.classList.remove('selected');
        link.classList.add('selected')
    }))
    
    renderPage(Homepage, 'Home');
    links[0].classList.add('selected');
})